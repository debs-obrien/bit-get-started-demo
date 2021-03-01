import React from 'react'
import styles from './title.module.scss'
import cs from 'classnames'

/**
 *  A simple title component.
 */
export function Title({ text }) {
  return (
    <h1 className={cs(styles.base)}>
      {text}
    </h1>
  )
}

