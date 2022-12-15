import React from 'react';
import { BsArrowUpCircle, BsGithub } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black h-60">
      <div className="max-w-7xl mx-auto -mt-10 md:-mt-40 py-16 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center align-center mx-auto space-x-6 md:order-2">
          <a href="mailto:contact@withbranch.com" rel="noreferrer">
            <MdOutlineMarkEmailUnread className="text-2xl hover:text-primary" />
          </a>
          <a href="https://twitter.com/withbranch" target="_blank" rel="noreferrer">
            <BsTwitter className="text-2xl hover:text-primary" />
          </a>
          <a href="https://github.com/with-branch" target="_blank" rel="noreferrer">
            <BsGithub className="text-2xl hover:text-primary" />
          </a>
          <a href="#top" rel="noreferrer">
            <BsArrowUpCircle className="text-2xl hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  )
}