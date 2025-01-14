import styles from './Tab.module.scss'

type Props = {
  color: 'red' | 'green' | 'brown',
  isActive?: boolean,
  children: string,
  onClick: React.MouseEventHandler<HTMLElement>,
}

export default function Tab({ children, isActive=false, color, onClick }: Props) {
  return (
    <em className={[
      styles.tab,
      isActive ? styles.active : '',
      styles[color]
    ].join(' ')} onClick={onClick}>{children}</em>
  )
}