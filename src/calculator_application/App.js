import React, {useState} from 'react';
import Screen from './components/Screen'
import NumberButton from './components/NumberButton'
import './calculator.css';
import OperatorButton from './components/OperatorButton'

const App = () =>{
    const [result, setResult] = useState(0);
    const [equation, setEquation] = useState("")
    
    const loadEquation = (numArray, operatorArray, item) =>{
            if(numArray.includes(item)){
                let data = equation + item
                setEquation(data)
                // console.log(data)
            }else if(operatorArray.includes(item)){
                let data = equation + " " + item + " "
                setEquation(data)
                // console.log(data)

            }
    }

    const loadResult = () => {
        if(equation !== ""){
            let result = eval(equation)
            setResult(result)
            setEquation("")
        }else {
            setResult(0)
            setEquation("")
        }
    }

    const clearResult = () =>{
        setEquation("")
        setResult(0)

    }

    const reduceNumber = () =>{
        let str = equation;
        str = str.substr(0,str.length-1);
        setEquation(str)
        setResult(0)
        
       
    }
    return(
        <div className="calculator-container">
           <Screen equation={equation} result={result}/> 
           <div className="button-container">
             <NumberButton loadEquation={loadEquation}/>
             <OperatorButton loadEquation={loadEquation} loadResult={loadResult} clearResult={clearResult} reduceNumber={reduceNumber}/>
           </div>
          
        </div>
    )
}

export default App;