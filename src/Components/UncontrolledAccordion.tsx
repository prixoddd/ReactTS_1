import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}


function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

    console.log("Accordion");

    return <div>
        <AcoordionText title={props.titleValue} onClick={() => {
            setCollapsed(!collapsed)
        }}/>
        {/*<AccordionBody collapsed={props.collapsed} />*/}
        {!collapsed && <AccordionBody/>}

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
    onClick: () => void
}

function AcoordionText(props: AccordionTextPropsType) {
    console.log("Accordion text rendering");
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

export default UncontrolledAccordion;