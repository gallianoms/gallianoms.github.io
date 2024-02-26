import {
  Switch,
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from '@nextui-org/react'
import { MoonIcon } from '../icons/MoonIcon'
import { SunIcon } from '../icons/SunIcon'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

const ThemeSwitch = (props: SwitchProps) => {
  const { Component, slots, getBaseProps, getInputProps, getWrapperProps } =
    useSwitch(props)

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex flex-col gap-2'>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              'w-10 h-10',
              'flex items-center justify-center',
              'rounded-lg bg-default-100 hover:bg-default-200',
              'rounded-full',
            ],
          })}
        >
          {theme !== 'light' ? (
            <Button isIconOnly onClick={() => setTheme('light')} size='lg'>
              <SunIcon />
            </Button>
          ) : (
            <Button isIconOnly onClick={() => setTheme('dark')} size='lg'>
              <MoonIcon />
            </Button>
          )}
        </div>
      </Component>
    </div>
  )
}

export default ThemeSwitch
