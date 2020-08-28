import React from 'react'
import { useForm } from 'react-hook-form'
import axios from '../commons/axios'
import { toast } from 'react-toastify'

export default function Login (props) {

    // 定義 useForm 的狀態
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = async data => {
        // 測試獲取表單資訊
        // console.log(data)

        // 判斷登入
        try{
            // 將登入信箱、密碼解構
            const { email, password } = data
            // 將登入資訊傳回 後端API 檢查
            const res = await axios.post('/auth/login',{email,password})
            // 定義jwtToken 代表回傳訊息
            const jwtToken = res.data
            // 印出回傳訊息
            console.log(jwtToken)
            // 用全域方式呼叫 auth.js 裡的 setToken 函式
            global.auth.setToken(jwtToken)
            // toast吐司成功訊息方塊
            toast.success('Login Success')
            // 跳轉頁面
            props.history.push('/')
        } catch (error){
            // 定義 message 代表回傳的錯誤訊息
            const message = error.response.data.message
            // toast吐司錯誤訊息方塊
            toast.error(message)
        }
        
   }

   console.log(errors)

    return (
        <>
        <div className="login-wrapper">
        <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
        <h3>LOGIN</h3>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className={`input ${errors.email && 'is-danger'}`} name="email" type="text" placeholder="Email" ref={register({
                        required:'Email is required',
                        pattern: {
                            value: /^([A-Za-z0-9])*\@[A-Za-z0-9]*\.[A-Za-z0-9]{3}$/,
                            message : 'invalid email'
                        }
                    })} />
                    {errors.email && (
                        <p className="helper has-text-danger">{errors.email.message}</p>
                    )}
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className={`input ${errors.password && 'is-danger'}`} name="password" type="password" placeholder="Password" ref={register({
                        required:'Password is required',
                        minLength: {
                            value:6,
                            message:'Password length must not be less than 6 digits'
                        }
                    })}/>
                    {errors.password && (
                        <p className="helper has-text-danger">{errors.password.message}</p>
                    )}
                </div>
            </div>
            <div className="control">
                <button className="button is-fullwidth is-primary">Login</button>
            </div>
        </form>
        </div>
        </>
        )
}