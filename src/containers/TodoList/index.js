import React from 'react'
import { useState } from 'react'
import TodoItem from './components/TodoItem'
import FormInput from './components/FormInput'
import { Link } from 'react-router-dom'
import { HowLeft, AddBtn, BackHome } from './components/styles'
// const todos = ["Go driving", "Eat lunch", "Do homework", "Read a book"]

export const TodoList = () => {
  //var books = [localStorage.getItem("userbooklist")];
  var booking = localStorage.getItem("userbooklist")
  if (booking == null) {
    booking = "Log your first To-Read Book!"
  }
  let lists = booking.split(",");
  console.log(lists);
  //console.log(books);
  if (booking == '') {
    lists = ["Log your first To-Read Book!"];
  }
  const [items, setItems] = useState(lists)
  
  const [newItem, setNewItem] = useState("")
  localStorage.setItem("userbooklist", items);

  /*if (books != items) {
    for (var i = 0; i < books.length; i++ ) {
      var newbook = items.slice()
      newbook.push(books[i])
      setItems(newbook)
      localStorage.clear()
    }
  }*/
  const addItem = () => {
    const newItems = items.slice()
    newItems.push(newItem)
    setItems(newItems)
  }

  return (
    <div>
      {/* {items.length} items left */}
      <br></br>
      <br></br>
      { items.length == 1 ? <HowLeft>1 book left! Add more!</HowLeft> : <HowLeft>{items.length} books left</HowLeft> }
      { items.map((item, idx) => <TodoItem idx={idx} key={idx} text={item} items={items} setItems={setItems}/>) }
      <FormInput
        type="text"
        placeholder="Type item here"
        value={newItem}
        setValue={setNewItem}
      />
      <AddBtn onClick={addItem}>Add Book</AddBtn>
      <BackHome>
        <Link to="/">Go Home</Link>
      </BackHome>
    </div>
  )
}