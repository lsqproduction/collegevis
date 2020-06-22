import React from 'react';

import './App.css';
import Dashboard from './Dashboard';

import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Layout /> */}
        <Nav />
        <Dashboard />

      </header>
    </div>
  );
}

export default App;
