import React from 'react'
import Carousel from './utils/Carousel'
import { CarouselData } from '../types/CarouselData'

type ProjectSectionProps = {
  num: string
  title: string
}

const ProjectSection = ({ num, title }: ProjectSectionProps) => {
  const carouselData: CarouselData[] = [
    {
      images: [
        {
          width: 372,
          height: 310,
          src: './project1/1.png',
          alt: '',
        },
        {
          width: 372,
          height: 310,
          src: './project1/2.png',
          alt: '',
        },
        {
          width: 372,
          height: 310,
          src: './project1/3.png',
          alt: '',
        },
        {
          width: 372,
          height: 310,
          src: './project1/4.png',
          alt: '',
        },
      ],
      projectData: {
        githubUrl:
          'https://github.com/gallianoms/pruebas-tecnicas/tree/main/pruebas/01-reading-list/gallianoms',
        requirements: `
          1. Visualización de Libros Disponibles\n
          2. Creación de Lista de Lectura\n
          3. Filtrado de Libros por Género\n
          4. Sincronización de Estado\n
          5. Persistencia de Datos\n
          6. Sincronización entre pestañas\n
          7. Despliegue\n
          8. Pruebas (Test)\n
          9. Añadir un nuevo filtro para filtrar los libros por número de páginas (EXTRA)
        `,
        techs: ['TypesScript', 'React', 'Vitest', 'TailwindCSS', 'DaisyUI'],
        websiteUrl: 'https://gallianoms-01.vercel.app/',
      },
    },

    {
      images: [
        {
          width: 372,
          height: 310,
          src: './project2/1.png',
          alt: '',
        },
        {
          width: 372,
          height: 310,
          src: './project2/2.png',
          alt: '',
        },
        {
          width: 372,
          height: 310,
          src: './project2/3.png',
          alt: '',
        },
      ],
      projectData: {
        githubUrl: 'https://github.com/gallianoms/pokedux',
        requirements: '',
        techs: ['TypesScript', 'React', 'Redux', 'TailwindCSS', 'DaisyUI'],
        websiteUrl: 'https://pokedux-platzi.vercel.app',
      },
    },
    {
      images: [
        {
          width: 372,
          height: 310,
          src: './project3/1.png',
          alt: '',
        },
        {
          width: 372,
          height: 310,
          src: './project3/2.png',
          alt: '',
        },
      ],
      projectData: {
        githubUrl: 'https://github.com/gallianoms/react_supabase_nn',
        requirements: '',
        techs: ['JavaScript', 'React', 'Hooks', 'CRUD', 'Supabase'],
        websiteUrl: 'https://react-supabase-peach.vercel.app/c',
      },
    },
    {
      images: [
        {
          width: 372,
          height: 310,
          src: './project4/1.png',
          alt: '',
        },
        {
          width: 372,
          height: 310,
          src: './project4/2.png',
          alt: '',
        },
        {
          width: 372,
          height: 310,
          src: './project4/3.png',
          alt: '',
        },
      ],
      projectData: {
        githubUrl: 'https://github.com/gallianoms/react_native_nyt_api',
        requirements: '',
        techs: [
          'React Native',
          'Expo',
          'Firebase',
          'Stripe',
          'React Hook Form',
        ],
        // websiteUrl: '',
      },
    },
  ]

  return (
    <section id='sectionProjects' className='items-center justify-center mt-14'>
      <p className='text-xl lg:text-xl font-normal text-center'>
        {num}. <span className='font-normal text-xl lg:text-xl '>{title}</span>
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 py-2'>
        <Carousel carouselData={carouselData[0]} />
        <Carousel carouselData={carouselData[1]} />
        <Carousel carouselData={carouselData[2]} />
        <Carousel carouselData={carouselData[3]} />
      </div>
    </section>
  )
}

export default ProjectSection
