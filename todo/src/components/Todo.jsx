import React, { useState, useEffect } from 'react';
import './Todo.css';


function Todo() {
  const [input, setInput] = useState('');
  const [items, setItems]= useState([]);
  const [editIndex, setEditIndex]=useState(null);

  const handleChange = event => {
    setInput(event.target.value);
  };

  const storeItems = event => {
    event.preventDefault();
    if (editIndex !== null) {
      const newItems = [...items];
      newItems[editIndex] = input;
      setItems(newItems);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }
    setInput('');
  };

  const deleteItem = index => {
    setItems(items.filter((items, i) => i !== index));
  };

  const editItems = index => {
    setInput(items[index]);
    setEditIndex(index);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className='todo-container'>
      <form className='input-section' onSubmit={storeItems}>
        <h1>Todo</h1>
        <input type="text"
          value={input}  
          onChange={handleChange} 
          placeholder='Enter Items...'
        />
      </form>
      <ul className='itembar'>
        {items.map((item, index) => (
          <li key={index}>{item}
            <i className="fa-solid fa-trash" onClick={()=>deleteItem(index)}>
              <button className='edit' onClick={()=>editItems(index)}>Edit</button>
            </i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
