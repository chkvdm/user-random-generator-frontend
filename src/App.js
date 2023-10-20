import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import QueryProvider from './components/QueryProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<QueryProvider />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
