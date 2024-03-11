import { IconSquare, IconSquareCheck } from '@tabler/icons-react';
import React from 'react';

export const ItemDone = ({ click, status }) => {
  
  return (
    <>
    {status 
    ? <button className={`icon-status-done-${status}`} onClick={click}><IconSquareCheck /></button> 
    : <button className={`icon-status-done-${status}`} onClick={click}><IconSquare /></button>
      }
    </>
  );
};