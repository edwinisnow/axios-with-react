import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonList from './Components/PersonLists';
import PersonInput from './Components/PersonInput';

function App() {
  return (
    <div className="App">
      <PersonInput />
      <PersonList />
    </div>
  );
}

export default App;
