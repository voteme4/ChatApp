import { useState } from 'react';
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading, signup} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(inputs);
    await signup(inputs);
  }

  return (
    <div className='flex min-h-screen min-w-96 items-center justify-center'>
      <div className='h-3/5 w-3/5 p-8 bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-gray-100'>Sign Up
          <span className='text-purple-400'> ChatApp
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-gray-100'>Full Name</span>
            </lable>
            <input type="text" placeholder="Jane Doe" className="w-full input input-bordered h-10" 
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
          </div>
          
          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-gray-100'>Username</span>
            </lable>
            <input type="text" placeholder="xXjanedoeXx" className="w-full input input-bordered h-10" 
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
          </div>

          <div>
            <lable className='label'>
              <span className='text-base label-text text-gray-100'>Password</span>
            </lable>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
          </div>

          <div>
            <lable className='label'>
              <span className='text-base label-text text-gray-100'>Confirm Password</span>
            </lable>
            <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" 
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
          </div>

          <div>
            <lable className='label'>
              <span className='text-base label-text text-gray-100'>Gender</span>
            </lable>
            <input type="text" placeholder="Gender" className="w-full input input-bordered h-10" 
            value={inputs.gender}
            onChange={(e) => setInputs({...inputs, gender: e.target.value})}/>
          </div>

          <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
            {"Already"} have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2'
            disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp