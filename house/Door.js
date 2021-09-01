

const Door = (props) => {
    const doorStyle ={
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
    }
    return(
        <h1 style={doorStyle}>D</h1>
    )
};

export default Door;