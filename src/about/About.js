import React from 'react'
import TitleBar from '../re-usableComponents/TitleBar'
import FootBar from '../re-usableComponents/FootBar'


const About = () => {
    return (
        <div className="aboutpage">
                <div>
                <TitleBar/>
            
            
                <p className="about">About</p>
                <div className="AboutfirstDiv">
                <p >
                    I specialize in rapidly building software companies and web applications. I use an entrepreneurial<br/>
                    mindset to inform my design and engineering output. 
                </p>
                <p>
                    I prioritize communication while building. 
                    I am an excellent communicator, both written and verbal. I <br/>use screen casts, video calls, and
                    written words to lead teams built on trust and transparency.  
                </p>
                <p>
                    I am an expert in JavaScript, working primarily in <a href="https://react.com/">React</a> and Firebase, but I have experience
                     working<br/> in a wide range oftechnologies including Node & Express, MongoDB, PostgreSQL, 
                     React Native,<br/> Gatsby, 
                    REST API design, CircleCI, 3rd party APIs (Stripe, Discord, Slack, Amplitude, Google Auth,<br/> etc.),
                    AWS (S3, CloudFront, Cognito, Build Pipeline, Route53, ACM), and many more.<br/>
                </p>
                <p>
                    Additionally, I am an experienced interface and user experience designer. I use Figma to<br/> communicate ideas through 
                    low and high fidelity mockups, design systems, and clickable<br/> prototypes.
                </p>
                </div>
                <p className="personal">Personal</p>
                <div className="AboutLastDiv">
                <p >I’ve been a gamer my entire life. I play StarCraft, Fortnite, and Nintendo 64.</p>
                <p> I ran Division 3 track (400m) at Rochester Institute of Technology, 
                and still hold school records to this day.</p>
                <p> I play guitar and bass, and I’m learning to record my own songs. </p>
                <p>I collect video games and action figures, and love Scifi</p>
            </div>
        </div>
        <FootBar/>
        </div>
    )
}



export default About
