import React from "react";
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setAccordionCollapsed: (s:boolean) => void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion");

    const controlAccordionValue = () => {
        props.setAccordionCollapsed(!props.collapsed)
    }

    return <div>
        <AcoordionText title={props.titleValue} controlAccordionValue={controlAccordionValue}/>
        {/*<AccordionBody collapsed={props.collapsed} />*/}
        { !props.collapsed && <AccordionBody />}

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

type AccordionTextPropsType = {
    title: string
    controlAccordionValue: () => void
}

function AcoordionText(props: AccordionTextPropsType) {
    console.log("Accordion text rendering");
    return (
        <h3 onClick={props.controlAccordionValue}>{props.title}</h3>
    )
}

export default Accordion;