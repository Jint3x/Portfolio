import React, { useRef } from "react"
import "../styles/global.scss"
import * as style from "../styles/pages/index.module.scss"

import { IconedParagraph, YellowLineHeader } from "../components/reusable"
import Animate from "react-animate-on-scroll"

function Homepage() {
    return (
        <div id={style.bodyHolder}>
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
        <div id={style.frontView}>
            <Animate
             animateOnce={true}
             animateIn={"fadeInTop"}
            >
            <WebsiteEntry />
            <Navigation />
            </Animate>
        </div>
    )
}


/**
 *  The main introduction which will contain links to my socials.
 */
function WebsiteEntry() {
    return (
        <div id={style.mainWebsiteEntry}>
            <div id={style.websiteEntryFirst}>
                <img src={"/profile_image.png"}  alt={"A portfolio image"}/>
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
    )
}


/**
 * Information for each project I've worked on. Each project can be clicked and 
 * redirected to its website. You can also read more on that project.
 */
interface Project_I {
    description: string,
    readMore: string,
    projectImage: string,
    projectUrl: string

    moveToTheRight: number,
}

function Project(props: Project_I) {
    // Will be used on an anchor element. It will be programatically clicked 
    // when someone clicks on the project image.
    const urlRef: any = useRef(null);

    // Depending on which number is passed, the project will be assigned to a div that will 
    // move it on the webpage.
    let moveableObject = [style.firstDiv, style.secondDiv, style.thirdDiv][props.moveToTheRight];

    return (
        <Animate
         animateIn={"fadeInLeft"}
         offset={150}
         animateOnce={true}
        >
            <div className={`${style.projectContainer} ${moveableObject}`}>
                <div className={style.imageHolder}>
                    {
                    /* This anchor element will be invisible and will be programatically 
                    clicked when someone clicks on the project image below. */
                    }
                    <a 
                    href={props.projectUrl}
                    ref={urlRef}
                    target={"_blank"}
                    />

                    <div 
                    style={{backgroundImage: `url(${props.projectImage})`}} 
                    className={style.projectImage}
                    onClick={() => urlRef.current.click() }
                    />

                    <div className={style.projectView}>
                        <IconedParagraph 
                        href={props.projectUrl}
                        isMain={true}
                        openNewTab={true}
                        alt={"View Icon"}
                        src={"/project_homepage.png"}
                        text={"View"}
                        />
                    </div>
                </div>
                <div className={style.projectDescription}>
                    <div>
                        <p>Read More</p>
                    </div>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </Animate>
    )
}


function Skills() {
    return null
}


function About() {
    return null
}






export { FrontView, Project, Skills, About }
export default Homepage