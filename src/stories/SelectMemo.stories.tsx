import React from 'react';

import {action} from '@storybook/addon-actions';
import {SelectinUpgraded} from '../Components/Select/SelectUpgrated';

export default {
    title: 'React.memo demo2'
}

const onClickEvent = action("some item was clicked")

const Array = [
    {title: 'Tallinn', value: 1, id: 1},
    {title: 'Narva', value:2, id: 1},
    {title: 'Parnu', value:3, id: 1},
    {title: 'Moskow', value:4, id: 2},
    {title: 'Piter', value:5, id: 2},
    {title: 'Burovitsi', value:5, id: 2},
    {title: 'Motril', value:5, id: 3},
    {title: 'Alicante', value:5, id: 3},
    {title: 'Madrid', value:5, id: 3}

]


export const SelectInAction = () => {
    return <div style={{display: 'flex', margin: '20px'}}>
        <SelectinUpgraded value={1} items={Array.filter(u=>u.id === 1)}/>---
        <SelectinUpgraded value={1} items={Array.filter(u=>u.id === 2)}/>---
        <SelectinUpgraded value={1} items={Array.filter(u=>u.id === 3)}/>
    </div>


}
