import styles from './card.module.scss'

interface CardProps {
  title: string
}

export function Card({ title = '' }: CardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
    </div>
  )
}
