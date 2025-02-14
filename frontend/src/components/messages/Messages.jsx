import Message from "./Message"
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton"
import { useEffect, useRef } from "react";

const Messages = () => {
  const {loading, messages} = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" }, 100)
    })
  },[messages]);
  //console.log("Messages:", messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
        {!loading && messages.length > 0 && messages.length > 0 && messages.map((message) => (
          <div key = {message._id} ref = {lastMessageRef}>
            <Message  message={message} />
          </div>)
        )}
        
        {loading && [...Array(3)].map((_, idx) => (
            <MessageSkeleton key={idx}/>
        ))}
        {!loading && messages.length == 0 && (
          <p className='text-center'>Please send a message to begin</p>
        )}
    </div>
  )
}

export default Messages