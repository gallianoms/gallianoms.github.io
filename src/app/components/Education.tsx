import { Card, CardBody, Chip } from '@nextui-org/react'
import React from 'react'

type EducationProps = {
  num: string
  title: string
}

interface EducationItem {
  title: string
  duration?: string
  university: string
  date: string
}

const educationData: EducationItem[] = [
  {
    title: 'Bootcamp C# y .NET ',
    duration: '336h',
    university: 'Fundación Esplai /Barcelona',
    date: '2023',
  },
  {
    title: 'JS Algoritmos, E. Datos',
    duration: '300h',
    university: 'FreeCodeCamp /Remote',
    date: '2022',
  },
  {
    title: 'JS Fullstack Developer',
    duration: '400h',
    university: 'Platzi /Remote',
    date: '2021',
  },
  {
    title: 'Computer Science Degree',
    university: 'Univ. de Oriente /Stgo de Cuba',
    date: '2014 - 2019 (Título Legalizado y Apostillado)',
  },
]

const Education = ({ num, title }: EducationProps) => {
  return (
    <section
      id='sectionStudies'
      className='flex flex-col items-center justify-center mt-14 '
    >
      <p className='text-xl lg:text-xl font-normal'>
        {num}.{' '}
        <span className='font-normal text-xl lg:text-xl text-center'>
          {title}
        </span>
      </p>

      <Card className='w-full mt-6 border  dark:border-0 shadow'>
        <CardBody>
          {educationData.map((item, index) => (
            <article
              className={
                index > 0
                  ? 'mt-6 hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-lg p-3'
                  : 'hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-lg p-3'
              }
              key={index}
            >
              <div className='flex items-center justify-between'>
                <p className='text-lg font-medium dark:text-gray-200'>
                  {item.title}
                </p>
                {item.duration ? (
                  <Chip
                    color='default'
                    variant='flat'
                    className='ml-6 text-sm font-normal'
                  >
                    {item.duration}
                  </Chip>
                ) : null}
              </div>
              <div className='mt-0.5'>
                <p className='text-base font-light dark:text-gray-300'>
                  {item.university}
                </p>
                <p className='text-sm font-light dark:text-gray-400'>
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </CardBody>
      </Card>
    </section>
  )
}

export default Education
