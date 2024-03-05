const { apiBaseUrl } = useAppConfig()

export default defineEventHandler(async (event) => {
  const data: any = await $fetch(apiBaseUrl as string)

  return data.data[0]
})
