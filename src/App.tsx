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
            <Accordion titlevalue={"Users"} collapsed={true}/>
            <Accordion titlevalue={"Menu"} collapsed={false}/>
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} /> 
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


//01





export default App;
