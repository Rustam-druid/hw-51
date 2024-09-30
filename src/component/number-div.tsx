import React from 'react';

interface NumberDivProps {
    numbers:[]
}

const NumberDiv:React.FC<NumberDivProps> = ({numbers}) => {
    return (
        <>
            <div>{numbers.map(i => {
                return (<div key={i} className="number-ball">
                    {i}
                </div>)
            })}</div>
        </>
    );
};

export default NumberDiv;