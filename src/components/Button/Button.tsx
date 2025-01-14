import styles from './Button.module.scss'

type Props = {
  children: string,
  isHollow?: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Button({ children, isHollow=false, onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className={[
      styles.button,
      isHollow ? styles.hollow : ''
    ].join(' ')}>{children}</button>
  )
}
