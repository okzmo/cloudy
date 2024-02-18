
export type ChatCard = {
  variant: "friend" | "server",
  to: string,
  content?: string
  userName?: string
  serverName?: string
}

export type Content = Pick<ChatCard, 'variant' | 'content'> & { contentClass: string | undefined }
