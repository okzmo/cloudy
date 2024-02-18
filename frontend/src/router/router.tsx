import ChatView from "@/views/chat/ChatView";
import CloudView from "@/views/CloudView";
import SettingsView from "@/views/SettingsView";
import VideoView from '@/views/VideoView';
import { Root } from "@/views/Root"
import { ChatRoot } from "@/views/chat/ChatRoot";
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/chat",
        element: <ChatRoot />,
        children: [
          {
            path: "me/channel/:channelId",
            element: <ChatView />
          },
          {
            path: "community/:communityId",
            element: <ChatView />
          },
          {
            path: "community/:communityId/channel/:channelId",
            element: <ChatView />
          }
        ]
      },
      {
        path: "/videos",
        element: <VideoView />
      },
      {
        path: "/cloud",
        element: <CloudView />
      },
      {
        path: "/settings",
        element: <SettingsView />
      },
    ]
  },
])

export default router;
