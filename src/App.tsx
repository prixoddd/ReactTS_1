import React from 'react';

import './App.css';
import Accordion from './Components/Accordion';
import Rating from './Components/Rating/Rating';



function App() {
    // debugger;
    return (
        <div>
            <PageTitle title={"This is APP Component"} />
            <Rating value={1} />
            <Accordion title={"Hasan"}/>
            <Accordion title={"Menu"}/>
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}








export default App;
