import React from 'react'
import Icon from './svg/Icon'
import Link from 'next/link'

export default function Navbar() {
    return (

        <nav className="mb-4 flex justify-between bg-primary-700 text-white w-full">
            <div className="px-5 xl:px-12 py-4 flex w-full items-center">
                <div className="text-3xl font-bold font-heading flex" >
                    <Icon.Logo />
                    <Link  href="/home" className="px-4"> Dc Collections </Link>
                </div>
                <ul className=" md:flex px-4 mx-auto  font-semibold font-heading space-x-12">
                    <li><Link href="/home"className="hover:text-gray-200">Home</Link></li>
                    <li><Link href="/home" className="hover:text-gray-200">Catagory</Link></li>
                    <li><Link href="/products" className="hover:text-gray-200">Collections</Link></li>
                </ul>
                <div className="md:hidden xl:flex  space-x-5 items-center">
                    <a title="Logout" className="  flex items-center hover:text-gray-200" href="#">
                        <Icon.Logout />
                    </a>
                </div>
            </div>
        </nav>


    )
}
