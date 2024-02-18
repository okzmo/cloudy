import { Icon } from '@/types/icons'
import React from 'react'

const IconCross: React.FC<Icon> = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10.3708" height="0.942797" rx="0.471398" transform="matrix(0.70711 -0.707104 0.70711 0.707104 0 7.33301)" fill="currentColor" />
      <rect width="10.3708" height="0.942797" rx="0.471398" transform="matrix(0.70711 0.707104 -0.70711 0.707104 0.667969 0)" fill="currentColor" />
    </svg>
  )
}

export default IconCross
