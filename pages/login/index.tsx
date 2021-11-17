import React from 'react'
import Link from 'next/link'

export default function index() {

  const handleFormSubmit = (e:any) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);
  };

  return (
    <div className="flex   justify-center items-center">
      <div className="w-1/3">
        <form onSubmit={handleFormSubmit} className="bg-white   shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:shadow-lg">
          <p className="block text-blue-700  font-bold mb-2 text-center text-xl" >Login </p>

          <div className="mb-4">
            <label className="text-label" htmlFor="email">
              Email Id
            </label>
            <input className="text-field focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email Id" />
          </div>
          <div className="mb-6">
            <label className="text-label" htmlFor="password">
              Password
            </label>
            <input className="text-field focus:outline-none focus:shadow-outline" id="password" type="password"
              placeholder="******************" />
            <p className="text-error">Please enter password.</p>
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" className="btn-blue  focus:outline-none focus:shadow-outline" >
              Login
            </button>

          </div>

          <div className="text-grey-dark mt-2 text-right">
            Dont have an account? 
            <Link href="/register" className="no-underline
             border-b border-blue text-blue ">
             Create Account 
            </Link>
          </div>
          <div className="flex justify-between items-center mt-2">
            <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">OR</span>
            <hr className="w-full" />
          </div>
          <button className="google hover:bg-red-700">
            Sign up with Google</button>

        </form>

      </div></div>
  )
}
