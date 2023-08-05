import React from 'react'

const Todoitems = (props) => {
  return (
    <div onClick={()=> props.deleteItem(props.id)}>
        <li>{props.text}</li>
    </div>
  )
}

export default Todoitems