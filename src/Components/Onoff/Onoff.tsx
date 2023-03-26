import React, {useState} from 'react';
import "./Onoff1.css"

type ElementsPropsType ={
    on: boolean
}

function Elements(props: ElementsPropsType) {

    const [OnOff, setOnOff] = useState<string>("")

    return <div>
        {OnOff === "on" ? <Element setOnOff={setOnOff} color_rOne="green" color_rTwo="" color_s="green" /> : <Element setOnOff={setOnOff} color_rOne="" color_rTwo="red" color_s="red" />}
    </div>
}

type ElementPropsType = {
    color_rOne: string
    color_rTwo: string
    color_s: string
    setOnOff: (s: string) => void


}

function Element(props: ElementPropsType) {


    return <div className="wrapper">
        <div
            onClick={(e) => props.setOnOff(e.currentTarget.id)}
            className={`rectangle ${props.color_rOne}`}
            id="on"><div>On</div></div>
        <div
            onClick={(e) => props.setOnOff(e.currentTarget.id)}
            className={`rectangle ${props.color_rTwo}`}
            id="off"><div>Off</div></div>
        <div className={`square ${props.color_s}`}></div>
    </div>
}

export default Elements;