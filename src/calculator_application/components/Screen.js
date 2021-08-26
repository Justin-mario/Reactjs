import React, {useEffect, useState} from 'react';

const Screen = ({equation, result}) =>{
    const [prev, setPrev] = useState(result);
    useEffect(() => {
    alert(`New Result ${result}`) //componentDisMount
        return () => {              //componentWillUnmount
            setPrev(result);
        }
    }, [result]);               // componentDidUpdate

    
    return(
        <div className="screen"> 
            <h1 style={{fontSize: "40px", marginBottom: "3px", marginRight: "2rem"}}>{result}</h1>
            <p style={{fontWeight: 'bold', marginRight: "2rem", marginBottom: "unset", marginTop: "unset"}}>{equation}</p>
            <div style={{marginleft: '1rem'}} className="bottom-container">
                <h5 style={{textAlign: 'left', marginBottom: "unset", marginTop:"unset", fontSize: "16px"}}>Prev Calculation {prev}</h5>
            </div>
        </div>
    );
}

export default Screen;