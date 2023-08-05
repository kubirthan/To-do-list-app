import React, { useState } from 'react';
import './App.css';
import InputArea from './component/InputArea';
import Todoitems from './component/Todoitems';




function App() {
  const [items , setItems] = useState([]);


  const additems = (inputText) =>{
    setItems((prevItems) => {
      return [...prevItems, inputText]
    });
  };

  const deleteItem = (id)=>{
    setItems((prevItems) =>{
      return prevItems.filter((items,index) =>{
        return index !==id;
      })
    })
  }

  return (
    <div className="container">
     <div className='heading'>
      <h1>TO-DO-LIST</h1>
     </div>
     <InputArea additems={additems}/>
     <div>
      <ul>
        {
          items.map((item,index)=>{
            return <Todoitems key={index} text={item} deleteItem={deleteItem} id={index}/>
            
          })
        }
      </ul>
     </div>
    </div>  
  );
}

export default App;
