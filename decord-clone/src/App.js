import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './Component/sidebar';
import Chat from './Component/chat';


function App() {
  return (
    <div className="app">

      {/* sidebar compoment */}
      <Sidebar />
      {/* chat component */}
      <Chat />
    </div>
  );
}

export default App;
