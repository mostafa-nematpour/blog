export const getGravatarUrl = (emailHash: string, size = 80) => {
  return `https://www.gravatar.com/avatar/${emailHash}?s=${size}&d=mp`
}
