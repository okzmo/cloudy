import { Icon } from '@/types/icons'
import React from 'react'

const IconMaximize: React.FC<Icon> = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="7" height="7" rx="0.5" stroke="currentColor" />
    </svg>
  )
}

export default IconMaximize
