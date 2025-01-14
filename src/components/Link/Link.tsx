import styles from './Link.module.scss'
import { Section } from '@/app/page'

type Props = {
  href: string,
  children: string,
  download?: boolean,
  section: Section,
}

export default function Link({ href, children, download=false, section }: Props) {
  return (<a href={href} className={[
    styles.link,
    section === 'about-me' ? styles.red : (section === 'projects' ? styles.green : styles.brown)
  ].join(' ')} download={download}>{children}</a>)
}