import React, {useState} from 'react';

import './App.css';
import Accordion from './Components/Accordion';
import {Rating} from './Components/Rating/Rating';
import Elements from "./Components/Onoff/Onoff";
import UncontrolledAccordion from './Components/UncontrolledAccordion';
import {UncontrolledRating} from './Components/Rating/UncontrolledRating';
import UncontrolledElements from './Components/Onoff/UncontrolledOnoff';


export type stateType = 1 | 2 | 3 | 4 | 5

function App() {

    const [ratingvalue, setRatingValue] = useState<stateType>(1)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [OnOff, setOnOff] = useState<boolean>(false)

    // debugger;
    return (
        <div>
            <PageTitle title={"This is APP Component"} />
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<UncontrolledAccordion titleValue={"Uncontrolled"} collapsed={false}/>*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            <UncontrolledRating value={5} />
            <Rating value={ratingvalue} onClick={setRatingValue} />
            <Elements on={false}/>
            <UncontrolledElements on={OnOff} setOnOff={setOnOff} />
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
