import React, {useState} from 'react';
import './App.css'
import NumberDiv from "./component/number-div.tsx";
const App = () => {


    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const BtnAdd = () => {
        const newNumbers = [];

        while (newNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            if (!newNumbers.includes(randomNumber)) {
                newNumbers.push(randomNumber);
            }
        }

        setNumbers(newNumbers);
        console.log(newNumbers);
    };


    return (
        <div className="App">
            <div className='header'></div>
            <div className='main'>
                <button className='btn' onClick={BtnAdd}> New numbers</button>
                <NumberDiv numbers={numbers} />

            </div>
            <div className='footer'></div>
        </div>
    );
};

export default App;