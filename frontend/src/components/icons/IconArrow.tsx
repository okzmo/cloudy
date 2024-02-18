import { Icon } from "@/types/icons"

const IconArrow: React.FC<Icon> = ({ width, height }) => {
  return (
    <svg height={height} width={width} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48">
        <path d="m244 400-144-144 144-144" />
        <path d="m120 256h292" />
      </g>
    </svg>
  )
}

export default IconArrow
