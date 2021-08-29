import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const {useState, useEffect} = React;

function App() {
  const [activities, setActivities] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => setActivities(response.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {activities.map((a: any) => (
            <li key={a.id}> {a.title} </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
