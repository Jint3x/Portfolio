import React from "react"
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

export { IconedParagraph, YellowLineHeader }