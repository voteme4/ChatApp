const Header = ({name}) => {
  return (
    <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className="label-text text-white">To:</span>{" "}
        <span className="label-text text-gray-900">{name}</span>
    </div>
  )
}

export default Header