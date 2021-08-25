import React from 'react'

const OperatorButton = ({ loadEquation, loadResult, clearResult, reduceNumber}) => {
    const operatorArray = ["*", "+", "-", "/", "%", "."]
    const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const equateArray = ["="]

    return (
       
        <div>
            {operatorArray.map((operator, index) => <button className="num-button" key={index}
            onClick={() => loadEquation(numArray, operatorArray, operator)}>{operator}</button>)}
            <button className="clear-button" onClick={clearResult}>C</button>
            <button className="clear-button" onClick={reduceNumber}>X</button>
            <button className="equate-button" onClick={loadResult}>{equateArray[0]}</button>
        </div>
    )
}





export default OperatorButton

