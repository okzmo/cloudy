import { css } from '../../styled-system/css'
import IconMaximize from './icons/IconMaximize'
import IconMinimize from './icons/IconMinimize'
import IconCross from './icons/IconCross'
import { WindowMinimise, WindowMaximise, WindowUnmaximise, Quit } from '../../wailsjs/runtime/runtime'
import { useState } from 'react'

const container = css({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "2",
  right: "3",
  gap: "2",
  bgColor: "main.900/50",
  color: "main.200",
  backdropFilter: "auto",
  backdropBlur: "lg",
  px: "1",
  py: "1",
  rounded: "md",
  zIndex: 6
})

const button = css({
  height: "6",
  width: "6",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "colors",
  rounded: "sm",
  _hover: {
    bgColor: "main.100/10",
    cursor: "pointer"
  }
})

const dragBar = css({
  widows: 1,
  zIndex: 5,
  position: 'absolute',
  width: "full",
  height: "8",
  top: "0",
  left: "0"
})

function handleMaximise(unMaximise: boolean, SetUnMaximise: React.Dispatch<React.SetStateAction<boolean>>) {
  SetUnMaximise(!unMaximise)

  if (!unMaximise) {
    WindowUnmaximise()
  } else {
    WindowMaximise()
  }
}

const Decorations = () => {
  const [unMaximise, SetUnMaximise] = useState(true)

  return (
    <>
      <div className={unMaximise ? dragBar : ""}></div>
      <div className={container}>
        <button className={button} onClick={WindowMinimise}>
          <IconMinimize height={3} width={12} />
        </button>
        <button className={button} onClick={() => handleMaximise(unMaximise, SetUnMaximise)}>
          <IconMaximize height={12} width={12} />
        </button>
        <button className={button} onClick={Quit}>
          <IconCross height={12} width={12} />
        </button>
      </div>
    </>
  )
}

export default Decorations

