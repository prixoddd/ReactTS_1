import React, {useState} from 'react';
import {Rating} from '../Rating/Rating';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion stories',
    component: Accordion,

};

const callback = action("accordion mode changed")
const onClickEvent = action("some item was clicked")

export const CollapsedMode = () => <Accordion titleValue={"Users"} collapsed={true} setAccordionCollapsed={callback} items={[]} onClick={onClickEvent}/>
export const UnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} setAccordionCollapsed={callback} items={[{title: 'Nikita', value: 1}, {title: 'Arsen', value:2}]} onClick={onClickEvent}/>
// export const UserControlMode = () => <Accordion titleValue={"Users"} collapsed={false} setAccordionCollapsed={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} setAccordionCollapsed={() => setValue(!value)} items={[{title: 'Nikita', value: 1}, {title: 'Arsen', value:2}]} onClick={(value) => {alert(`user with id ${value} should be happy`)}}/>
}