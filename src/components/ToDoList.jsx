 import React from "react";

const ToDoList = (props) => {

    const {toDos}= props

    const handleToggleToDoComplete = (index) => {
        const updatedToDos = props.toDos.map((toDo, i) => {
            if (index === i) {
                toDo.complete = !toDo.complete
                // const updatedToDo = {...ToDo,complete: !ToDo.complete}
                // return updatedToDo;
            }
            return toDo;
        })

        props.updateToDo(updatedToDos);

    }

    const handleToDoDelete = (deleteIndex) => {
        const filteredToDos = props.toDos.filter((_toDo, i) =>{
            return i !== deleteIndex;
        })

        props.updateToDo(filteredToDos);
    }


    return (

        <div style={{textAlign: "center"}}>

            <h3>Create a ToDo List:</h3>

            {toDos.map((toDo, i) => {

                return(

                    <div key={i}>
                        <label style={{textDecoration: toDo.complete? "line-through": undefined}}> {toDo.text} </label>
                        <input onChange={(e) => handleToggleToDoComplete(i)} checked={toDo.complete} type="checkbox" style={{marginLeft: "10px"}}></input>
                        <button style={{marginLeft: "10px"}} onClick={(e) => {handleToDoDelete(i)}}>Delete</button>
                    </div>)

                })

            }

        </div>

    )

} 

export default ToDoList;