import React from 'react'
import styles from './Notification.module.css'

const Notification = ({ alertObject }) => {
  if (alertObject.type === null) {
    return null
  } else if (alertObject.type === "success") {

  return (
    <div className={styles.success}>
      {alertObject.msg}
    </div>
  )
  } else if (alertObject.type === "error") {

  return (
    <div className={styles.error}>
      {alertObject.msg}
    </div>
  )
  }
}

export default Notification