import React from "react";

function Accordion() {
    console.log("Accordion");

    return <div>
        <AcoordionText />
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

function AcoordionText() {
    console.log("Accordion text rendering");
    return (
        <h3>Menu</h3>
    )
}

export default Accordion;