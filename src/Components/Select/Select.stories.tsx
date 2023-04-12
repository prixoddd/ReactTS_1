import React, {useState} from 'react';


import {action} from '@storybook/addon-actions';
import {Selectin} from './Select';


export default {
    title: 'Select stories',
    component: Selectin,

};

const onClickEvent = action("some item was clicked")



export const SelectInAction = () => <Selectin value={1} items={[
    {title: 'Nikita', value: 1},
    {title: 'Arsen', value:2},
    {title: 'Sergy', value:3},
    {title: 'Ivan', value:4},
    {title: 'Soroka', value:5}

]} onChange={onClickEvent}/>
