import ChatSideBar from "@/components/Chat/ChatSideBar"
import { Outlet } from "react-router-dom"

export const ChatRoot = () => {
  return (
    <>
      <ChatSideBar />
      <Outlet />
    </>
  )
}
