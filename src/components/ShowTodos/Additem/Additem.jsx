import { IconPlaylistAdd } from '@tabler/icons-react';
import React, { useState } from 'react'

export const Additem = ({addItem}) => {

  const [newItem, setNewItem] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem)
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newItem} onChange={(e) => {setNewItem(e.target.value)}} placeholder="Beskriv en ny syssla!" />
      <button className="icon-add"><IconPlaylistAdd /></button>
    </form>
  )
}