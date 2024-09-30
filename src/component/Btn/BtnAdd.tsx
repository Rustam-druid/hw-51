import React from 'react';
interface Props {
    setNumbers:React.SetStateAction<[]>
}

const BtnAdd:React.FC<Props>  = ({setNumbers}) => {

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
        <>
            <button className='btn' onClick={BtnAdd}> New numbers</button>
        </>
    );
};

export default BtnAdd;