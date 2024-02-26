import React from 'react'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import ThemeSwitch from './ThemeSwitch'

import { Link as ScrollLink } from 'react-scroll'

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    '01. About me',
    '02. Experience',
    '03. Projects',
    '04. Studies',
    '05. Languages',
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <ThemeSwitch />
          <p className='font-bold text-inherit pl-3'>Hello there..</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4 ' justify='center'>
        <NavbarItem>
          <ScrollLink
            to='sectionAbout'
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
            className='text-sm font-light hover:cursor-pointer hover:opacity-75 transition-color duration-300'
          >
            01. About
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink
            to='sectionExperiences'
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
            className='text-sm font-light hover:cursor-pointer hover:opacity-75 transition-color duration-300'
          >
            02. Experience
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink
            to='sectionProjects'
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
            className='text-sm font-light hover:cursor-pointer hover:opacity-75 transition-color duration-300'
          >
            03. Projects
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink
            to='sectionStudies'
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
            className='text-sm font-light hover:cursor-pointer hover:opacity-75 transition-color duration-300'
          >
            04. Studies
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink
            to='sectionLanguages'
            spy={true}
            smooth={true}
            duration={800}
            className='text-sm font-light hover:cursor-pointer hover:opacity-75 transition-color duration-300'
          >
            05. Languages
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href='/SalvadorJesusCV.pdf'
            isExternal
            variant='bordered'
            radius='sm'
            className='bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg font-medium'
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color='foreground' className='w-full' href='#' size='md'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
