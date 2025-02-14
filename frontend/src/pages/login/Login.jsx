import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {loading, login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({username, password});
    console.log(username, password);
  }

  return (
    <div className='flex min-h-screen min-w-96 items-center justify-center'>
      <div className='h-3/5 w-3/5 p-8 bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-gray-100'>Login
          <span className='text-purple-400'> ChatApp
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-gray-100'>Username</span>
            </lable>
            <input type="text" 
            placeholder="Enter username" 
            className="w-full input input-bordered h-10" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div>
            <lable className='label'>
              <span className='text-base label-text text-gray-100'>Password</span>
            </lable>
            <input type="password" 
            placeholder="Enter password" 
            className="w-full input input-bordered h-10" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
            {"Don't"} have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2'
            disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login