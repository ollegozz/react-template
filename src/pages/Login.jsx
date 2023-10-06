import React from 'react'
import Input from '../components/UI/Input/Input'
import Button from '../components/UI/Button/Button'

export default function Login() {
  return (
    <div>
      <h3>Страница для Логина</h3>
      <form>
        <Input type="text" placeholder='Введите логин' />
        <Input type="password" placeholder='Введите пароль' />
        <Button>Войти</Button>
      </form>
    </div>
  )
}
