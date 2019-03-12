import React from "react"
// import TodoItem from "./Asset/TodoItem"
// import ContactCard from "./ContactCard"
import Joke from "./Joke"
import JokesData from "./JokesData"


function MainContent() {
    console.log(JokesData)
    return (
        <div>
            <Joke question="What's the best thing about Switzerland?"
                punchLine="I don't know, but the flag is a big plus!" />
            <Joke question="Did you hear about the mathematician who's afraid of negative numbers?"
                punchLine="He'll stop at nothing to avoid them!" />
            <Joke question="Hear about the new restaurant called Karma?"
                punchLine="There’s no menu: You get what you deserve." />
            <Joke question="Did you hear about the actor who fell through the floorboards?"
                punchLine="He was just going through a stage." />
            <Joke question="Did you hear about the claustrophobic astronaut?"
                punchLine="He just needed a little space." />
        </div>
    )
}

export default MainContent

 // const NamaDepan ="Alfhan"
    // const NamaBelakang = "Fauzan"
    // const date = new Date()
    // const hours = date.getHours()
    // let timeOfDay
    // const styles = {
    //     fontSize:"30px"
    // }

    // if(hours < 12 ){
    //     timeOfDay = "morning"
    //     styles.color = "1e7145"
    // } else if(hours >= 12 && hours < 17){
    //     timeOfDay = "afternoon"
    //     styles.backgroundColor = "1e7145"
    // }else {
    //     timeOfDay = "night"
    // }
    // return(
    //     <div>
    //         {/* ganti warna inline belom bisa */}
    //        {/* <h1 style={{color:"#1e7145"}}>ini adalah maincontent</h1> */}
    //        <p>menjadi awal permulaan yang baik</p>
    //        <input type="checkbox"/>
    //        <p>Coba ada 1</p>
    //        <h1 className="h1">panggil nama mungkin bakal bisa panggil data {NamaDepan + " " + NamaBelakang}</h1>
    //        {/* <h1>{`${NamaDepan}` + `${NamaBelakang}`}</h1>  */}
    //        <p>{timeOfDay}</p>

    //     <div className="todo-list">
    //     <TodoItem />
    //     <TodoItem />
    //     </div>

//     <ContactCard
//     contact={{
//     name:"Kocak1",
//     imgUrl:"http://placekitten.com/300/200",
//     phone:"081211509376",
//     email:"alfhanrf@gmail.com"
//     }} 
// />
// <ContactCard 
//     contact={{
//         name:"Kocak2",
//         imgUrl:"http://placekitten.com/300/200",
//         phone:"081211509376",
//         email:"alfhanrf@gmail.com"
//         }} 
// />
// <ContactCard 
//     contact={{
//         name:"Kocak3",
//         imgUrl:"http://placekitten.com/300/200",
//         phone:"081211509376",
//         email:"alfhanrf@gmail.com"
//         }} 
//  />