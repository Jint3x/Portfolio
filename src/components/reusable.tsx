import React from "react"
import * as style from "../styles/components/reusable.module.scss"


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



export { IconedParagraph }