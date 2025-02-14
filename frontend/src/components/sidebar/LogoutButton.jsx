import { FaSignOutAlt } from 'react-icons/fa'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {

  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
        {!loading ? (
        <FaSignOutAlt className='w-6 h-6 text-white' 
        onClick={logout}/>
        ) : (
        <span className='loading loading-spinner'></span>
        )}
    </div>
  )
}

export default LogoutButton