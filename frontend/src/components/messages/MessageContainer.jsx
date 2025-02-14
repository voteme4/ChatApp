import { useEffect } from "react"
import useConversation from "../../zustand/useConversation"
import Header from "./Header"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from 'react-icons/ti'
import { useAuthContext } from "../../context/AuthContext"

const MessageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  },[setSelectedConversation]);

  return (
    <div className='flex flex-col w-full'>
        {!selectedConversation ? <NoChatSelected /> : (
        <>
        <Header name={selectedConversation.fullName}/>
        <Messages/>
        <MessageInput/>
        </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='text-center items-center sm:text-lg md:text-xl font-semibold text-gray-400 flex flex-col px-4'>
        <p>Welcome 👋 {authUser.fullName} 😀</p>
        <p>Select a conversation to begin chatting</p>
        <TiMessages className='sm:text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}