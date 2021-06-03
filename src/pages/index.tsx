import React, { useRef } from "react"
import "../styles/global.scss"
import * as style from "../styles/pages/index.module.scss"

import { IconedParagraph, YellowLineHeader, Project, SkillList, AboutParagraph } from "../components/reusable"
import { Helmet } from "react-helmet"
import Animate from "react-animate-on-scroll"

function Homepage() {
    return (
        <div id={style.bodyHolder}>
            <Helmet
                bodyAttributes={{lang: "en"}}
            >
                <title>Jint3x Portfolio</title>
                <meta charSet={"utf-8"} />
                <meta name={"description"} content={"Jint3x's personal portfolio! Here you can find information about me, the projects I've worked on, the technologies I can use and how to contact me."} />
                <meta name={"keywords"} content={"Developer, Jint3x, Dev Jint3x, Portfolio, Programming"} />
            
                <meta property={"og:title"} content={"Jint3x Portfolio"} />
                <meta property={"og:url"} content={"FILL"} />
                <meta property={"og:sitename"} content={"Jint3x Portfolio"} />
                <meta property={"og:type"} content={"website"} />
                <meta property={"og:description"} content={"Jint3x's personal portfolio! Here you can find information about me, the projects I've worked on, the technologies I can use and how to contact me."} />
            
                <meta property={"twitter:title"} content={"Jint3x Portfolio"} />
                <meta property={"twitter:description"} content={"Jint3x's personal portfolio! Here you can find information about me, the projects I've worked on, the technologies I can use and how to contact me."} />
                <meta property={"twitter:card"} content={"summary"} />
                <meta property={"twitter:creator"} content={"@Jint3x"} />
            </Helmet>
            <FrontView />
            <div id={style.darkBackground}>
                <Projects />
                <Skills />
                <About />
            </div>
        </div>
    )
}


function FrontView() {
    return (
        <section>
        <div id={style.frontView}>
            <Animate
             animateOnce={true}
             animateIn={"fadeInTop"}
            >
                <WebsiteEntry />
                <Navigation />
            </Animate>
        </div>
        </section>
    )
}


/**
 *  The main introduction which will contain links to my socials.
 */
function WebsiteEntry() {
    return (
        <div id={style.mainWebsiteEntry}>
            <div id={style.websiteEntryFirst}>
                <img 
                 src={"/profile_image.png"}  
                 alt={"A portfolio image"}
                />
                <h2>Jint3x</h2>
                <p>- Software/Web Developer</p>
            </div>
            <div id={style.websiteEntrySecond}>
                <h2>Get in touch!</h2>
                
                <IconedParagraph 
                 src={"/icons/github.png"}
                 alt={"Github Icon"}
                 text={"github.com/Jint3x"}
                 href={"https://github.com/Jint3x"}
                 isMain={true}
                 openNewTab={true}
                />

                <IconedParagraph 
                 src={"/icons/twitter.png"}
                 alt={"Twitter Icon"}
                 text={"twitter.com/Jint3x"}
                 href={"https://twitter.com/Jint3x"}
                 isMain={true}
                 openNewTab={true}
                />

                <IconedParagraph 
                 src={"/icons/gmail.png"}
                 alt={"Gmail Icon"}
                 text={"devaccount@gmail.com"}
                 href={""}
                 isMain={true}
                />
            </div>
        </div>
    )
}


/**
 *  Navigate users around the webpage.
 */
function Navigation() {
    return (
        <div id={style.navigation}>
            <nav>
                <a href={"#projects"}>Projects</a>
                <div></div>
                <a href={"#skills"}>Skills</a>
                <div></div>
                <a href={"#about"}>About Me</a>
            </nav>
        </div>
    )
}


function Projects() {
    return (
        <section id={"projects"}>
        <div id={style.projectsHolder}>
            <div className={style.headerPadding}>
                <YellowLineHeader text={"Planned & Finished Projects"} />
            </div>
            <Project 
             description={
                `This is a medium-sized description to apply the styles. Now I need to write even more text.
                I wonder what I can write about, doesn't really matter. I need even more text.... Ok, this is
                too much text.... Let's write a litte bit more.`
             }
             readMore={"Test"}
             projectImage={"/projects/fallen.png"}
             projectUrl={"https://fallensmp.com"}
             moveToTheRight={0}
            />

            <Project 
             description={
                `This is a medium-sized description to apply the styles. Now I need to write even more text.
                I wonder what I can write about, doesn't really matter. I need even more text.... Ok, this is
                too much text.... Let's write a litte bit more.`
             }
             readMore={"Test"}
             projectImage={"/projects/fallen.png"}
             projectUrl={"https://fallensmp.com"}
             moveToTheRight={1}
            />

            <Project 
             description={
                `This is a medium-sized description to apply the styles. Now I need to write even more text.
                I wonder what I can write about, doesn't really matter. I need even more text.... Ok, this is
                too much text.... Let's write a litte bit more.`
             }
             readMore={"Test"}
             projectImage={"/projects/fallen.png"}
             projectUrl={"https://fallensmp.com"}
             moveToTheRight={2}
            />
        </div>
        </section>
    )
}


function Skills() {
    return (
        <section id={"skills"}>
        <div id={style.skillList}>
            <div className={style.headerPadding}>
                <YellowLineHeader text={"Programming Skills"} />
            </div>

            <div id={style.skills}>
                <div id={style.leftSidedSkills}>
                    <SkillList 
                    header={"Languages"}
                    skills={[
                        {image: "/icons/js.png", icon_alt: "Javascript Icon", skill: "Javascript/Typescript (Proefficient)"},
                        {image: "/icons/rust.png", icon_alt: "Rust Icon", skill: "Rust (Beginner)"},
                    ]}
                    />

                    <SkillList 
                    header={"Databases"}
                    skills={[
                        {image: "/icons/mongodb.png", icon_alt: "MongoDB Icon", skill: "MongoDB (Medium)"},
                        {image: "/icons/postgre.png", icon_alt: "PostgreSQL Icon", skill: "PostgreSQL (Beginner)"},
                    ]}
                    />
                </div>

                <div id={style.rightSidedSkills}>
                    <SkillList 
                    header={"Tools, Frameworks, Libraries, Runtimes"}
                    skills={[
                        {image: "/icons/git.png", icon_alt: "Git Icon", skill: "Git/Github (Medium)"},
                        {image: "/icons/react.png", icon_alt: "React Icon", skill: "React (Medium)"},
                        {image: "/icons/nodejs.png", icon_alt: "NodeJS Icon", skill: "NodeJS (Medium)"},
                        {image: "/icons/jest.png", icon_alt: "Jest Icon", skill: "Jest (Medium)"},
                    ]}
                    />
                </div>
            </div>
        </div>
        </section>
    )
}


function About() {
    return (
        <section id={"about"}>
        <div id={style.aboutContainer}>
            <div className={style.headerPadding}>
                <YellowLineHeader text={"About me"} />
            </div>

            <AboutParagraph  
             text={
                 `
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe autem delectus, excepturi tenetur
                 quibusdam necessitatibus deserunt beatae. Ex quasi reiciendis harum voluptatem ducimus asperiores, laudantium ratione perspiciatis ipsa corporis voluptate?
                 `
                }
            />
 
            <AboutParagraph 
             text={
                 `
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe autem delectus, excepturi tenetur
                 quibusdam necessitatibus deserunt beatae. Ex quasi reiciendis harum voluptatem ducimus asperiores, laudantium ratione perspiciatis ipsa corporis voluptate?
                 `
             }
            />
        </div>
        </section>
    )
}








export { FrontView, Projects, Skills, About }
export default Homepage