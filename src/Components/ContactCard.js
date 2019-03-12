import React from "react"
import "../App.css"

function Contact(props){
    console.log(props)
    return(
        <div className="contact">
            <div className="contact-card">
                <img src = {props.contact.imgUrl} alt="gambar kucing kocak"/>
                <h3>Name : {props.contact.name}</h3>
                <p>Phone : {props.contact.phone}</p>
                <p>Email : {props.contact.email}</p>           
            </div>
        </div>
    )

}

export default Contact