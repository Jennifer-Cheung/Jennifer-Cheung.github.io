import Navbar from "@/components/Navbar/Navbar"
import styles from './app.module.scss'
import Button from "@/components/Button/Button"
import Image from "next/image"
import Link from "@/components/Link/Link"

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* About me */}
      <div className={styles['about-me']}>
        <div className={styles.left}>
          <strong>Hi, I am Jennifer Cheung!</strong>
          <p>I am a Computer Engineering student studying at HKUST. Currently a member of USThing, a student-initiated application development team, member of the Web Team and leader of the UI/UX Team.</p>
          <div className={styles.buttons}>
            <Button>Projects</Button>
            <Button isHollow>Contact Me</Button>
          </div>
        </div>

        <Image alt='Avatar' src='/Avatar.png' width='500' height='500' />
      </div>

      {/* Projects */}
      <div className={styles.projects}>
        <h1>Projects</h1>

        {/* Kirby platformer game */}
        <div className={styles['project-block']}>
          <h2>Kirby Platformer Game on STM32</h2>

          <div className={styles['image-wrapper']}>
            <Image alt='Kirby cover image' src='/kirby-cover.jpg' width={0} height={0} sizes="100vw" style={{width: '80%', height: 'auto'}} />
          </div>

          <Link href='https://github.com/Jennifer-Cheung/ELEC3300'>Github Link (partial code)</Link>

          <div>
            <b>Authors:</b>
            <ul className={styles['author-block']}>
              <li><span>Jennifer Cheung: <Link href="https://github.com/Jennifer-Cheung">Github Link</Link></span></li>
              <li><span>Angelina Lee: <Link href="https://github.com/anlhy">Github Link</Link></span></li>
            </ul>
          </div>

          <p>I did this project for a course assignment with a classmate. The project was finished in around 1 week (minus the time I was procrastinating).</p>
        </div>
      </div>
    </div>
  )
}
