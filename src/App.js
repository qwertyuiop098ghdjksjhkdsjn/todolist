import './App.css';
import { useState } from "react";
import Item from "./component/Item";

function App() {
  const [todos, setTodos] = useState([]); //массив с объектами, где хранится вся инфа про задачи (id, true/false (complited), сама задача(title)) 
  const [todo, setTodo] = useState("");  //значения в инпуте 

  function addTodo (){  //функция, которая создает задачи
    if (todo !== "") {  //если в инпут что-то написали 
      setTodos([...todos, {id: Date.now(), title: todo, complited: false}]);
      setTodo(""); //делаем пустую строку, после создания задачи в инпуте
    }
  };
  
  function removeToDo(id) {
   setTodos( todos.filter (todo => {
      return todo.id != id
    }) 
 ) }

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <div className='input-wrapper'>
        <input 
        type="text" 
        name='todo' 
        value={todo}
        placeholder='Create a new todo' 
        onChange={(e) => {
          setTodo(e.target.value);
        }}/>
        <button 
        className='add-button'
        onClick={addTodo}>Add</button>
      </div>
      <div>{todos.map(element => <Item todo={element} delete={removeToDo} key={element.id}/>)}</div> 
    </div>
  );
}

export default App;
