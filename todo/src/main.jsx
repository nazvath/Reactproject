import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Todo from './components/Todo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Todo />
  </React.StrictMode>,
)
