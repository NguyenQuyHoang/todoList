import './App.css';
import FormSearch from './componal/formSearch';
import Filter from './componal/filter';
import ListTodo1 from './componal/listTodo1';
import ArrListTodo from './componal/arrayList';
import { useState } from 'react';

function App() {
  const [listTodo, setListTodo] = useState(ArrListTodo)
  //Xoa todo
  function handlerDelete(index){
    listTodo.splice(index, 1)
    setListTodo([...listTodo])
  }
  // them todo
  function addTodo(value){
    let item = {todoName: value, status: false}
    setListTodo([...listTodo, item])
  }
  //update todo
  function updateTodo(value, index){
    let item = {todoName: value, status: false}
    listTodo.splice(index, 0, item)
    listTodo.splice(index+1, 1)
    setListTodo([...listTodo])
  }
  return (
    <div className="App">
      <h1 className='nameApp'>To Do</h1>
      <FormSearch addTodo={addTodo}></FormSearch>
      <Filter></Filter>
      <ListTodo1
        updateTodo={updateTodo}
        handlerDelete={handlerDelete}
        listTodo={listTodo}
      ></ListTodo1>
    </div>
  );
}

export default App;
