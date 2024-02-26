import React from 'react'
import { Link } from '@nextui-org/react'

const Footer = () => {
  const linkStyles =
    'color-foreground underline-none text-sm is-external text-[#11181C] dark:text-gray-400'
  const mediumFontStyles = 'font-medium dark:text-white'

  return (
    <footer className='my-14 text-sm font-light flex'>
      <div className=''>
        <p className='dark:text-gray-400 lg:text-left text-center'>
          Design inspired{' '}
          <Link className={linkStyles} href='https://brittanychiang.com/'>
            Brittany Chiang
          </Link>{' '}
          and{' '}
          <Link className={linkStyles} href='https://bento.me/en/home'>
            Bento.
          </Link>{' '}
          Built with <span className={mediumFontStyles}>Next.js</span> and{' '}
          <span className={mediumFontStyles}>NextUI</span> plus{' '}
          <span className={mediumFontStyles}>Tailwind CSS</span>, deployed with{' '}
          <span>Github Pages</span>. All text is set in the Inter typeface.
        </p>
      </div>
    </footer>
  )
}

export default Footer
