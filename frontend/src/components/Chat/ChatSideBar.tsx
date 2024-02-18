import { Link, useMatch } from "react-router-dom"
import { cx, sva, css } from "../../../styled-system/css"
import ChatCard from "./ChatCard"
import avatar from "@/assets/avatar.png"
import IconArrow from "../icons/IconArrow"

const chatSidebar = sva({
  slots: ['main', 'categoryTitle', 'category', 'serverBanner', 'returnButton'],
  base: {
    main: {
      position: "relative",
      height: "screen",
      width: "72",
      borderRightWidth: "thin",
      borderColor: "main.700",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    categoryTitle: {
      position: "absolute",
      left: "0",
      top: "0",
      bgColor: "main.900/50",
      backdropFilter: "auto",
      backdropBlur: "lg",
      zIndex: 2,
      width: "full",
      borderBottomWidth: "thin",
      borderColor: "main.700",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: "2",
      fontWeight: "bold",
    },
    category: {
      paddingTop: '10',
      position: "relative",
      display: "flex",
      flexDirection: "column",
      height: "1/2",
      overflowY: "auto"
    },
    serverBanner: {
      width: "full",
      height: "52",
      objectFit: "cover",
      objectPosition: "top",
      position: "relative",
      _before: {
        content: '""',
        display: "block",
        width: "full",
        height: "full",
        bgGradient: "to-t",
        gradientFrom: "main.900",
        gradientTo: "transparent",
        zIndex: 2,
        position: "absolute",
        left: "0",
        right: "0",
      }
    },
    returnButton: {
      height: "8",
      width: "8",
      rounded: "lg",
      bgColor: "main.900/50",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: "thin",
      borderColor: "main.700",
      zIndex: 10,
      top: "2",
      left: "2",
      backdropFilter: "auto",
      backdropBlur: "lg",
      transition: "all",
      _hover: {
        bgColor: "main.900/80",
      },
      _active: {
        scale: 0.9
      }

    }
  }
})

const classes = chatSidebar()

const ChatSideBar = () => {
  const match = useMatch({ path: "/chat/community/*" })

  if (match) {
    return (
      <div className={classes.main}>
        <div className={classes.serverBanner}>
          <Link to="/chat" className={classes.returnButton}>
            <IconArrow height={16} width={16} />
          </Link>
          <img src={avatar} className={css({ width: "full", height: "full", objectFit: "cover", objectPosition: "top" })} />
        </div>
        <ChatCard variant="server" to={"/chat/community/1/channel/192"} serverName="Art" content="We love art" />
      </div>
    )
  }


  return (
    <div className={classes.main}>
      <h2 className={classes.categoryTitle}>FRIENDS</h2>
      <div className={classes.category}>
        <ChatCard variant="friend" to={"/chat/me/channel/1"} userName="mind" />
        <ChatCard variant="friend" to={"/chat/me/channel/12"} userName="okzmo" content="Hey how are you ?" />
        <ChatCard variant="friend" to={"/chat/me/channel/4"} userName="mike" content="Man yesterday was..." />
        <ChatCard variant="friend" to={"/chat/me/channel/8"} userName="Bob the builder" />
      </div>
      <h2 className={cx(classes.categoryTitle, css({ borderTopWidth: "thin", top: "50%" }))}>COMMUNITIES</h2>
      <div className={classes.category}>
        <ChatCard variant="server" to={"/chat/community/1"} serverName="Art" content="We love art" />
        <ChatCard variant="server" to={"/chat/community/2"} serverName="Urban" content="Cool cityscape" />
        <ChatCard variant="server" to={"/chat/community/3"} serverName="Gaming" content="Welcome gamers" />
      </div>
    </div>
  )
}

export default ChatSideBar
