import React from 'react';
import './App.css';
import FacturaForm from './components/FacturaForm';
import FacturaList from './components/FacturaList';

function App() {
  return (
    <div className="App">
      <FacturaForm />
      <FacturaList />
    </div>
  );
}

export default App;
