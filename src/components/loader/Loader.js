import React from 'react'
import styles from './Loader.module.css'

const Loader = ({text}) => {
  return (
    <>
    <div className='flex gap-2 items-center justify-center'>
    <span className={styles.loader}></span>
    <p>{text}</p>
    </div>
    </>
  )
}

export default Loader