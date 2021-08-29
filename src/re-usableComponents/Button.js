import React from 'react';

const Button = (props) =>{
    const btnStyle ={
        padding: props.padding,
        width: props.width,
        height: props.height,
        marginTop: props.marginTop,
        color: props.color,
        borderColor: props.borderColor,
        fontSize: props.fontSize,
        marginLeft: props.marginLeft,
        backgroundColor: props.backgroundColor,
        border: props.border,
    
    }
    return(
        <button className="ButtonSty"style={btnStyle}>{props.btnName}</button>
    )
}

export default Button;