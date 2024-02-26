import { FolderIcon } from '@/app/icons/FolderIcon'
import { GithubIcon } from '@/app/icons/GithubIcon'
import React from 'react'

type FolderProps = {
  title: string
  description: string
  technologies: string
  github: string
  color: string
}

const Folder = ({
  title,
  description,
  technologies,
  github,
  color,
}: FolderProps) => {
  const [tech1, tech2, tech3] = technologies.split(',')

  return (
    <div
      className='lg:w-[394px] lg:h-[270px] w-80 h-80 rounded-lg shadow transition ease-in-out delay-50 hover:-translate-y-3 duration-300 hover:shadow-lg'
      style={{
        backgroundColor: color,
      }}
    >
      <div className='flex justify-between p-4'>
        <div className='dark:text-[#12181c]'>
          <FolderIcon className='w-9 h-9' />
        </div>
        <div>
          <a
            href={github}
            rel='noopener noreferrer'
            target='_blank'
            className='hover:opacity-80'
          >
            <GithubIcon className='w-7 h-7 opacity-80' />
          </a>
        </div>
      </div>
      <div className='mx-auto w-5/6 mt-4 '>
        <h3 className='text-lg font-semibold dark:text-[#12181c] '>{title}</h3>
        <p className='mt-4 text-sm text-gray-800 '>{description}</p>
      </div>
      <div className='mt-8'>
        <ul className='flex justify-around text-xs font-mono w-4/5 pl-5 text-gray-700'>
          <li>{tech1}</li>
          <li>{tech2}</li>
          <li>{tech3}</li>
        </ul>
      </div>
    </div>
  )
}

export default Folder
