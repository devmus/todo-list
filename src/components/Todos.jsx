import { useEffect, useState } from 'react';
import { getApiKey, getTodos } from '../services/config';
import { GetTodos } from './TodosButtons/GetTodos';
import { ClearTodos } from './TodosButtons/ClearTodos';
import { ShowTodos } from './ShowTodos/ShowTodos';
import { SortTodos } from './TodosButtons/SortTodos';

export const Todos = () => {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo") || "[]"))

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const getData = async () => {
    if(todoList.length === 0){
      try {
        const apiKey = await getApiKey();
        const todoData = await getTodos(apiKey)

        setTodoList(todoData);
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert("Gör klart dina sysslor innan du börjar med nya!")
    }
  }

  const clearData = () => {
    localStorage.clear();
    setTodoList([]);
  }

  const removeFromTodos = (removedItem) => {
    setTodoList(removedItem)
  }

  const addToTodos = (addedItem) => {
    const updatedTodoList = [...todoList, addedItem]
    setTodoList(updatedTodoList)
  }

  const updateTodos = (updatedTodo) => {
    const updatedTodoList = todoList.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodoList(updatedTodoList);
  }

  const sortData = () => {
    const sortedToDoList = [...todoList].sort((a, b) => {
      const nameA = a.task.toLowerCase();
      const nameB = b.task.toLowerCase();

      if (nameA < nameB){
        return -1
      }
      if (nameA > nameB){
        return 1
      }
      return 0;
    })
    setTodoList(sortedToDoList)
  }

  return <>
    <h1>Todos</h1>
    <div className="button-container">
      <GetTodos click={getData}/>
      <ClearTodos click={clearData}/>
      <SortTodos click={sortData}/>
    </div>
    <div className="todo-show-container">
      <ShowTodos 
      todoList={todoList} 
      removeFromTodos={removeFromTodos} 
      addToTodos={addToTodos}
      updateTodos={updateTodos}
      />
    </div>
  </>;
}