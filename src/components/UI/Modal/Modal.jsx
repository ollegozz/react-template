import React from 'react'
import css from './modal.module.css'

export default function Modal({ children, visible, setVisible }) {

    const rootClasses = [css.modal]
    if (visible) {
        rootClasses.push(css.modalActive)
    }


    return (
        <div className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}>
            <div className={css.modalContent}
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
