import styles from './Navbar.module.scss'
import Tab from './Tab/Tab'
import { Section } from '../../app/page'

type Props = {
  section: Section,
  aboutMeOnClick: React.MouseEventHandler<HTMLElement>,
  projectsOnClick: React.MouseEventHandler<HTMLElement>,
  contactMeOnClick: React.MouseEventHandler<HTMLElement>,
}

export default function Navbar({ section, aboutMeOnClick, projectsOnClick, contactMeOnClick }: Props) {
  const color = section === 'about-me' ? 'red' : (section === 'projects' ? 'green' : 'brown')

  return (
    <div className={[styles.navbar, styles[color]].join(' ')}>
      <Tab isActive={section === 'about-me'} color={color} onClick={aboutMeOnClick}>about me</Tab>
      <Tab isActive={section === 'projects'} color={color} onClick={projectsOnClick}>projects</Tab>
      <Tab isActive={section === 'contact-me'} color={color} onClick={contactMeOnClick}>contact me</Tab>
    </div>
  )
}
