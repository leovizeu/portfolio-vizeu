import React, {Fragment} from "react"
import Image from "next/image"
import {Menu, Transition} from "@headlessui/react"
import { ChevronDownIcon} from "@heroicons/react/20/solid"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function MyHeader() {
  let Links =[
    {name: 'Home', href: '#'},
    {name: 'About me', href: '#'},
    {name: 'Projects', href: '#'},
    {name: 'Experience', href: '#'},
    {name: 'Contact', href: '#'},
  ]
    return (
        <header className='shadow-md w-full fixed top-0 left-0 font-sans'>
            <div className="md:flex py-4 md:px-10 px-7">
              <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-black">
                <span className="text-3xl text-indigo-600 mr-1 pt-2">
                  <Image src="/document-text.svg" alt="icon" height={25} width={25}></Image>
                </span>
                Portfolio
              </div>
              <ul className='md:flex md:items-center md:pb-0 md:static absolute '>
                {
                  Links.map((link =>
                    <li key={link.name} className="md:ml-8 text-xl">
                      <a href={link.href} className="text-black hover:text-gray-500 duration-500">{link.name}</a>
                    </li>
                    ))
                }
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