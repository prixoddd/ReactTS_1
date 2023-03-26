import React, {useState} from "react";
import {stateType} from '../../App';

type RatingPropsType = {
    value: number
    onClick: (s: stateType) => void
}

export function Rating(props: RatingPropsType) {

    // let [value, setValue] = useState(0)
    // debugger
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    );

};

type StarPropsType = {
    selected: boolean
    // setValue: (value: stateType) => void
    value: stateType
    onClick: (s: stateType) => void
}

function Star(props: StarPropsType) {
    console.log("star rendered");

    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}