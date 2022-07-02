import React from 'react'
import { Btn, Checklist } from './styles'

const TodoItem = ({ text, idx, items, setItems }) => {
  
  const finishItem = () => {
    console.log(`Finished item ${idx}!`)
    alert(`Finished ${text}!`)
    const newItems = items.slice()
    newItems.splice(idx, 1)
    setItems(newItems)
  }

  return (
    <>
      <Checklist>{text}</Checklist>
      <br></br>
      <Btn onClick={finishItem}>Finished Book!</Btn>
      <br></br>
      <hr></hr>
    </>
  )
}

export default TodoItem