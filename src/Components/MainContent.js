import React from "react"
import TodoItem from "./TodoItem"


function MainContent() {
    const NamaDepan ="Alfhan"
    const NamaBelakang = "Fauzan"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize:"30px"
    }

    if(hours < 12 ){
        timeOfDay = "morning"
        styles.color = "1e7145"
    } else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
        styles.backgroundColor = "1e7145"
    }else {
        timeOfDay = "night"
    }
    return(
        <div>
            {/* ganti warna inline belom bisa */}
           {/* <h1 style={{color:"#1e7145"}}>ini adalah maincontent</h1> */}
           <p>menjadi awal permulaan yang baik</p>
           <input type="checkbox"/>
           <p>Coba ada 1</p>
           <h1 className="h1">panggil nama mungkin bakal bisa panggil data {NamaDepan + " " + NamaBelakang}</h1>
           {/* <h1>{`${NamaDepan}` + `${NamaBelakang}`}</h1>  */}
           <p>{timeOfDay}</p>
        
        <div className="todo-list">
        <TodoItem />
        <TodoItem />
        </div>

        </div>
    )
}

export default MainContent