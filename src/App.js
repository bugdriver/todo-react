import React from 'react';
import './App.css';
import Todo from './components/todo';

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Todo />
    </div>
  );
}

export default App;
