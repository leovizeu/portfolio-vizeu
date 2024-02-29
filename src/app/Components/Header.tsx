"use client"

import React, {Fragment} from "react"
import { CustomButtom } from "./"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function MyHeader() {

  const handleScroll = () => {

  }

  let Links =[
    {list: '0',name: 'About', href: '#about'},
    {list: '1',name: 'Experience', href: '#experience'},
    {list: '2',name: 'Projects', href: '#projects'},
    {list: '3',name: 'Contact', href: '#contact'},
  ]
    return (
        <header className='fixed backdrop-blur shadow-md w-full blue-sm top-0 left-0 font-mono'>
          <div className="md:flex items-center justify-between sm:px-20 px-6 py-8 xl:px-56">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
              Portfolio
            </div>
            <ul className='flex justify-end md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] 
            left-0 w-full'>
              {
                Links.map((link =>
                  <div key={link.name} className="md:ml-8 text-xs md:my-0">
                    <div className="flex absolute text-blue-500">{link.list}. </div>
                    <a href={link.href} className="flex text-white hover:text-gray-500 duration-500 pl-5">{link.name}</a>
                  </div>
                  ))
              }
              <div className="flex flex-row-reverse px-5">
              <CustomButtom
                  title ="Resume"
                  containerStyles = "border border-blue-500 text-blue-500 font-bold rounded-md px-2 py-1 hover:text-white duration-500"
                  handleClick = {handleScroll}
              />
          </div>
              </ul>
            </div>
        </header>
    )
}
/*
<li className="text-black hover:text-gray-500"><a href="#">Home</a></li>
<li className="text-black hover:text-gray-500"><a href="#">About me</a></li>
<li className="text-black hover:text-gray-500"><a href="#">Projects</a></li>
<li className="text-black hover:text-gray-500"><a href="#">Experience</a></li>
<li className="text-black hover:text-gray-500"><a href="#">Contact</a></li>
*/

/*<Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Options
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  */

export default MyHeader