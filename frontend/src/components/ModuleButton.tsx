import { ReactNode } from "react"
import { Link, useMatch } from "react-router-dom"
import { css } from "../../styled-system/css"

type ModuleButton = {
  to: string
  children: ReactNode
}

const button = css({
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  rounded: "lg",
  h: "14",
  w: "14",
  transition: "all",
  bg: "main.800",
  borderWidth: "thin",
  borderColor: "main.700",
  _hover: {
    bg: 'brand',
    borderColor: "white",
    borderWidth: "medium",
  },
  _active: {
    scale: "0.95"
  }
})

const activeButton = css({
  bg: 'brand',
  borderColor: "white",
  borderWidth: "medium",
})

const ModuleButton: React.FC<ModuleButton> = ({ to, children }) => {
  const match = useMatch({ path: `${to}/*` })
  const buttonClass = match ? `${button} ${activeButton}` : button;

  return (
    <Link to={to} className={buttonClass}>
      {children}
    </Link>
  )
}

export default ModuleButton
