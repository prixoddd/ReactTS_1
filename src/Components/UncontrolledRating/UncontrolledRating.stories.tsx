import React, {useState} from 'react';
import {UncontrolledRating} from './UncontrolledRating';


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,

};



export const EmptyRating = () => <UncontrolledRating defaultValue={5}/>


