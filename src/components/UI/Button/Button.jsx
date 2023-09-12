import React from 'react'
import css from './button.module.css'

export default function Button({children, ...props}) {
  return (
    <button {...props }className={css.button}>
        {/*  ...props все переданые пропсы попадум в кнопку*/}
        {children}
    </button>
  )
}
