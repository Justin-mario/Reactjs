import React from 'react'
import Button from './Button'
import { GiChewedHeart } from "react-icons/gi";
import Articles from '../articles/Articles';

const TitleBar = () => {
    // const[page , setPage] = useState()
    
    //  setPage = () =>{
         
    //          return (
    //              setPage(<Articles/>)
    //          )
         

    // }
        const btnProps = {
                btnName: 'Contact',
                width : '5%',
                height : '4vh',
                marginTop : '1.5%',
                borderRadius: '5% 5% 5% 5%',
                color : 'white',
                    }
return ( 
        <div>
            <nav className ="navBar">
                <GiChewedHeart className="iconHeart"/>
                <h5 className="h5">Nwachukwu Chigozie</h5>
                <h5>Articles</h5>
                <h5>Snippets</h5>
                <h5>About</h5>
                <Button {...btnProps} />
           </nav>
           </div>
    );
}

export default TitleBar
