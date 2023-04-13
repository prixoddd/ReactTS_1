import React, {useState} from "react";
import {string} from 'prop-types';
import s from './Select.module.css'
import {Simulate} from "react-dom/test-utils";
import keyUp = Simulate.keyUp;

type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Selectin(props: SelectPropsType) {

    const [value, setValue] = useState<number>(props.value)
    // const [nameTitle, setNameTitle] = useState<string>('nothing')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onTitleClickHandler = () => {
        setIsOpen(!isOpen)
    }
    const onTitleElementClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {

        // setNameTitle(e.currentTarget.title)
        setValue(e.currentTarget.value)
        // console.log(e.currentTarget.value)
        // setIsOpen(!isOpen)
    }

    const [selected, setSelected] = useState(0)
    const onMouseEnterHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setSelected(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "ArrowUp") {
            setSelected(selected - 1)
        } else if(e.key === "ArrowDown") {
            setSelected(selected + 1)
        }
        // console.log(e.key)
    }

    return <div className={s.general}>

        {/*{nameTitle}*/}


        <div className={s.maindiv} onClick={onTitleClickHandler} onKeyDown={onKeyPressHandler} tabIndex={0}>
            {props.items.map(el => el.value === value && el.title)}
            <ul>
                {isOpen && props.items.map((el, index) => el.value !== value &&
                    <li className={el.value === selected ? s.selected : ''}
                        onClick={onTitleElementClickHandler}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={()=>{setSelected(0)}}

                        value={el.value}
                        key={index}
                    >
                        {el.title}</li>)}
            </ul>
        </div>
    </div>
}