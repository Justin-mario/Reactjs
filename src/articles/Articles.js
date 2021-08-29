import React from 'react'
import TitleBar from '../re-usableComponents/TitleBar'
import FootBar from '../re-usableComponents/FootBar'

const Articles = () => {
    return (
        <div className="articlepage">
            <div>
            <TitleBar/>
            </div>
            <div >
                <p className="article">Articles</p>

                <p className="pWithDate">September 08, 2019</p>
                <p className="AfirstDiv">Code splitting & lazy loading a server side <br/>rendered React app</p>
                <p className="BsecondDiv">Reasoning, approach, and goals Goals Faster initial load times. Users only 
                <br/>download the code they need for the features they are using. This…</p>
                <p className="readMore">Read more...</p>

                <p className="pWithDate">September 08, 2019</p>
                <p className="AfirstDiv">Easy project switching with Itermocil & command <br/>line shortcuts</p>
                <p className="BsecondDiv">Reasoning, approach, and goals Goals Faster initial load times. Users only 
                <br/>download the code they need for the features they are using. This…</p>
                <p className="readMore">Read more...</p>

                <p className="pWithDate">September 08, 2019</p>
                <p className="AfirstDiv">Code splitting & lazy loading a server side <br/>rendered React app</p>
                <p className="BsecondDiv">Reasoning, approach, and goals Goals Faster initial load times. Users only 
                <br/>download the code they need for the features they are using. This…</p>
                <p className="readMore">Read more...</p>
                
                <p className="pWithDate">September 08, 2019</p>
                <p className="AfirstDiv">Easy project switching with Itermocil & command <br/>line shortcuts</p>
                <p className="BsecondDiv">Reasoning, approach, and goals Goals Faster initial load times. Users only 
                <br/>download the code they need for the features they are using. This…</p>
                <p className="lastReadMore">Read more...</p>
            </div>
            <FootBar/>
        </div>
    )
}


export default Articles;
