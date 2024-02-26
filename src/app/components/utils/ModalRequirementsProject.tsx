import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
  Chip,
} from '@nextui-org/react'
import { Envelope } from '@/app/icons/Envelope'
import { EnvelopeOpen } from '@/app/icons/EnvelopeOpen'
import { type } from 'os'

type ModalRequirementsProjectProps = {
  requirements: string
  techs: string[]
}

type ChipColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'default'
  | undefined

const getColorForIndex = (index: number): ChipColor => {
  const colors: ChipColor[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ]
  return colors[index % colors.length]
}

export default function ModalRequirementsProject({
  requirements,
  techs,
}: ModalRequirementsProjectProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [showEnvelopeIcon, setShowEnvelopeIcon] = useState(true)

  const toggleIcon = () => {
    setShowEnvelopeIcon(!showEnvelopeIcon)
  }

  return (
    <>
      <Tooltip
        placement='bottom-start'
        content='Read requirements and techs used'
      >
        <Button
          size='sm'
          isIconOnly
          className='ml-2 rounded-full bg-[#BEBAB4] text-white'
          onPress={() => {
            onOpen()
            toggleIcon()
          }}
        >
          {showEnvelopeIcon ? (
            <Envelope className='w-6 h-6' />
          ) : (
            <EnvelopeOpen className='w-6 h-6' />
          )}
        </Button>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose()
        }}
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1 text-xl lg:text-lg font-medium'>
                Requirements
              </ModalHeader>
              <ModalBody>
                {requirements.split('\n').map((line, index) => (
                  <p key={index} className='font-light'>
                    {line}
                  </p>
                ))}
                <div className='w-full flex flex-wrap justify-start gap-2 mt-4'>
                  {techs.map((tech, index) => (
                    <Chip
                      key={index}
                      className='py-4'
                      variant='flat'
                      color={getColorForIndex(index)}
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color='default' variant='light' onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
