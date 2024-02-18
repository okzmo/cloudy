import { Icon } from '@/types/icons'

export const IconCloud: React.FC<Icon> = ({ width, height, className }) => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.44 6.26441C13.5425 5.99691 13.6 5.70441 13.6 5.39941C13.6 4.07441 12.525 2.99941 11.2 2.99941C10.7075 2.99941 10.2475 3.14941 9.8675 3.40441C9.175 2.20441 7.8825 1.39941 6.4 1.39941C4.19 1.39941 2.4 3.18941 2.4 5.39941C2.4 5.46691 2.4025 5.53441 2.405 5.60191C1.005 6.09441 0 7.42941 0 8.99941C0 10.9869 1.6125 12.5994 3.6 12.5994H12.8C14.5675 12.5994 16 11.1669 16 9.39941C16 7.85191 14.9 6.55941 13.44 6.26441Z"
        fill="currentColor" />
    </svg>
  )
}
