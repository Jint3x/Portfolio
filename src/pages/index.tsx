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
            
                <meta property={"og:title"} content={"Jint3x's Portfolio"} />
                <meta property={"og:url"} content={"https://jint3x.dev"} />
                <meta property={"og:image"} content={"https://jint3x.dev/og_image.jpg"} />
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
                <p>- A Software/Web Developer</p>
            </div>
            <div id={style.websiteEntrySecond}>
                <h2>Get in touch!</h2>

                <IconedParagraph 
                 src={"/icons/linkedin.png"}
                 alt={"Linkedin Icon"}
                 text={"linkedin.com/in/jint3x"}
                 href={"https://www.linkedin.com/in/jint3x/"}
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
                 src={"/icons/github.png"}
                 alt={"Github Icon"}
                 text={"github.com/Jint3x"}
                 href={"https://github.com/Jint3x"}
                 isMain={true}
                 openNewTab={true}
                />

                <IconedParagraph 
                 src={"/icons/gmail.png"}
                 alt={"Gmail Icon"}
                 text={"devjint3x@gmail.com"}
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
             title={"Portfolio"}
             description={
                `This is the project you are currently on! It was a small one, but interesting. I really wondered if I should use 
                light or dark mode, but I decided to go with dark one. The website is built with React (Gatsby). Most of the webpage 
                has also been tested with Jest and testing-library. For styling, SCSS was used as a preprocessor. More about this website 
                can be found on my github profile, which contains all the website codes.`
             }
             projectImage={"/projects/portfolio.png"}
             projectUrl={"https://jint3x.dev"}
             moveToTheRight={0}
            />

            <Project 
             title={"Fallen SMP"}
             description={
                `This was my first project which launched into production. In fact, I'm still managing that website and publish updates 
                sometimes. There was actually a new update just a while ago! On the surface, it might look quite simple with few pages, 
                however, that website has an application system for its community integrated into it! Unfortunately I can't really go in
                details as to what is used in the project, since its source code is not publicly available (and won't be). However, I've 
                gained a lot of experience from it.`
             }
             projectImage={"/projects/fallen.png"}
             projectUrl={"https://fallensmp.com"}
             moveToTheRight={1}
            />

            <Project 
             title={"Jint3x's Blogs"}
             description={
                `This is an upcoming project, it will be my own blog website! I plan on posting different topics about programming and computers 
                in general. I can't say when it will be released, but the progress is publicly availabe on my github profile. I've already began 
                researching different things that I will talk about in it. The technologies which will be used are Typescript for a language, Tailwindcss
                and SCSS for styling, Cypress and Jest + testing-library/react for testing, React (Nextjs) as frontend. `
             }
             projectImage={"/projects/blog.png"}
             projectUrl={"https://blog.jint3x.dev"}
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
                 I'm a self taught software/web developer located in Bulgaria, Varna. I've been coding for over a year and a half now. I've had experience with quite 
                 a lot of technologies, such as: HTML, CSS, Javascript, Typescript, React, Rust, Python (a very little bit), Git. I've also worked
                 with databases such as MongoDB and PostgreSQL.
                 `
                }
            />
 
            <AboutParagraph 
             text={
                `
                 I have quite a lot of passion for working with computers and technology over all. It is amazing! I spend most of my free time coding 
                 or researching different topics about computers (in fact, my blog website will have some of these topics once it is published!). I do 
                 plan on enrolling in a university for a CS degree and learning CE and SE on my own. 
                `
             }
            />

            <AboutParagraph 
             text={
                `
                 I hope that sometime in the future, I can gather enough experience and knowledge to be able to build my own programming community/academy 
                 which will be focus on teaching the fundamentals of the digital world instead of simply showing how the newest shiny library works. It's a 
                 long road ahead, but I'm fully willing to walk it. I always enjoy learning new things about computers, regardless of what they are about. All 
                 technologies have their uniqueness and uses. Just like a tool in a tool-shed, use what is most appropriate.
                `
             }
            />
        </div>
        </section>
    )
}








export { FrontView, Projects, Skills, About }
export default Homepage