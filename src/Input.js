import React from 'react';

const Input = (props) =>{
    const labelStyle = {
        padding: props.padding,
        backgroundColor: props.backgroundcolor,
        width: props.width,
        marginTop: props.marginTop,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        height: props.height,
    };

    return(
        <div>
            <input style = {labelStyle} type="text"></input>
            
        </div>
    );
}

export default Input;