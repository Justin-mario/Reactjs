import Door from './Door'


const Wall =(props)=>{
    return(
        <div>{props.children}
            {/* <Door paddingRight="4%"/>
            <Door paddingLeft="4%"/> */}
        </div>
    )
}

export default Wall;