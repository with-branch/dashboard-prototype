import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { AiFillCaretDown, AiOutlineCheck } from 'react-icons/ai'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ alignRight, options, handleUpdate, selected, setSelected }: { alignRight: boolean, options: Array<any>, handleUpdate: Function, selected: any, setSelected: Function }) {

    return (
        <Listbox value={selected} onChange={() => { handleUpdate()}}>
            {({ open }) => (
                <>
                    <div className="float-left mt-1 mx-4">
                        <Listbox.Button className="flex flex-row cursor-pointer text-white rounded-full border border-gray-300 bg-blue-600 py-1 pl-6 pr-4 text-left shadow-sm focus:outline-none">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none flex items-center">
                                <AiFillCaretDown className="h-5 w-4 ml-4 text-white" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className={classNames(alignRight ? 'right-4' : 'left-4', 'absolute top-12 z-40 mt-1 max-h-80 w-48 overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm')}>
                                {options.map((option) => (
                                    <Listbox.Option
                                        onClick={()=>{setSelected(options[option.id]); console.log(selected)}}
                                        key={option.id}
                                        className={({ active }) =>
                                            classNames(
                                                selected.id === option.id || active ? 'bg-gray-100' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-8 pr-4'
                                            )
                                        }
                                        value={option}
                                    >
                                            <>
                                                <span className={classNames(selected.id === option.id ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {option.name}
                                                </span>

                                                {selected.id === option.id ? (
                                                    <span
                                                        className="absolute inset-y-0 right-6 flex text-blue-600 items-center pl-1.5"
                                                    >
                                                        <AiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
