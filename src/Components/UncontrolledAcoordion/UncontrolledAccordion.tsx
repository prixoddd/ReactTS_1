import React, {useReducer} from "react";
import {reducer} from './reducer';

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    console.log("Accordion");

    return <div>
        {/*<AcoordionText title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
        <AcoordionText title={props.titleValue} onClick={() => { dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
        {/*<AccordionBody collapsed={props.collapsed} />*/}
        {!state.collapsed && <AccordionBody/>}

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