import { IconTrash } from '@tabler/icons-react'
import React from 'react'

export const DeleteItem = ({click}) => {
  return (
    <button onClick={click} className="delete-icon">
      <IconTrash />
    </button>
  )
}