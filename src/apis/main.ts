export class TelegramAPI {
  private main: string
  constructor(private token: string) {
    this.main = `https://api.telegram.org/bot${token}`
  }

  cm = (method: string) => {
    return `${this.main}${method}`
  }
}
