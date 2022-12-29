
export const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI
export const KAKAO_JS_KEY = process.env.REACT_APP_KAKAO_JS_KEY

export function connectKakao() {
  const jsKey = process.env.REACT_APP_KAKAO_JS_KEY
  console.log(window.Kakao.isInitialized())

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(jsKey)
    console.log(window.Kakao.isInitialized())
  }
  window.Kakao.Auth.authorize({
    redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  })
}

export const isValidPassword = (pwd)=>{
  return pwd.length>5
}
export const isValidId= (id)=>{
  return id.length>5
}

