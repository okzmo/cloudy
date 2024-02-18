import { sva } from "../../../styled-system/css"
import avatar from '@/assets/avatar.png'

type ChatBubbleType = {
  sender: boolean
  username: string
  timestamp: string
  content: string
}

const chatBubble = sva({
  slots: ['main', 'content', 'avatar', 'informations', 'username', 'timestamp', 'bubble'],
  base: {
    main: {
      display: "flex",
      gap: "4",
      alignItems: "start",
      width: "fit",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "2"
    },
    avatar: {
      height: "14",
      width: "14",
      rounded: "xl"
    },
    informations: {
      display: "flex",
      gap: "2",
      alignItems: "baseline"
    },
    username: {
      lineHeight: "none"
    },
    timestamp: {
      lineHeight: "none",
      color: "main.600",
      fontSize: "sm"
    },
    bubble: {
      px: "5",
      pt: "3",
      pb: "4",
      bgColor: "main.700",
      width: "fit",
      rounded: "3xl",
      roundedTopLeft: "xs",
      maxW: "4xl",
      lineHeight: "1.4rem"
    }
  },
  variants: {
    sender: {
      me: {
        main: {
          marginLeft: "auto"
        },
        informations: {
          justifyContent: "flex-end"
        },
        bubble: {
          roundedTopRight: "xs",
          roundedTopLeft: "3xl",
          bgColor: "brand"
        }
      },
    }
  }
})

const classesOther = chatBubble()
const classesMe = chatBubble({ sender: "me" })

const ChatBubble: React.FC<ChatBubbleType> = ({ sender, username, timestamp, content }) => {

  if (sender) {
    return (
      <div className={classesMe.main}>
        <div className={classesMe.content}>
          <span className={classesMe.informations}>
            <p className={classesMe.username}>{username}</p>
            <p className={classesMe.timestamp}>{timestamp}</p>
          </span>
          <div className={classesMe.bubble}>
            {content}
          </div>
        </div>
        <img src={avatar} className={classesMe.avatar} />
      </div>
    )
  }

  return (
    <div className={classesOther.main}>
      <img src={avatar} className={classesOther.avatar} />
      <div className={classesOther.content}>
        <span className={classesOther.informations}>
          <p className={classesOther.username}>{username}</p>
          <p className={classesOther.timestamp}>{timestamp}</p>
        </span>
        <div className={classesOther.bubble}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default ChatBubble
