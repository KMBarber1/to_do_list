import React, {useState} from 'react'


const ToDo = (props) => {
    const [newToDo, setNewToDo] = useState("")
    // const [toDos, setToDos] = useState([]);

    const handleNewToDoSubmit = (e) => {
        e.preventDefault();

        if (newToDo.length === 0) {
            return;
        }

        const toDoItem = {
            text: newToDo,
            complete: false
        }

        // setToDos([...toDos, toDoItem]);

        props.toDoItem(toDoItem)
        setNewToDo("");

    }


    return (
        <div style={{textAlign: "center"}}>

            <h3>Enter a Task:</h3>

            <form onSubmit={(e) => {handleNewToDoSubmit(e)}}>
                <input onChange={(e) => {setNewToDo(e.target.value)}} type="text" value={newToDo}/>  
                <div>
                    <br/>
                    <input type="submit" value="Add" className="btn btn-primary"/>
                </div>
            </form>

        </div>

    )

}  

export default ToDo;