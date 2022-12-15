import { useState } from 'react'
import { BsInfoCircleFill } from "react-icons/bs"


export default function InfoModal({title, description}: {title: string, description: string}) {

  const [open, setOpen] = useState(false)

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <BsInfoCircleFill onMouseEnter={() => { setOpen(true) }} className="z-20 text-2xl text-gray-400 float-right hover:text-blue-600 cursor-pointer" />
      <div onMouseLeave={() => { setOpen(false) }} className={classNames(
        open ? 'z-40 opacity-95' : 'hidden opacity-0',
        'absolute right-2 top-2 w-80 p-4 bg-white rounded-md shadow-xl'
      )}>
        <h3 className="mr-4 text-xl font-bold">
          {title}
        </h3>
        <BsInfoCircleFill onMouseEnter={() => { setOpen(true) }} className="absolute top-2 right-2 text-2xl text-blue-600 float-right cursor-pointer" />
        <p className="infoDescription text-lg mt-4 mx-2 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}


