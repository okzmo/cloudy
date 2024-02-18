import { Outlet } from "react-router-dom"
import SideBar from "@/components/SideBar"
import { css } from "../../styled-system/css"
import Decorations from "@/components/Decorations"

export const Root = () => {
  return (
    <div className={css({ display: "flex" })}>
      <SideBar />
      <Decorations />
      <Outlet />
    </div>
  )
}
