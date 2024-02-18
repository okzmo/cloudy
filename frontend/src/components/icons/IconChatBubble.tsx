import { Icon } from "@/types/icons"

export const IconChatBubble: React.FC<Icon> = ({ height, width, className }) => {
  return (
    <svg height={height} width={width} className={className} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 6.92216C16 8.52479 15.36 10.0063 14.2836 11.178C12.8436 12.7941 10.56 13.831 8 13.831L4.20364 15.9184C3.56364 16.2821 2.74909 15.7838 2.83636 15.0969L3.2 12.444C1.25091 11.1915 0 9.18469 0 6.92216C0 4.55188 1.36727 2.46455 3.46182 1.22554C4.75636 0.444427 6.31273 0 8 0C12.4218 0 16 3.09739 16 6.92216Z"
        fill="currentColor" />
    </svg>
  )
}
