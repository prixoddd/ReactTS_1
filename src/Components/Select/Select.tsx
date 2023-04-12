import React, {useState} from "react";
import {string} from 'prop-types';
import s from './Select.module.css'

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

    return <div className={s.general}>
        {/*{nameTitle}*/}


    <div className={s.maindiv} onClick={onTitleClickHandler}>
        {props.items.map(el => el.value === value && el.title)}
        <ul>
            {isOpen && props.items.map((el,index) => el.value !== value && <li onClick={onTitleElementClickHandler} value={el.value} key={index}>{el.title}</li>)}
        </ul>
    </div>
    </div>
}