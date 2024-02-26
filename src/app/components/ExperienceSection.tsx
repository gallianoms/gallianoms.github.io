import React, { useState } from 'react'
import { Listbox, ListboxItem } from '@nextui-org/react'
import { ListboxWrapper } from './utils/ListboxWrapper'
import { ChevronRightIcon } from '../icons/ChevronRightIcon'

type ExperienceSectionProps = {
  num: string
  title: string
}

interface ExperienceItem {
  key: string
  jobTitle: string
  company: string
  date: string
  responsibilities: string[]
}

const experienceData: ExperienceItem[] = [
  {
    key: 'endesa',
    jobTitle: 'Java Backend Developer',
    company: 'Endesa',
    date: 'November 2023 - Current',
    responsibilities: [
      'Learned about existing projects through project documentation on confluence and reading code, as well as exploring online forums and communities to expand my understanding of the topic.',
      'Improved my technical skills in the self-taught study of advanced concepts, complementing my learning with constant practice and exploration of related projects.',
      'Participated in meetings and discussions related to the development of the project, which allowed me to develop effective communication skills when presenting ideas and collaborating with the team in solving problems.',
    ],
  },
  {
    key: 'gespromos',
    jobTitle: 'Brand promoter for HP',
    company: 'Gespromos',
    date: 'September 2023 - Current',
    responsibilities: [
      'Increased sales of HP laptops and printers at FNAC through effective promotion and marketing strategies.',
      'Developed an in-depth knowledge of HP products to provide customer guidance on the features and benefits of laptops and printers.',
      'Prepared regular reports on sales performance and the reception of HP products at FNAC.',
      'Collaborated closely with FNAC staff to ensure a satisfactory shopping experience.',
    ],
  },
  {
    key: 'mexican_grill',
    jobTitle: 'Kitchener',
    company: 'Mexican Grill',
    date: 'October 2022 - February 2023',
    responsibilities: [
      'Conducted cash handling duties and ensured precise cash register reconciliations, maintaining a professional and organized financial process.',
      'Provided comprehensive training to new employees, facilitating their smooth adaptation to their respective job positions.',
      'Responsible for welcoming customers, taking their orders, and providing efficient food and beverage service with a focus on customer satisfaction.',
    ],
  },
  {
    key: 'party_cake',
    jobTitle: 'Baker',
    company: 'Party Cake',
    date: 'February 2022 - September 2022',
    responsibilities: [
      'Responsible for ensuring a clean and orderly kitchen environment, maintaining high standards of cleanliness and organization.',
      'In charge of the preparation and baking of a diverse range of breads, cakes, and cookies, delivering delicious baked goods to satisfy customer cravings.',
      'Proficient in precise ingredient blending, dough preparation techniques, and meticulous oven temperature control for optimal baking results.',
    ],
  },
  {
    key: 'astor',
    jobTitle: 'PHP Developer',
    company: 'ASTOR',
    date: 'July 2020 - November 2021',
    responsibilities: [
      'Developed software for customer accounts payable migration from Excel and Word documents.',
      'Created an intuitive interface for account management that allowed users to view, search, and filter information.',
      'Created a RESTful API in Symfony to automate the extraction and storage of data from Excel and Word docs using SQL queries.',
      'Added automatic report generation and data export to various formats.',
    ],
  },
]

const ExperienceSection = ({ num, title }: ExperienceSectionProps) => {
  const [visibleOption, setVisibleOption] = useState<string>('endesa')
  const [selectedKeys, setSelectedKeys] = React.useState<any>(['endesa'])

  const toggleOption = (option: string) => {
    setVisibleOption(option)
  }

  return (
    <section id='sectionExperiences' className='flex flex-col mt-14'>
      <p className='text-xl lg:text-xl font-normal text-center'>
        {num}. <span className='font-normal text-xl lg:text-xl '>{title}</span>
      </p>

      <div className='flex w-full mt-4 justify-center'>
        <ListboxWrapper>
          <Listbox
            aria-label='Single selection jobs'
            variant='flat'
            disallowEmptySelection
            selectionMode='single'
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            className='flex-row'
          >
            {experienceData.map(exp => (
              <ListboxItem key={exp.key} onClick={() => toggleOption(exp.key)}>
                {exp.company}
              </ListboxItem>
            ))}
          </Listbox>
        </ListboxWrapper>
      </div>

      <div className='mt-6'>
        {experienceData.map(exp => (
          <div
            key={exp.key}
            className={visibleOption === exp.key ? '' : 'hidden'}
          >
            <h3 className='font-normal text-lg'>
              {exp.jobTitle} <span className='font-light'>·</span>{' '}
              <span className='font-extralight text-md'>{exp.company}</span>
            </h3>
            <p className='text-xs font-mono pt-1'>{exp.date}</p>
            <ul className='mt-3'>
              {exp.responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className='text-md flex self-center py-1 items-center'
                >
                  <div className='w-5 h-5 flex-shrink-0'>
                    <ChevronRightIcon className='w-full h-full text-amber-500' />
                  </div>
                  <div className='flex-grow'>{responsibility}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
