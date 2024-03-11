import React, { useState } from 'react';
import { DeleteItem } from './DeleteItem/DeleteItem';
import { ItemDone } from './ItemDone/ItemDone';

export const ShowItem = ({ todo, removeItem, updateItemStatus}) => {

  const [isDone, setIsDone] = useState(todo.done)

  const handleRemoveItem = () => {
    removeItem(todo.id);
  };

  const handleItemStatus = () => {
    setIsDone(!isDone);
    const updatedTodo = { ...todo, done: !isDone };
    updateItemStatus(updatedTodo)
  }


  
  return (
    <div className="item-container">
      <DeleteItem click={handleRemoveItem} />
      <li className={isDone ? "task-done" : "task-undone"}>{todo.task}</li>
      <ItemDone click={handleItemStatus} status={todo.done}/>
    </div>
  );
};