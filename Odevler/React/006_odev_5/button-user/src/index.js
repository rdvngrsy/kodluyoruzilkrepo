import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({text}) => {
  return <div className={styles.test}>Example Button {text}</div>
}

export const Button = ({props, text, type}) => {


  return(
    <button {...props} className={styles[type]}>{text}</button>
  )
}
