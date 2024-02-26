import React from 'react'

type LanguagesProps = {
  num: string
  title: string
}

const Languages = ({ num, title }: LanguagesProps) => {
  return (
    <section
      id='sectionLanguages'
      className='flex flex-col items-center justify-center mt-14 '
    >
      <p className='text-xl lg:text-xl font-normal'>
        {num}. <span className='font-normal text-xl lg:text-xl '>{title}</span>
      </p>

      <div className='mt-6'>
        <div className='grid grid-cols-2 lg:grid-cols-2 gap-7 lg:gap-7'>
          <div className='w-36 lg:w-40 h-14 bg-gray-100 lg:bg-gray-200 rounded-lg shadow'>
            <p className='flex justify-center items-center h-full text-sm dark:text-[#0a1930]'>
              English (B2)
            </p>
          </div>
          <div className='w-36 lg:w-40 h-14 bg-gray-100 lg:bg-gray-200 rounded-lg shadow'>
            <p className='flex justify-center items-center h-full text-sm dark:text-[#0a1930]'>
              Spanish (Native)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages
