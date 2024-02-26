import React, { SVGProps } from 'react'

interface ArrowUpRightProps extends SVGProps<SVGSVGElement> {}

export const ArrowUpRight: React.FC<ArrowUpRightProps> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2.0}
    stroke='currentColor'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
    />
  </svg>
)
