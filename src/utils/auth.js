// 当前系统token
const TokenKey = 'token'

export const getSession = () => {
  return window.sessionStorage.getItem(TokenKey)
}

export const setSession = (token) => {
  return window.sessionStorage.setItem(TokenKey, token)
}

export const removeSession = () => {
  return window.sessionStorage.removeItem(TokenKey)
}
