import React, {useState} from "react";
import {stateType} from '../../App';

type RatingPropsType = {
    value: number
    // onClick: (s: stateType) => void
}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0)
    // debugger
    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );

};

type StarPropsType = {
    selected: boolean
    setValue: (value: stateType) => void
    value: stateType
    // onClick: (s: stateType) => void
}

function Star(props: StarPropsType) {
    console.log("star rendered");

    return <span onClick={() => {
        props.setValue(props.value)
    }}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}