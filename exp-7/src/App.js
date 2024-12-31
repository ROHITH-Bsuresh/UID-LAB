import React, { useState } from 'react';
import Weather from './components/Weather';
import './styles/App.css';

function App() {
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setQuery(location);
  };

  return (
    <div className="App">
      
      <Weather query={query} />
    </div>
  );
}

export default App;
