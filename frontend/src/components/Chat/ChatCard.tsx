import { Link, useMatch } from "react-router-dom"
import { css, cx, sva } from "../../../styled-system/css"
import avatar from '../../assets/avatar.png'
import { ChatCard, Content } from "@/types/chat"


const chatCard = sva({
  slots: ['main', 'avatar', 'contentContainer', 'name', 'content'],
  base: {
    main: {
      position: "relative",
      width: "full",
      display: "flex",
      px: "4",
      py: "3",
      gap: "3",
      _before: {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        width: "full",
        height: "full",
        bgGradient: "to-r",
        gradientFrom: "main.700",
        gradientTo: "transparent",
        transition: "opacity",
        transitionDuration: "faster",
        opacity: 0,
      },
      _hover: {
        _before: {
          opacity: 1
        }
      }
    },
    avatar: {
      zIndex: 1,
      width: "12",
      height: "12",
      rounded: "xl",
      userSelect: "none",
      pointerEvents: "none",
    },
    contentContainer: {
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "1",
      justifyContent: "center",
    },
    name: {
      lineHeight: "tight",
      fontWeight: "medium",
      color: "white",
    },
    content: {
      lineHeight: "tight",
      color: "main.400",
      transition: "colors",
      transitionDuration: "faster",
      _groupHover: {
        color: "gray.300"
      }
    }
  }
})

const classes = chatCard()

const Content: React.FC<Content> = ({ variant, content, contentClass }) => {
  if (variant === "server") {
    return <p className={contentClass}>{content ? content : "No description"}</p>
  }

  return <p className={contentClass}>{content ? content : "No new message..."}</p>
}

const activeMain = css({
  _before: {
    opacity: 1,
  }
})

const activeContent = css({
  color: "gray.300"
})

const ChatCard: React.FC<ChatCard> = ({ variant, to, userName, serverName, content }) => {
  const match = useMatch({ path: to, end: true })
  const mainClass = match ? `${classes.main} ${activeMain}` : classes.main;
  const contentClass = match ? `${classes.content} ${activeContent}` : classes.content;


  return (
    <Link to={to} className={cx(mainClass, "group")}>
      <img src={avatar} className={classes.avatar} />
      <div className={classes.contentContainer}>
        <p className={classes.name}>{variant === "friend" ? userName : serverName}</p>
        <Content variant={variant} content={content} contentClass={contentClass} />
      </div>
    </Link >
  )
}

export default ChatCard
