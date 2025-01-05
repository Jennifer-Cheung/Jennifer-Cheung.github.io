import styles from './Link.module.scss'

type Props = {
  href: string,
  children: string
}

export default function Link({ href, children }: Props) {
  return (<a href={href} className={styles.link}>{children}</a>)
}