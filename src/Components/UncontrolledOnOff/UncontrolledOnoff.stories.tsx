import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledOnoff from './UncontrolledOnoff';



export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnoff,

};

const callback = action("accordion mode changed")

export const On = () => <UncontrolledOnoff on={true} defaultOn={true}/>
export const Off = () => <UncontrolledOnoff on={true} defaultOn={false}/>