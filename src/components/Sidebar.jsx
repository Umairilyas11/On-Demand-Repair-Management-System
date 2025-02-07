import React from 'react'
import { FaTachometerAlt } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className=
    'bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300'>
        <h1 className='text-2xl font-bold hidden md:block'>On-Demand Community Repair Management System</h1>
        <ul className='flex flex-col mt-5 text-xl'>
            <li className='flex item-center py-3 px-2 space-x-4 hover-rounded hover-cursor-pointer hover:bg-blue-600 hover:text-white'>
                <FaTachometerAlt/>
                <span className='hidden md:inline'>Dashboard</span>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar