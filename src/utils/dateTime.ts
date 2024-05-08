export const daysBetween = (dataTime: String): Number => {
  let dateString = dataTime.split(' ')[0]
  const date = new Date(dateString)
  const today = new Date()
  const msBetween = today.getTime() - date.getTime()
  const daysBetween = Math.round(msBetween / (1000 * 60 * 60 * 24))
  return daysBetween
}
