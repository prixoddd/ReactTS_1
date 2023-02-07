import React from "react";
type AccordionPropsType = {
    titlevalue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion");

    return <div>
        <AcoordionText title={props.titlevalue} />
        <AccordionBody collapsed={props.collapsed}/>
    </div>
}

type AcoordionBodyPropsType = {
    collapsed: boolean
}

function AccordionBody(props: AcoordionBodyPropsType) {
    console.log("Accordion body rendering");
    if(props.collapsed === true) {
        return <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
    </ul>
    } else {
        return <ul>
        
    </ul>
    }
}

type AcoordionTextPropsType = {
    title: string
}

function AcoordionText(props: AcoordionTextPropsType) {
    console.log("Accordion text rendering");
    return (
        <h3>{props.title}</h3>
    )
}

export default Accordion;