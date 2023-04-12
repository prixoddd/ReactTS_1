import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setAccordionCollapsed: (s:boolean) => void
    items: Array<ItemType>
    onClick: (value: any) => void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion");

    const controlAccordionValue = () => {
        props.setAccordionCollapsed(!props.collapsed)
    }

    return <div>
        <AcoordionText title={props.titleValue} controlAccordionValue={controlAccordionValue}/>
        {/*<AccordionBody collapsed={props.collapsed} />*/}
        { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}

    </div>
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("Accordion body rendering");
    return <ul>
        {props.items.map((el, index) => <li onClick={() => {props.onClick(el.value)}} key={index}>{el.title}</li>)}
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