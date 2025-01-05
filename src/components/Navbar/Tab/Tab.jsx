import styles from './Tab.module.scss'

export default function Tab({ children, isActive=false }) {
  return (
    <em className={[
      styles.tab,
      isActive ? styles.active : ''
    ].join(' ')}>{children}</em>
  )
}