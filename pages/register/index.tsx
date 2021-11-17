import React from 'react'
import Link from 'next/link'

export default function index() {
    return (
        <div className="flex justify-center items-center">
            <form className="bg-white  w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:shadow-lg">
                <p className="block text-blue-700  font-bold mb-2 text-center text-xl" >Sign up </p>
                <div className="mb-4">
                    <label className="text-label" htmlFor="username">
                        Name
                    </label>
                    <input className="text-field focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name" />
                </div>
                <div className="mb-4">
                    <label className="text-label" htmlFor="emailId">
                        Email Id
                    </label>
                    <input className="text-field focus:outline-none focus:shadow-outline" id="emailId" type="text" placeholder="Email Id" />
                </div>
                <div className="mb-6">
                    <label className="text-label" htmlFor="password">
                        Password
                    </label>
                    <input className="text-field focus:outline-none focus:shadow-outline" id="password" type="password"
                        placeholder="******************" />
                    <p className="text-error">Please choose a password.</p>
                </div>
                <div className="mb-6">
                    <label className="text-label" htmlFor="cpassword">
                        Confirm Password
                    </label>
                    <input className="text-field focus:outline-none focus:shadow-outline" id="cpassword" type="password"
                        placeholder="******************" />
                    <p className="text-error">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="btn-blue  focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>

                </div>

                <div className="text-grey-dark mt-6 text-right">
                    Already have an account? 
                    <Link href="/login" className="no-underline border-b border-blue text-blue hover:text-gray-500">
                        Login
                    </Link>
                </div>
            </form>

        </div>
    )
}
