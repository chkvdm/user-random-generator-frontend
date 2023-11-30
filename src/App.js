import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QueryProvider from './components/QueryProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<QueryProvider />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
