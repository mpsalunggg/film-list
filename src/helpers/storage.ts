export const getSessionProfile = (): any | null => {
  const profileData = sessionStorage.getItem('profile')

  if (profileData) {
    const data = JSON.parse(profileData)
    const newData = {
      id: data.id,
      username: data.username,
    }
    return newData
  } else {
    return null
  }
}

export const getSessionId = (): string | null => {
  return sessionStorage.getItem('sessionId')
}

export const getRequstToken = (): string | null => {
  return sessionStorage.getItem('requestToken')
}

export const removeAllStorage = () => {
  sessionStorage.clear()
}
