import React, {useState} from 'react';
import Onoff from './Onoff';
import Elements from './Onoff';


export default {
    title: 'OnOff stories',
    component: Elements,

};



export const OnMode = () => <Elements on={true}/>
export const OffMode = () => <Elements on={false}/>

