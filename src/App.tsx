import React, {useState} from 'react';
import './App.css'
import NumberDiv from "./component/number-div.tsx";
import BtnAdd from "./component/Btn/BtnAdd.tsx";
const App = () => {


    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);




    return (
        <div className="App">
            <div className='header'></div>
            <div className='main'>
<BtnAdd setNumbers={setNumbers}></BtnAdd>
                <NumberDiv numbers={numbers} />

            </div>
            <div className='footer'></div>
        </div>
    );
};

export default App;