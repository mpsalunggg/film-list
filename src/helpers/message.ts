import { message } from 'antd'

type MessageType = 'success' | 'info' | 'warning' | 'error'

export const messageAlert = (type: MessageType, content: string, className?: string) => {
  message.destroy()
  return message.open({
    type,
    content,
    className,
  })
}
