const Login = () => {
  return (
    <div className='flex min-h-screen min-w-96 items-center justify-center'>
      <div className='h-3/5 w-3/5 p-8 bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-gray-100'>Login
          <span className='text-purple-400'> ChatApp
          </span>
        </h1>
        <form>
          <div>
            <lable className='label p-2'>
              <span className='text-base label-text text-gray-100'>Username</span>
            </lable>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <lable className='label'>
              <span className='text-base label-text text-gray-100'>Password</span>
            </lable>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
          </div>
          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
            {"Don't"} have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login