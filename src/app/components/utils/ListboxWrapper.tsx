import React from 'react'

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className='pt-2 rounded-small border-default-200 dark:border-default-100 overflow-x-auto'>
    {children}
  </div>
)
