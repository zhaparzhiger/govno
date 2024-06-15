import React from 'react'
import Image from 'next/image'
import styles from '../app/styles/main.module.css';
import yellowarrrow from '../../public/page-main/yellow-arrow.svg'
import globus from '../../public/page-main/globus.svg'
import greenarrow from '../../public/page-main/green-arrow.svg'
import greendot from '../../public/page-main/green-dot.svg'
import shlyapa from '../../public/page-main/shlyapa.svg'
const Pagemain = () => {
  return (
    <section className={styles['page-main']}>
        <video className={styles['background-video']} autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4"/>
          Ваш браузер не поддерживает видео тег.
        </video>
        <div className={`${styles['page-main__container']} ${styles._container}`}>
          <div className={styles['page-main__title']}>КОЛЛЕДЖ ТВОЕЙ МЕЧТЫ</div>
          <div className={`${styles['page-main__moreinfo']} ${styles['moreinfo-block']}`}>
            <a className={styles['moreinfo-block__greenlink']} href="#"><span>Как поступить?</span><Image src={greenarrow} alt=""/></a>
            <Image className={styles['moreinfo-block__greendot']} src={greendot} alt=""/>
            <a className={styles['moreinfo-block__yellowlink']} href="#"><span>Узнать подробнее</span><Image src={yellowarrrow} alt=""/></a>
          </div>
        </div>
      </section>
  )
}

export default Pagemain
