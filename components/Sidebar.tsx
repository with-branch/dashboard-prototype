import { RiSettings3Line } from 'react-icons/ri'
import { useRouter } from 'next/router'
import { BiLogOut } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { ImStatsBars } from 'react-icons/im'
import { MdWarning } from 'react-icons/md'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {

    // Sidebar for navigating the application


    // set up page routing

    const router = useRouter();


    // shows/hides the sidebar

    const toggleSidebar = () => {
        const sidebar = document.getElementById('sidebar')
        sidebar !== null ? (
            sidebar.classList.toggle('md:w-16'),
            sidebar.classList.toggle('md:w-60'),
            sidebar.classList.toggle('w-12'),
            sidebar.classList.toggle('w-48')
        ) : (null)
    }


    // sidebar links

    const navigation = [
        { name: 'Dashboard', href: '', icon: ImStatsBars, current: true },
        { name: 'Issues', href: '', icon: MdWarning, current: false },
        { name: 'Settings', href: '', icon: RiSettings3Line, current: false },
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <>
            <div>
                <div id="sidebar" onMouseEnter={() => { toggleSidebar(); }} onMouseLeave={() => { toggleSidebar(); }} className="absolute top-0 left-0 flex flex-col z-40 max-w-xs h-screen w-12 md:w-16 border-r border-gray-200 dark:border-onyx bg-blue-600 dark:bg-raisin transform duration-300 cursor-pointer  overflow-hidden">
                    <div className="flex-1 h-0 pt-5 pb-4 ">
                        <nav className="mt-5 px-1 md:px-2 space-y-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-white dark:bg-black text-black dark:text-white' : 'text-white dark:text-white hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white',
                                        'group flex items-center px-2 py-2 text-xl font-medium rounded-md'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-blue-600' : item.icon === MdWarning ? 'rounded-md p-1 font-extrabold border-2 border-blue-100 text-blue-100 group-hover:text-primary' : 'text-blue-100 group-hover:text-primary',
                                            'mr-4 flex-shrink-0 h-6 w-6 md:h-8 md:w-8'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </a>
                            ))}

                        </nav>
                    </div>
                    <div className="flex py-4 px-4 border-t border-gray-200 dark:border-onyx">
                        <button className="flex-shrink-0 group block">
                            <div className="flex items-center">
                                <div className="flex flex-row">
                                    <a
                                        href="/"
                                        className="flex flex-row"
                                    >
                                        <BiLogOut className="h-6 w-6 text-gray-100 dark:text-gray-400 group-hover:text-gray-300" aria-hidden="true" />
                                        <p className="ml-6 text-md font-medium text-gray-100 dark:text-gray-400 group-hover:text-gray-300">Logout</p>
                                    </a>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}