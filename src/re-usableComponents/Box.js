import React from 'react'
import Button from './Button'


const Box = (props) => {
    const divStyles = {
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        marginLeftColors: props.marginLeftColors,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,

    }
    return (
        <div>
            <div  style={divStyles} className="box1">
                <p>{props.content}</p>
                <Button btnName="button"/>
            </div>
        </div>
    )
}

export default Box
