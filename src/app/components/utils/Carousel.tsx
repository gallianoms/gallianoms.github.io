import React, { useCallback, useEffect } from 'react'
import { Avatar, Button, Image, Link, Tooltip } from '@nextui-org/react'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselData } from '@/app/types/CarouselData'
import { ArrowUpRight } from '@/app/icons/ArrowUpRight'
import ModalRequirementsProject from './ModalRequirementsProject'
import { ChevronRightIcon } from '@/app/icons/ChevronRightIcon'
import { ChevronLeftIcon } from '@/app/icons/ChevronLeftIcon'
import NextImage from 'next/image'

type CarouselProps = {
  carouselData: CarouselData
}

const Carousel = ({ carouselData }: CarouselProps) => {
  const images = carouselData.images
  const { githubUrl, requirements, techs, websiteUrl } =
    carouselData.projectData

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='relative mx-4 lg:mx-0'>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {images.map((carousel, index) => (
            <div
              className='embla__slide relative block w-[372px] h-[270px]'
              key={index}
            >
              <NextImage
                src={carousel.src}
                // width={carousel.width}
                // height={carousel.height}
                fill
                sizes='372px'
                alt={carousel.alt}
                className='w-auto h-auto object-cover object-top rounded-lg '
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        size='sm'
        isIconOnly
        className='embla__prev absolute top-1/2 transform -translate-y-1/2 left-0 bg-transparent border-none cursor-pointer ml-2 bg-gray-200 text-gray-800 opacity-95 rounded-full'
        onClick={scrollPrev}
      >
        <ChevronLeftIcon className='w-5 h-5' />
      </Button>
      <Button
        size='sm'
        isIconOnly
        className='embla__next absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent border-none cursor-pointer mr-2 bg-gray-200 text-gray-600 rounded-full'
        onClick={scrollNext}
      >
        <ChevronRightIcon className='w-6 h-6' />
      </Button>
      <div className='absolute top-0 right-0 mt-2 mr-2'>
        <div className='flex items-center'>
          <Tooltip placement='bottom-start' content='View on GitHub'>
            <Button
              as={Link}
              isExternal
              href={githubUrl}
              size='sm'
              isIconOnly
              className=' rounded-full bg-[#BEBAB4] text-white'
            >
              <Avatar
                src='./github2.png'
                className='w-full h-full bg-gray-50'
              />
            </Button>
          </Tooltip>
          <ModalRequirementsProject requirements={requirements} techs={techs} />
          <Tooltip placement='bottom-start' content='Open Project'>
            <Button
              as={Link}
              isExternal
              href={websiteUrl}
              size='sm'
              isIconOnly
              className='ml-2 rounded-full bg-[#BEBAB4] text-white'
            >
              <ArrowUpRight className='w-4 h-4' />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Carousel
