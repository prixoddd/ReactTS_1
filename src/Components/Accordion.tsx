import React from "react";

function Accordion(props: any) {
    console.log("Accordion");

    return <div>
        <AcoordionText title={props.title}/>
        <AccordionBody />
    </div>
}

function AccordionBody() {
    console.log("Accordion body rendering");
    return <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
    </ul>

}

function AcoordionText(props: any) {
    console.log("Accordion text rendering");
    return (
        <h3>{props.title}</h3>
    )
}

export default Accordion;