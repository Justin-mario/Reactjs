import React from 'react';
import './HouseStyle.css'
import Roof from './Roof'
import Land from './Land'
import Foundation from './Foundation'
import Room from './Room'
import Wall from './Wall'
import Pillar from './Pillar'
import Door from './Door'
import Window from './Window'
import Decking from './Decking'

const App = () =>{
    return(
        <div className="generalDiv">
            <Roof/>
            <div className="roomDiv">
            <div className="topRoomGeneralDiv">
            <Room >
                <div>
                <Pillar/>
                </div>
                <div className="topRoomDiv">
                <div className="firstDiv">
                    <Window/>
                    <Window/>
                </div>
                <Pillar/>
                <div className="firstDiv">
                <Room>
                    <Window/>
                    <Door/>
                </Room>
                </div>
                </div>
            </Room>
            </div>
            </div>
            
            <div  className="decking">
            <Decking/>
            </div>
            <div className="roomDiv">
            <Room>
            <div className="room">
            <Pillar/>
            <div className="firstroomDiv">
               
                <Wall >
                    <div className="wall">
                    <Door paddingRight="4%"/>
                    <Door paddingLeft="4%"/>
                    </div>
                </Wall>
                </div>
                <Pillar/>
                <Pillar/>
                <div className="secondRoomDiv">
                <Wall>
                    <div>
                        <Window/>
                    </div>
                    <div className="secondRoom">
                        <Door paddingRight="4%"/>
                        <Door paddingLeft="4%"/>
                        <Door paddingLeft="4%"/>
                    </div>
                </Wall>
                </div>
            </div>
            </Room>
            </div>
           
            <Foundation/>
            <Land/>
        </div>
    )
} 

export default App;