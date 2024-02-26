import { Avatar, Button } from '@nextui-org/react'
import React from 'react'

const SocialMediaSection = () => {
  const socialMediaData = [
    {
      platform: 'GitHub',
      username: '@gallianoms',
      website: 'https://github.com/gallianoms',
      avatarSrc: './github.png',
      buttonText: 'Follow',
    },
    {
      platform: 'LinkedIn',
      username: '@gallianoms',
      website: 'https://www.linkedin.com/in/gallianoms/',
      avatarSrc: './linkedin.png',
      buttonText: 'Connect',
    },
    {
      platform: 'Medium',
      username: '@gallianoms',
      website: 'https://medium.com/@gallianoms',
      avatarSrc: './medium.png',
      buttonText: 'Follow',
    },
    {
      platform: 'Instagram',
      username: '@gallianoms',
      website: 'https://www.instagram.com/gallianoms/',
      avatarSrc: './instagram.png',
      buttonText: 'Follow',
    },
  ]

  return (
    <section className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-9'>
      {socialMediaData.map((socialMedia, idx) => (
        <div className='w-44 h-44 p-4 border rounded-3xl shadow-sm' key={idx}>
          <Avatar radius='sm' src={socialMedia.avatarSrc} className='' />
          <p className='text-sm mt-3'>{socialMedia.username}</p>
          <p className='text-xs mt-1 text-slate-500'>{socialMedia.platform}</p>
          <Button
            className='font-semibold w-20 mt-5 rounded bg-gray-100 hover:bg-gray-200 border dark:text-gray-900 dark:hover:bg-gray-300 shadow-sm'
            size='sm'
            onClick={() => window.open(socialMedia.website)}
          >
            {socialMedia.buttonText}
          </Button>
        </div>
      ))}
    </section>
  )
}

export default SocialMediaSection
