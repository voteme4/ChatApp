const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://avatar.iran.liara.run/public?username=$420" alt = "avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex justify-between gap-3'>
                    <p className='font-bold text-gray-200'>JaneDoe</p>
                    <span className="text-xl">:D</span>
                </div>
            </div>
        </div>

        <div className="dividr my-0 py-0 h-1" />
    </>
  )
}

export default Conversation