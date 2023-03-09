import * as React from 'react'

import styles from './card.module.scss'

interface CardProps {
  id: string
  title: string
  created: string
  bgImgUrl: string
}

const { useRef, useEffect, forwardRef } = React

function CommonCard(
  { title = '', created, bgImgUrl }: CardProps,
  ref: React.LegacyRef<HTMLDivElement> | undefined
): JSX.Element {
  const createdAt = new Date(created).toLocaleDateString()

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <p>Episode: {title}</p>
      <p>Created: {createdAt}</p>
    </div>
  )
}

export const Card = forwardRef(CommonCard)
