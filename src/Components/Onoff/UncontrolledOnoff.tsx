import React, {useState} from 'react';
import "./Onoff1.css"

type ElementsPropsType ={
    on: boolean
    setOnOff: (b:boolean) => void
}

function UncontrolledElements(props: ElementsPropsType) {
    const controllOff = (s:string) => {
        s === "on" ? props.setOnOff(true) : props.setOnOff(false)
    }


    return <div>
        {props.on === true ? <Element controllOff={controllOff} color_rOne="green" color_rTwo="" color_s="green" /> : <Element controllOff={controllOff} color_rOne="" color_rTwo="red" color_s="red" />}
    </div>
}

type ElementPropsType = {
    color_rOne: string
    color_rTwo: string
    color_s: string
    // setOnOff: (s: boolean) => void
    controllOff: (s: string) => void


}

function Element(props: ElementPropsType) {


    return <div className="wrapper">
        <div
            onClick={(e) => props.controllOff("on")}
            className={`rectangle ${props.color_rOne}`}><div>On</div></div>
        <div
            onClick={(e) => props.controllOff("off")}
            className={`rectangle ${props.color_rTwo}`}><div>Off</div></div>
        <div className={`square ${props.color_s}`}></div>
    </div>
}

export default UncontrolledElements;