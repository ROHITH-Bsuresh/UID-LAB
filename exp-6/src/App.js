import React from 'react';
import AddItemForm from './list'; // Import AddItemForm from list.js
import './App.css'; // Import global styles if needed

function App() {
  return (
    <div className="App">
    
      <main>
        {/* Render the AddItemForm component */}
        <AddItemForm />
      </main>
    </div>
  );
}

export default App;
