import decode from 'jwt-decode'

// 定義 JWT 代表 登入ID
const JWT = 'store_token_id'

// 將登入資訊存入localStorage
const setToken = token => {
    localStorage.setItem(JWT,token)
}
// 將localStorage的登入資訊取出
const getToken = token => {
    return localStorage.getItem(JWT)
}

// 判斷登入後的UI介面變形
const isLogin = () =>{
    const jwtToken = getToken()
    return !!jwtToken
}

// 登入超時
const isTokenExpired = token => {
    try {
        const _info = decode(token)
        if(_info.exp < Date.now() / 1000){
            return true;
        } else return false
    } catch (error){
        return false
    }
}

// 將localStorage的登入資訊裡的BASE64碼轉換
const getUser = () => {
    const jwtToken = getToken()
    if(isLogin()){
        const user = decode(jwtToken)
        return user
    } else{
        return null
    }
}

const logout = () => {
    localStorage.removeItem(JWT)
}

// 使用全域方法 取用auth
global.auth = {
    setToken,
    getToken,
    getUser,
    logout,
    isLogin
}