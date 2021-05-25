import React, { useRef } from "react"
import * as style from "../styles/components/reusable.module.scss"

import Animate from "react-animate-on-scroll"


/**
 * A paragraph with an icon on its left. It can be a 
 * main one (increased sizes) or a normal paragraph
 */
interface IconedParagraph_I {
    src: string,
    alt: string,
    text: string,
    href?: string,
    isMain?: boolean,
    openNewTab?: boolean,
}

 function IconedParagraph(props: IconedParagraph_I) {
    return (
        <p className={style.iconedParagraph}>
            <img 
             src={props.src} 
             alt={props.alt} 
             className={props.isMain ? style.mainIcon : ""} 
            />

            {
                props.isMain ? 
                <a 
                 target={props.openNewTab ? "_blank" : "_self"} 
                 href={props.href}
                >
                    {props.text}
                </a> 
                : 
                <span>
                    {props.text}
                </span>
            }
        </p>
    )
}


/**
 * A header which is used for each section on the homepage.
 */
interface YellowLineHeader_I {
    text: string
}

function YellowLineHeader(props: YellowLineHeader_I) {
    return (
        <div className={style.yellowLineHeader}>
            <Animate
             animateIn={"fadeInLeft"}
             duration={1}
             offset={100}
             animateOnce={true}
            >
                <h1>
                    {props.text}
                </h1>
            </Animate>
            
            <Animate
             animateIn={"fadeInLeft"}
             duration={1.5}
             offset={100}
             animateOnce={true}
            >
                <hr />
            </Animate>
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



interface SkillList_I {
    header: string,
    skills: Skill_I[]
}

interface Skill_I {
    icon_alt: string,
    image: string,
    skill: string,
}

function SkillList(props: SkillList_I) {
    let listOfSkills = props.skills.map(skill => {
        return (
            <IconedParagraph 
            src={skill.image}
            alt={skill.icon_alt}
            text={skill.skill}
            key={skill.skill}
            />
        )
    })

    return (
        <Animate
         animateIn={"fadeInLeft"}
         offset={150}
         animateOnce={true}
        >
        <div className={style.skillSet}>
            <h2>
                {props.header}
            </h2>
            {listOfSkills}
        </div>
        </Animate>
    )
}


export { IconedParagraph, YellowLineHeader, Project, SkillList }