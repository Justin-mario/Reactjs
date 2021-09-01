import Wall from './Wall'


const Room = (props) => {
    return(
            <div>
            {props.children}
            <Wall>
                
            </Wall>
            
            </div>
    )
}

export default Room;