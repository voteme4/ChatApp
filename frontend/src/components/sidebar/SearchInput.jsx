import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetCoversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const { conversations } = useGetCoversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error('Search must be at least 3 characters');
    }

    const conversation = conversations.find((conversation) => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
    
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    }
    else {
      toast.error('Conversation not found');
    };
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
            <FaSearch className='w-5 h-5'/>
        </button>
    </form>
  )
}

export default SearchInput  