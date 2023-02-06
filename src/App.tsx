import React from 'react';

import './App.css';
import Accordion from './Components/Accordion';



function App() {
    // debugger;
    return (
        <div>
            <AppTitle />
            <Rating />
            <Accordion />
        </div>
    );
}

function AppTitle() {
    return <> This is APP Component</>
}

function Rating() {
    // debugger;
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
};

function Star() {
    console.log("star rendered");
    return (
        <div>star</div>

    );
}






export default App;
