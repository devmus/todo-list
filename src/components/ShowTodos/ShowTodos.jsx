import React from 'react'
import { ShowItem } from './ShowItem/ShowItem'
import { Additem } from './Additem/Additem'

export const ShowTodos = ({todoList, removeFromTodos, addToTodos, updateTodos}) => {

  const removeItem = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id)
    removeFromTodos(updatedTodoList)
  }

  const addItem = (newItem) => {
    const maxId = todoList.map((currentIds) => (currentIds.id))
    const nextId = (maxId.length !== 0 ? Math.max(...maxId)+1 : 1)
    const addedItem = {id: nextId, task: newItem, done: false}
    addToTodos(addedItem)
  }

  const updateItemStatus = (updatedTodo) => {
    updateTodos(updatedTodo);
  }

  return (
    <>
      <div className="todo-list-container">
      {(todoList.length === 0 
      ? <div className="todo-empty">Fixa några sysslor!</div> 
      : todoList.map((todo) => (
      <ShowItem 
        key={todo.id} 
        todo={todo} 
        removeItem={removeItem} 
        todoList={todoList} 
        updateItemStatus={updateItemStatus}
      />
      )))}
      </div>
      <Additem addItem={addItem}/>
    </>
  )
}