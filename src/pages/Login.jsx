import React from 'react'
import Input from '../components/UI/Input/Input'
import Button from '../components/UI/Button/Button'
import { useContext } from 'react'
import { AuthContext } from '../context'

export default function Login() {

  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = e => {    
    e.preventDefault()
    setIsAuth(true)
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
