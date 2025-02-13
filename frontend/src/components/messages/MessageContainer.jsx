import Header from "./Header"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  const chatSelected = false;
  return (
    <div className='flex flex-col w-full'>
        {!chatSelected ? <NoChatSelected /> : (
        <>
        <Header/>        
        <Messages/>
        <MessageInput/>
        </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='text-center items-center sm:text-lg md:text-xl font-semibold text-gray-400 flex flex-col px-4'>
        <p>Welcome 👋 Jane Doe 😀</p>
        <p>Select a conversation to begin chatting</p>
        <TiMessages className='sm:text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}