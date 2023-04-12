import React, {useState} from 'react';
import "../Onoff/Onoff1.css"

type ElementsPropsType ={
    on: boolean
    defaultOn?: boolean
}

function UncontrolledElements(props: ElementsPropsType) {
    const [OnOff, setOnOff] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

    const controllOff = (s:string) => {
        s === "on" ? setOnOff(true) : setOnOff(false)
    }


    return <div>
        {OnOff === true ? <Element controllOff={controllOff} color_rOne="green" color_rTwo="" color_s="green" /> : <Element controllOff={controllOff} color_rOne="" color_rTwo="red" color_s="red" />}
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