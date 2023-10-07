import React from 'react'
import Input from '../components/UI/Input/Input'
import Button from '../components/UI/Button/Button'
import { useContext } from 'react'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const router = useNavigate()
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = e => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
    router(`/posts`)
  }

  return (
    <div>
      <h3>Страница для Логина</h3>
      <form onSubmit={login}>
        <Input type="text" placeholder='Введите логин' />
        <Input type="password" placeholder='Введите пароль' />
        <Button>Войти</Button>
      </form>
    </div>
  )
}
