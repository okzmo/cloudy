import { sva } from '../../styled-system/css'
import ModuleButton from './ModuleButton'
import { IconCloud } from './icons/IconCloud'
import { IconVideo } from './icons/IconVideo'
import { IconChatBubble } from './icons/IconChatBubble'
import { IconSettings } from './icons/IconSettings'
import { IconNotifications } from './icons/IconNotifications'

const sidebar = sva({
  slots: ['main', 'modules'],
  base: {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "2",
      padding: "3",
      borderRightWidth: "thin",
      borderColor: "main.700",
      width: "fit",
      h: "screen",
      zIndex: 10,
    },
    modules: {
      display: "flex",
      flexDirection: "column",
      gap: "2",
    }
  }
})

const classes = sidebar()

const SideBar = () => {
  return (
    <aside className={classes.main}>
      <div className={classes.modules}>
        <ModuleButton to={"/chat"}>
          <IconChatBubble width={20} height={20} />
        </ModuleButton>
        <ModuleButton to={"/videos"}>
          <IconVideo width={20} height={20} />
        </ModuleButton>
        <ModuleButton to={"/cloud"}>
          <IconCloud width={20} height={20} />
        </ModuleButton>
      </div>
      <div className={classes.modules}>
        <ModuleButton to={"/settings"}>
          <IconSettings width={22} height={22} />
        </ModuleButton>
        <ModuleButton to={"/notifications"}>
          <IconNotifications width={20} height={20} />
        </ModuleButton>
      </div>
    </aside>
  )
}

export default SideBar
