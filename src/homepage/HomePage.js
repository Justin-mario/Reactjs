import React from 'react'
import { BsChevronDoubleRight} from "react-icons/bs";
import {IoLogoJavascript} from "react-icons/io"
import { DiJavascript, DiReact } from "react-icons/di";
import { RiChat4Line} from "react-icons/ri";
import TitleBar from '../re-usableComponents/TitleBar'
import FootBar from '../re-usableComponents/FootBar'
import Button from '../re-usableComponents/Button'



const HomePage = () => {

    const btnProps = {
    btnName: 'Button',
    width : '12%',
    height : '5vh',
    marginTop : '5%',
    borderRadius: '5% 5% 5% 5%',
    color : 'white',
    marginLeft: '5%',
    
        }
        
    const btn2Props = {btnName: 'Button',
    width : '25%',
    height : '5vh',
    marginTop : '5%',
    borderRadius: '5% 5% 5% 5%',
    color : 'white',
    marginLeft: '5%',
     }

    const btnChat = {btnName: 'Chat',
    width : '8%',
    height : '5vh',
    marginTop : '2%',
    marginLeft: '45%',
    backgroundColor : '#61DAFB',
    border:'3px solid #61DAFB',
     }
   
    return (

            <div className="homepage">
            <div>
                <TitleBar/>
            </div>
           <div >
               <p className="firstDiv">
                   I'm Chigozie, software Engineer<br/> and Interface Designer.
               </p>
            
           </div>
           <div  className="secondDiv">
               <p>
                   I specialize in rapidly prototyping software companies and web <br/>
                   applications. I talk about my journey on <span className="twitter">
                   <a href="https://www.twitter.com">Twitter</a></span>,
                    commit code to <span className="github"><a href="https://www.github.com">Github</a></span>,<br/>
                   and take shots on <span className="dribble"> <a href="https://www.dribble.com">Dribble</a> </span>.
               </p>
           </div>
           <div className="articleDiv">
                <div className="latestArticles">
                <p >Latest Articles</p>
                </div>
                <div className="innerarticleDiv">
                    <p >All articles</p>
                    <BsChevronDoubleRight className="icon"/>
                </div>
                </div>
                <div className="thirdDiv">
                <div className="withIcon">
                    <p>
                    <IoLogoJavascript className="icon1"/>
                    Reducing cognitive load by theming my tools
                    </p>
                    </div>
                    <p className="withDate">September 08, 2019</p>
                <div>
                    <div className="withIcon">
                    <p>
                    <DiReact className=" icon2"/>
                    Code splitting & lazy loading a server side rendered React app
                    </p>
                    </div>
                    <p className="withDate">September 08, 2019</p>
                </div>
                <div>
                    <div className="withIcon">
                    <p>
                    <DiJavascript className="icon3"/>
                    Easy project switching with Itermocil & command line shortcuts
                    </p>
                    </div>
                    <p className="withDate">September 08, 2019</p>
                </div>
                </div>
                
                <p className="project">Projects</p>
                <div className="box1">
                    <p className="box1Inner1">Yawnch</p>
                    <p className="box1Inner2">An online coworking community for indie hackers, entreprenuers, and founders. Chat 
                        live with app<br/>developers, designers, and mentors. Access video courses and tutorials.</p>
                     <Button style{...btnProps} className="ButtonSty"/>
                </div>
                <div className="boxContainer">
                <div className="box2">
                    <p className="box2Inner1">Stockstream.tv</p>
                    <p className="box1Inner2">On a mission to democratize investing<br/> knowledge. My partner and 
                    I bootstrapped <br/> this company with zero funding.</p>
                     <Button style{...btn2Props} className="ButtonSty"/>
                </div>

                <div className="box3">
                    <p className="box2Inner1">All Turtles</p>
                    <p className="box1Inner2">I lead web development full time at All <br/> Turtles,
                     an AI startup studio.</p>
                     <Button style{...btn2Props}/>
                </div>
                </div>
                <div className="lastDiv">
                    <p className="lastDivInner1">What are you working on?</p>
                    <p className="lastDivInner2">Let’s have a conversation! I’d love to hear about what you’re <br/>working on and find a
                     way to work together.</p>
                     
                     <Button  style{...btnChat}  className="chatButton"  />
                     {/* <div className="chatDiv">
                     <p>
                   <RiChat4Line className="chatSign"/> Chat
                   </p>
                </div> */}
                </div>
               
                <FootBar />
        </div>
    )
}

export default HomePage