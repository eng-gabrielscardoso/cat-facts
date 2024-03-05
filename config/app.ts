interface AppConfigContract {
  company: string
  apiBaseUrl: string
}

export default {
  company: 'DefSafe',
  apiBaseUrl: "https://meowfacts.herokuapp.com/",
} satisfies AppConfigContract
