import React from 'react'
import Folder from './utils/Folder'
import { ArrowLongRight } from '../icons/ArrowLongRight'
import { Link } from '@nextui-org/react'
type OtherRemarkableProjectsProps = {
  num: string
  title: string
}

const OtherRemarkableProjects = ({
  num,
  title,
}: OtherRemarkableProjectsProps) => {
  return (
    <section className='flex flex-col items-center mt-28'>
      <p className='text-xl lg:text-xl font-normal'>
        {num}. <span className='font-normal text-xl lg:text-xl '>{title}</span>
      </p>
      <Link
        isExternal
        href='#'
        className='mt-1 text-sm font-normal dark:font-light decoration-1 underline-offset-4 transition-transform transform hover:translate-x-2'
        underline='hover'
        color='warning'
      >
        View Full Project Archive
        <span className='ml-2 '>
          <ArrowLongRight />
        </span>
      </Link>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 py-2 '>
        <Folder
          title='Card War Game'
          description='Is played with up to 5 players. Cards are shuffled, dealt face down, and the top card is played. The player with the highest card wins the round, and the next round begins'
          technologies='C#, Classes & Objects, Console'
          github='https://github.com/gallianoms/BattleCardGame'
          color='#fef3c7'
        />
        <Folder
          title='Cash Register'
          description='Calculate the change that must be delivered in a purchase transaction. Receives as arguments the purchase price, the amount paid, and the cash available at the cash register'
          technologies='Javascript, Algorithms, Console'
          github='https://github.com/gallianoms/cash_register'
          color='#d1fae5'
        />
        <Folder
          title='Caesar Cipher'
          description='The ROT13 cipher, a shift cipher where the letter values are shifted 13 places. Receives a ROT13-encoded string as input and returns the decoded string. Used to hide messages'
          technologies='Javascript, Algorithms, Console'
          github='https://github.com/gallianoms/caesars_cipher'
          color='#ede9fe'
        />
        <Folder
          title='Telephone Number Validator'
          description='The user can fill out the form field in any way they choose, as long as it is formatted as a valid US number'
          technologies='Javascript, Algorithms, Console'
          github='https://github.com/gallianoms/telephone_number_validator'
          color='#ffe4e6'
        />
      </div>
    </section>
  )
}

export default OtherRemarkableProjects
