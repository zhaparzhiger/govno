import React from 'react'
import Image from 'next/image'
import styles from '../app/styles/main.module.css';
import tokayev from '../../public/tokayev.svg'
const Pagemain = () => {
  return (
    <section className={`${styles['bigimg-block']} ${styles._container}`}>
    <Image className={`${styles['bigimg-block__elbasy']}`} src={tokayev} alt=""/>
  </section>
  )
}

export default Pagemain
