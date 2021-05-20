import React from "react"
import "../styles/global.scss"
import * as style from "../styles/pages/index.module.scss"

import { IconedParagraph } from "../components/reusable"

function Homepage() {
    return (
        <div>
            <FrontView />
            <Projects />
            <Skills />
            <About />
        </div>
    )
}


function FrontView() {
    return (
        <div>
            <WebsiteEntry />
            <Navigation />
        </div>
    )
}


/**
 *  The main introduction which will contain links to my socials.
 */
function WebsiteEntry() {
    return (
        <div>
            <div>
                <img  alt={"A portfolio image"}/>
                <h2>Jint3x</h2>
                <p>- Software/Web Developer</p>
            </div>
            <div>
                <h2>Get in touch!</h2>
                <hr />
                
                <IconedParagraph 
                 src={"/github.png"}
                 alt={"Github Icon"}
                 text={"github.com/Jint3x"}
                 href={"https://github.com/Jint3x"}
                 isMain={true}
                 openNewTab={true}
                />

                <IconedParagraph 
                 src={"/twitter.png"}
                 alt={"Twitter Icon"}
                 text={"twitter.com/Jint3x"}
                 href={"https://twitter.com/Jint3x"}
                 isMain={true}
                 openNewTab={true}
                />

                <IconedParagraph 
                 src={"/gmail.png"}
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
        <div>
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
    return null
}


function Skills() {
    return null
}


function About() {
    return null
}






export { FrontView, Projects, Skills, About }
export default Homepage