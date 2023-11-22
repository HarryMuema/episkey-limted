import React,{Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import {FaChevronDown} from 'react-icons/fa'
import {Link, NavLink} from 'react-router-dom'

const HomeNav = () => {
  return (
    <nav class="w-screen h-[60px] fixed flex items-center bg-blue">
        <Link to="/" className='font-poppins font-semibold italic text-[24px] mx-[60px] text-white-100'> Episkey </Link>
        <div className='mx-auto text-right'>
            <Menu as="div" className="relative inline-block text-left">
                <div className='flex items-center '>
                    <Menu.Button className="inline-flex font-medium font-lato mr-[50px] text-white-100 w-full justify-center items-center">
                        Solutions
                        <FaChevronDown size={10} className="ml-[10px] mt-[5px]"/>
                    </Menu.Button>
                    <Menu.Button className="inline-flex font-medium font-lato mr-[50px] text-white-100 w-full justify-center items-center">
                        Use<span>cases</span>
                        <FaChevronDown size={10} className="ml-[10px] mt-[5px]"/>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                ></Transition>
            </Menu>
            <NavLink to={"/"} className="font-medium font-lato mr-[50px] text-white-100 w-full justify-center items-center">About</NavLink>
            <NavLink to={"/"} className="font-medium font-lato mr-[50px] text-white-100 w-full justify-center items-center">Blog</NavLink>
        </div>
    </nav>
  )
}

export default HomeNav