import React, {useEffect, useState} from "react";

import s from './Select.module.css'


type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: any
    onChange?: (value: any) => void
    items: ItemType[]
}


export function SelectinUpgraded(props: SelectPropsType) {

    const [value, setValue] = useState<number>(props.value)
    // const [nameTitle, setNameTitle] = useState<string>('nothing')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    const onTitleClickHandler = () => {
        setIsOpen(!isOpen)
    }
    const onTitleElementClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {

        // setNameTitle(e.currentTarget.title)
        setValue(e.currentTarget.value)
        // console.log(e.currentTarget.value)
        // setIsOpen(!isOpen)
    }

    const [selected, setSelected] = useState(1)
    const onMouseEnterHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setSelected(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!isOpen) {
            setIsOpen(!isOpen)
        } else {
            if (e.key === "ArrowUp") {
                setSelected(selected > 1 ? selected - 1 : selected)
            } else if (e.key === "ArrowDown") {
                setSelected(selected < props.items.length ? selected + 1 : selected)
            } else if (e.key === "Enter") {
                setValue(selected)
                setIsOpen(!isOpen)
            }
        }

    }

    return <div className={s.general}>

        {/*{nameTitle}*/}


        <div className={s.maindiv} onClick={onTitleClickHandler} onKeyDown={onKeyPressHandler} tabIndex={0}>
            {props.items.map(el => el.value === value && el.title)}
            <ul>
                {isOpen && props.items.map((el, index) =>
                    <li className={el.value === selected ? s.selected : ''}
                        onClick={onTitleElementClickHandler}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={() => {
                            setSelected(0)
                        }}

                        value={el.value}
                        key={index}
                    >
                        {el.title}</li>)}
            </ul>
        </div>
    </div>
}