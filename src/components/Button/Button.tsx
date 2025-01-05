import styles from './Button.module.scss'

type Props = {
  children: string,
  isHollow?: boolean
}

export default function Button({ children, isHollow=false }: Props) {
  return (
    <button type="button" className={[
      styles.button,
      isHollow ? styles.hollow : ''
    ].join(' ')}>{children}</button>
  )
}
