import { TelegramAPI } from './apis/main'
import { makeRequest } from './helpers/request'

interface getMeResponse {
  ok: boolean
  result: {
    id: number
    is_bot: boolean
    first_name: string
    username: string
    can_join_groups: boolean
    can_read_all_group_messages: boolean
    supports_inline_queries: boolean
  }
}

export class TelegramBot extends TelegramAPI {
  constructor(token: string) {
    super(token)
  }

  getMe = () => makeRequest<getMeResponse>(this.cm('/getMe'))
}

const bot = new TelegramBot('1800634258:AAGDpscEWcVGZN-B8yf3w7shp5OSp1c3Pig')

;(async () => {
  const res = await bot.getMe()

  console.log(res.data?.result.username)
})()
