import Card from './components/Card.js'
import Form from './components/Form.js';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  const updateNotes = () => {
    fetch('http://localhost:7777/notes')
      .then(response => response.json())
      .then(data => {
        setNotes(data);
      });
  }

  const handleRefresh = evt => {
    evt.preventDefault();
    updateNotes();
  };

  useEffect(() => {
    updateNotes();
  }, []);

  return (
    <div className="App">
      <div className="header-wrapper">
        <h2>Notes</h2>
        <button className="refresh-button" onClick={handleRefresh}>↺</button>
      </div>
      <div className="card-wrapper">
        {notes.map((o) => <Card key={o.id} id={o.id} text={o.text} updateNotes={updateNotes} />)}
      </div>
      <Form updateNotes={updateNotes} />
    </div>
  );
}

export default App;
