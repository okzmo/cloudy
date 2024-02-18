import { Icon } from '@/types/icons'
import React from 'react'

const IconMinimize: React.FC<Icon> = ({ height, width }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="8" height="1" rx="0.5" fill="currentColor" />
    </svg>
  )
}

export default IconMinimize
