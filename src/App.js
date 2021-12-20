import { useState, useCallback } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';



const App = () => {
  const [query, setQuery] = useState("");

  const changeQuery = useCallback((query) => {
    setQuery(query)
  }, [])



  return (
    <div className="App">
      <SearchBar onSubmit={changeQuery} />
      <ImageGallery queryProp={query} />
    </div>
  );
}

export default App;
