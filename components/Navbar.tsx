import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Navbar() {
    return (
        <>
            <Popover as="header" className="inset-x-1 z-100">
                <div className="bg-tertiary dark:bg-onyx pt-4">
                    <nav
                        className="relative max-w-7xl mx-auto flex items-left justify-between px-6 lg:px-2"
                        aria-label="Global"
                    >
                        <div className="flex items-center flex-1">
                            <div className="flex flex-row items-center justify-between w-full md:w-auto">
                                <a href="/">
                                    <h1 className="text-primary text-3xl md:text-4xl">BRANCH</h1>
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="z-100 bg-tertiary dark:bg-onyx rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-secondary transform duration-300 rotate-0 hover:rotate-180">
                                        <span className="sr-only">Open main menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <div className="flex items-center">
                                <a
                                    href="#GetInTouch"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-300 ease-in-out rounded-full shadow-md bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none"
                                >
                                    Get in touch
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute z-20 top-0 inset-x-0 w-screen p-4 transition transform origin-top md:hidden">
                        <div className="rounded-lg shadow-md bg-tertiary dark:bg-onyx ring-1 ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div className="w-10">
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-tertiary dark:bg-onyx rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-secondary transform duration-300 rotate-0 hover:-rotate-180">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="pt-5 pb-6 justify-center items-center">
                                <div className="mt-6 px-5">
                                    <a
                                        href="#GetInTouch"
                                        className="block text-center w-full py-3 px-4 rounded-md shadow bg-primary text-white font-medium hover:secondary"
                                    >
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    )
}