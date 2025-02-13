import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className='flex min-h-screen max-h-screen items-center justify-center rounded-lg overflow-hidden'>
      <div className='flex sm:h-[450px] md:h-[550px] w-full border border-green-800 bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>        
        <Sidebar />
        <MessageContainer />
      </div>
    </div>)
}

export default Home