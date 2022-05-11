import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';
import ToDoList from './components/ToDoList';


function App() {
  const [toDos, setToDos] = useState([])

  // functions for the form - adding todo item 
  const  toDoItem=( newToDo ) => {
    setToDos([...toDos, newToDo])
  }

  console.log(toDos)
  
  // function for the display - update list
  const updateToDo = (newList) => {
    setToDos(newList)
  }

  
  return (
    <div>
      <ToDo 
      toDoItem={toDoItem}/>
      <ToDoList 
      toDos = {toDos}
      updateToDo={updateToDo}
      />
    </div>
  );
}

export default App;
