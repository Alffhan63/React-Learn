import React from "react"
// import "../App.css"

function Joke(props) {
    console.log(props)
    return (
        <div className="contact">
            <div>
                <p style={{ display: !props.question && "none" }}>Question: {props.question}</p>
                <p style={{ color: !props.question && "#888888" }}>Answer: {props.punchLine}</p>
                <hr />
            </div>
        </div>
    )
}

export default Joke