const SignUp = () => {
  return (
    <div className='flex min-h-screen min-w-96 items-center justify-center'>
      <div className='h-3/5 w-3/5 p-8 bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-gray-100'>Sign Up
          <span className='text-purple-400'> ChatApp
          </span>
        </h1>

        <form>
          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-gray-100'>Full Name</span>
            </lable>
            <input type="text" placeholder="Jane Doe" className="w-full input input-bordered h-10" />
          </div>
          
          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-gray-100'>Username</span>
            </lable>
            <input type="text" placeholder="xXjanedoeXx" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <lable className='label'>
              <span className='text-base label-text text-gray-100'>Password</span>
            </lable>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <lable className='label'>
              <span className='text-base label-text text-gray-100'>Confirm Password</span>
            </lable>
            <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" />
          </div>

          <div>
            <lable className='label'>
              <span className='text-base label-text text-gray-100'>Gender</span>
            </lable>
            <input type="text" placeholder="Gender" className="w-full input input-bordered h-10"></input>
          </div>

          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
            {"Already"} have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp