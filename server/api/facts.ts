const { apiBaseUrl } = useAppConfig()

export default defineEventHandler(async (event) => {
  const data: any = await $fetch(`${apiBaseUrl as string}/?count=25`)

  return data.data
})
