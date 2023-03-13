import * as React from 'react'

import { Carousel } from '@components'

import styles from './home-page.module.scss'

interface ImageItem {
  src: string
  alt: string
}

const { useState } = React

export function Home(): JSX.Element {
  const [images] = useState<ImageItem[]>([
    {
      alt: 'keyboard',
      src: 'https://www.teahub.io/photos/full/26-265214_download-pc-gaming-keyboard-monitor-computer-wallpapers-gaming.jpg'
    },
    {
      alt: 'asus laptop',
      src: 'https://www.canbuyornot.com/wp-content/uploads/2021/06/Asus-ROG-Strix-G15-Advantage_1.jpg'
    }
  ])

  function imageTemplate({ src, alt }: ImageItem) {
    return (
      <div className={styles.imageWrapper}>
        <img src={src} alt={alt} />
      </div>
    )
  }

  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        {/* <Carousel
          circular
          numScroll={1}
          numVisible={1}
          value={images}
          showNavigators={false}
          autoplayInterval={4000}
          itemTemplate={imageTemplate}
        /> */}
      </section>

      <section className={styles.content}>
        <p>waza</p>
        <p>maza</p>
        <p>praza</p>
      </section>
    </div>
  )
}
