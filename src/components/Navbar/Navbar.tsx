import styles from './Navbar.module.scss'
import Tab from './Tab/Tab'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Tab isActive>about me</Tab>
      <Tab>projects</Tab>
      <Tab>contact me</Tab>
    </div>
  )
}
