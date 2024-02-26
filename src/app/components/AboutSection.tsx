import React from 'react'

type AboutSectionProps = {
  num: string
  title: string
}

const AboutSection = ({ num, title }: AboutSectionProps) => {
  const listItems = [
    {
      className: 'flex font-mono mb-1',
      content: 'Java, Springboot',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
    {
      className: 'flex font-mono mb-1',
      content: 'Javascript, Typescript',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
    {
      className: 'flex font-mono mb-1',
      content: 'Tailwindcss',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
    {
      className: 'flex font-mono mb-1',
      content: 'React, Next.js',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
    {
      className: 'flex font-mono mb-1',
      content: 'Teamwork',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
    {
      className: 'flex font-mono',
      content: 'Node, Express',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
    {
      className: 'flex font-mono mb-1',
      content: 'Empathy',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
    {
      className: 'flex font-mono mb-1',
      content: 'SQL, MongoDB',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
    {
      className: 'flex font-mono mb-1',
      content: 'Kanban/Scrum',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        className: 'w-5 h-5 text-amber-500',
        path: {
          fillRule: 'evenodd' as const,
          d: 'M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z',
          clipRule: 'evenodd',
        },
      },
    },
  ]

  return (
    <section id='sectionAbout' className='flex flex-col mt-14'>
      <p className='text-xl lg:text-xl font-normal text-center'>
        {num}. <span className='font-normal text-xl lg:text-xl '>{title}</span>
      </p>
      <article className='mt-6'>
        <p className='pb-4 '>
          My passion for technology began at the age of 7, when my father
          brought our first computer home. This moment inspired me to study
          Computer Science (C.C.) at university.
        </p>
        <p className='pb-4 '>
          Before graduating from C.C., I interned as a PHP developer at ASTOR.
          Additionally, I lived for two years in the United States, where I not
          only worked outside the technology sector, but also improved my
          English.
        </p>
        <p className='pb-4 '>
          I currently reside in Spain, where I continue my training through
          bootcamps and courses. I play two roles: the first as a promoter of
          the HP brand, providing advice on computers and printers, and the
          second as an intern at the company Endesa, where I use backend
          languages such as Java and the Spring Boot framework.
        </p>
        <p className='pb-2'>
          Outside of the technological sphere, I value the moments with my wife
          and our beloved dog, Duna. My hobbies include watching anime series,
          playing chess, spending time with family, and exploring the city.
        </p>
        <ul className='grid grid-cols-2 lg:grid-cols-3 text-sm mt-4'>
          {listItems.map((item, idx) => (
            <li key={idx} className={item.className}>
              <svg
                xmlns={item.svg.xmlns}
                viewBox={item.svg.viewBox}
                fill={item.svg.fill}
                className={item.svg.className}
              >
                <path
                  fillRule={item.svg.path.fillRule}
                  d={item.svg.path.d}
                  clipRule={item.svg.path.clipRule}
                />
              </svg>
              {item.content}
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default AboutSection
