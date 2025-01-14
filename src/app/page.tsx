'use client'

import Navbar from "@/components/Navbar/Navbar"
import styles from './app.module.scss'
import Button from "@/components/Button/Button"
import Image from "next/image"
import Link from "@/components/Link/Link"
import { useCallback, useEffect, useRef, useState } from "react"
import Avatar from "@/img/Avatar.png"
import KirbyCover from "@/img/KirbyCover.jpg"
import TileMap from "@/img/TileMap.png"
import HackathonPhoto from "@/img/HackathonPhoto.jpg"
import CodeToGiveScreenshot from "@/img/CodeToGiveScreenshot.png"
import TeamPhoto from "@/img/TeamPhoto.jpg"
import USThingScreenshot from "@/img/USThingScreenshot.png"
import RobogamesTeamPhoto from "@/img/RobogamesTeamPhoto.jpg"
import Magellan from "@/img/Magellan.jpg"
import TestingMagellan from "@/img/TestingMagellan.jpg"
import HKFlagPhoto from "@/img/HKFlagPhoto.jpg"

export type Section = 'about-me' | 'projects' | 'contact-me'

export default function Home() {
  /* Intersection observer */
  const aboutMeRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactMeRef = useRef<HTMLDivElement>(null)

  const [aboutMeVisible, setAboutMeVisible] = useState<boolean>(true)
  const [projectsVisible, setProjectsVisible] = useState<boolean>(false)
  const [contactMeVisible, setContactMeVisible] = useState<boolean>(false)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-99px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]
      if (entry.target === aboutMeRef.current) {
        setAboutMeVisible(entry.isIntersecting)
      } else if (entry.target === projectsRef.current) {
        setProjectsVisible(entry.isIntersecting)
      } else if (entry.target === contactMeRef.current) {
        setContactMeVisible(entry.isIntersecting)
      }
    }, options)
    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current)
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }
    if (contactMeRef.current) {
      observer.observe(contactMeRef.current)
    }
  }, [])

  /* Section change */
  const [section, setSection] = useState<Section>('about-me')

  useEffect(() => {
    if (aboutMeVisible) {
      setSection('about-me')
    } else if (projectsVisible) {
      setSection('projects')
    } else {
      setSection('contact-me')
    }
  }, [aboutMeVisible, projectsVisible, contactMeVisible])

  /* Scroll functions */
  const scrollToAboutMe = useCallback(() => {
    aboutMeRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  const scrollToProjects = useCallback(() => {
    projectsRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  const scrollToContactMe = useCallback(() => {
    contactMeRef.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  return (
    <div>
      <Navbar section={section} aboutMeOnClick={scrollToAboutMe} projectsOnClick={scrollToProjects} contactMeOnClick={scrollToContactMe} />

      {/* About me */}
      <div className={styles['about-me']} ref={aboutMeRef}>
        <div className={styles.top}>
          <div className={styles.left}>
            <strong className={styles.display}>Hi, I am Jennifer Cheung!</strong>
            <p className={styles.paragraph}>I am a Computer Engineering student studying at HKUST. Currently a member of USThing, a student-initiated application development team, member of the Web Team and leader of the UI/UX Team.</p>
            <div className={styles['buttons-wide']}>
              <Button onClick={scrollToProjects}>Projects</Button>
              <Button isHollow onClick={scrollToContactMe}>Contact Me</Button>
            </div>
          </div>

          <Image alt='Avatar' src={Avatar} width='500' height='500' className={styles.avatar} />
        </div>

        <div className={styles['buttons-narrow']}>
          <Button onClick={scrollToProjects}>Projects</Button>
          <Button isHollow onClick={scrollToContactMe}>Contact Me</Button>
        </div>
      </div>

      {/* Projects */}
      <div className={styles.projects} ref={projectsRef}>
        <h1>Projects</h1>

        {/* Kirby platformer game */}
        <div className={styles['project-block']}>
          <h2>Kirby Platformer Game on STM32</h2>

          <div className={styles['image-wrapper']}>
            <Image alt='Kirby cover image' src={KirbyCover} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <Link href='https://github.com/Jennifer-Cheung/ELEC3300' section={'projects'}>Github Link (partial code)</Link>

          <p>
          This made this game for a school project. The total time taken for me to build this project was about 1 week excluding the time I had to work on other course work.
          </p>

          <p>
          Here is a demo video of the final product:
          </p>

          <div className={styles['video-wrapper']}>
            {/* <video width="100%" height="auto" controls src={KirbyDemoFinal} /> */}
            <iframe width="420" height="315"
              src="https://youtu.be/p0ov-WHk-_M">
            </iframe> 
          </div>
          
          <p>
          The game is built on an STM32, with an LCD monitor (with ILI9341 driver) and Bluetooth connection to the controller. The hardware is rather simple, and the focus is on the software part, which was coded in C.
          </p>

          <h3>Map scrolling</h3>

          <p>
          The first thing I did was figuring out how to scroll the map when Kirby moves around. After scrolling through the datasheet, I found a useful built-in hardware feature of the chip – vertical scrolling. Whenever I want to scroll the scene, I can just move the render start pointer to the next line in the LCD memory without having to render the whole map again on the software side. This saved me a lot of rendering time and made the scrolling smoother.
          </p>

          <h3>Walking animation</h3>

          <p>
          My next step was to get Kirby moving. I found a <Link href="https://www.spriters-resource.com/ds_dsi/kssu/sheet/14758/" section='projects'>sprite sheet</Link> online and cropped out the key frames. To animate Kirby, I looped through the key frames. And to make Kirby move left and right, I redrew one column of background pixels and drew Kirby at the new position.
          </p>

          <h3>State changes</h3>

          <p>
          This was the most time-consuming and the hardest part of the project. It surprised me that there were so many states in the game but I had never noticed. In total, there were more than 12 states, but to keep things simple, I only kept the main states.
          </p>

          <p>
          To keep track of the different variables and states, I made a Kirby struct to pass to functions. The entire game was wrapped in a big game loop, which consisted of updating the state and variables from the controller inputs, moving Kirby to the correct X and Y positions, rendering the sprite, and checking the winning and losing conditions.
          </p>

          <h3>Tile system</h3>

          <p>
          This was my favourite part of this project because tiles work magically together. From the sprite sheet site I found that the original game used a 24px tile system, and I laid out the tiles on the game map like this:
          </p>

          <div className={styles['image-wrapper']}>
            <Image alt="Tile map image" src={TileMap} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <p>
          There are some hills and valleys, but as they are rectangular, it was not too difficult to build the collision detection algorithm for them. The slope, however, was a tricky part. I calculated the gradient of the slope section and made the entire slope a ground, not an obstacle, unlike the rectangular hills.
          </p>

          <p>
          The tile system also enabled the game to check for wins or losses. When Kirby approaches the goal on the right of the map, it counts as a win; when he falls below the screen, it counts as a lose.
          </p>

          <h3>Sir Kibble</h3>

          <p>
          I had some time left so I made Sir Kibble as an enemy. I rendered him and his boomerang like how I rendered Kirby. And we can see him swinging his weapon as Kirby approaches him.
          </p>

          <p>
          Kirby can swallow him when they are close enough. However, due to the time limit, we could not finish the ability change, which was a shame since that would require us finish setting up an SD card as an external memory because the sprites were too large for the on-board memory to store.
          </p>

          <p>
          One other note was the drop in frame rate once Kirby and Sir Kibble were in the same frame, as the MCU had to render both simultaneously. I had not figured out the way to optimise the frame rate, but it showed how complicated game design truly is.
          </p>

          <p>
          Overall, this was a fun project and I have learned a lot about embedded systems and game design from this project.
          </p>
        </div>

        {/* Code to Give Hackathon */}
        <div className={styles['project-block']}>
          <h2>Morgan Stanley Code to Give Hackathon second place</h2>

          <div className={styles['image-wrapper']}>
            <Image alt="Hackathon team photo" src={HackathonPhoto} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <Link href="https://github.com/Nidhi153/ZubinHackathon" section={'projects'}>Github link (click to see our full project description!)</Link>

          <p>
          I joined the Code to Give Hackathon in Summer 2024 with a friend and our team got second place in the competition. We built a content management application for a charity organisation called Zubin Foundation, who supports ethical minorities in Hong Kong. The application included 3 user roles, member, volunteer, and admin. Members and volunteers can sign up for events through the platform, and admins can monitor the states of the events and send messages to members in real time through WhatsApp.
          </p>

          <div className={styles['image-wrapper']}>
            <Image alt="Hackathon application screenshot" src={CodeToGiveScreenshot} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <span>Here&apos;s our Canva presentation deck:</span>
          {/* Canva deck block */}
          <div
    style={{
      width: "100%",
      height: 0,
      paddingTop: "56.2500%",
      paddingBottom: 0,
      boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
      marginTop: "1.6em",
      marginBottom: "0.9em",
      overflow: "hidden",
      borderRadius: 8,
      willChange: "transform"
    }}
  >
    <iframe
      loading="lazy"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        border: "none",
        padding: 0,
        margin: 0
      }}
      src="https://www.canva.com/design/DAGOq3rqynw/IZtn9negq9Mj60u0kLfMCw/view?embed"
      allowFullScreen
      allow="fullscreen"
    ></iframe>
          </div>

          <p>
          I designed the entire UI interface on Figma and contributed most of the work on frontend styling. The time was quite tight because we were only given 3 and a half days to develop the whole app, and I only finished designing all the pages 6 hours from the start and ended at 3am in the morning! But it was worth it as it turned out great and we could get to work in the morning as soon as possible. For the frontend, we used NextJS as the primary framework and Sass to do the styling.
          </p>

          <p>
          Overall, it was quite a stressed period, but it was rewarding and fun to work with such an amazing group of teammates, and we were very happy to get a prize in the end.
          </p>
        </div>

        {/* USThing member */}
        <div className={styles['project-block']}>
          <h2>HKUST USThing member</h2>

          <div className={styles['image-wrapper']}>
            <Image alt="Team photo" src={TeamPhoto} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <p>
          I joined USThing, a student-led application development team in Spring 2024, and currently a member of the Web Team and the leader of the UI/UX Team. Check out <Link href="https://usthing.xyz/" section={'projects'}>our official site here</Link>!
          </p>

          <div className={styles['image-wrapper']}>
            <Image alt="USThing screenshot" src={USThingScreenshot} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <p>
          On the web team&apos;s side, we are using NextJS as our primary framework, alongside with Tailwind, Drizzle, and other libraries to build our web applications. On the UI/UX team&apos;s side, I do project management and task coordination so our members can work comfortably together. Currently, we are building a web application, which will be released by February. Stay tuned for our updates! ;)
          </p>
        </div>

        {/* Robotics team member */}
        <div className={styles['project-block']}>
          <h2>Robotics team member <br></br> RoboGames 2023: RoboMagellan second place</h2>

          <div className={styles['image-wrapper']}>
            <Image alt="Robotics Team photo" src={RobogamesTeamPhoto} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <p>
          I joined the Robotics Team in Jan 2023, and it took us 3 months to build a GPS-controlled rover to join RoboGames 2023 in Pleasanton, California, USA. We used the ArduPilot system to control the car, letting it move according to the GPS markers on the map.
          </p>

          <div className={styles['image-wrapper']}>
            <Image alt="Megellan car photo" src={Magellan} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <p>
          The vehicle consisted of a Pixhawk controller with an embedded compass, a GPS sensor, and other mechanical parts. It was our first time working with GPS, so there were many things that we did not know and had to do a lot of research to learn the basics of a self-controlled car with a GPS and compass system.
          </p>

          <div className={styles['image-wrapper']}>
            <Image alt="Testing the car" src={TestingMagellan} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>

          <p>
          Since the senior members in my group were also busy with other events in the competition, I had to do most of the research and testing work. There were many failed attempts on adding extra sensors and algorithms, such as a lidar, angle detection, and path-finding algorithms, and finally we could only bring a simple version of the car to the competition. Luckily, the weather was nice and there was not much error in the GPS positioning, so we actually made it to the goal and got second place.
          </p>

          <div className={styles['image-wrapper']}>
            <Image alt="Photo with HK flag" src={HKFlagPhoto} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} />
          </div>
        </div>
      </div>

      {/* Contact me */}
      <div className={styles['contact-me']} ref={contactMeRef}>
        <h1>Contact Me</h1>
        <span>Email: <Link href="mailto:csjcheung@connect.ust.hk" section={'contact-me'}>csjcheung@connect.ust.hk</Link></span>
        <span>Github: <Link href="https://github.com/Jennifer-Cheung" section={'contact-me'}>Jennifer-Cheung</Link></span>
        <Link href='https://jennifer-cheung.github.io/Portfolio/jennifer-cheung-cv.pdf' download section={'contact-me'}>Download my resume</Link>
        <embed
          src='https://jennifer-cheung.github.io/Portfolio/jennifer-cheung-cv.pdf'
          type="application/pdf"
          width="1200px"
          height="1500px"
          title="Embedded PDF Viewer"
          className={styles['pdf-viewer']}
        />
      </div>
    </div>
  )
}
