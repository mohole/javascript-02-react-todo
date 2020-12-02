import './App.css';

import { useState, useEffect } from 'react';

import { Search } from './components/Search';
import { List } from './components/List';

function App() {
  // Lista di todo che renderizzeremo in app
  const [todos, setTodos] = useState([]);
  // Copia della versione originale della lista di todo
  const [backup, setBackup] = useState([]);

  const updateSearch = (searchValue) => {
    const filtered = backup.filter((element) => {
      const str = element.title.toLowerCase();
      return str.search(searchValue) > -1;
    });

    setTodos(filtered);
  }

  // Eseguiamo la fetch dei dati remoti SOLO al primo render del componente
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(json => {
        setTodos(json);
        setBackup(json);
      });
  }, []);
  // se l'ultimo argomento di useEffect è un array vuoto, si comporta da 
  // evento di lifecycle "componentDidMount"
  // https://reactjs.org/docs/hooks-effect.html

  return (
    <div className="App">
      <h1>To Do List - React version</h1>
      <Search update={updateSearch} />
      <List data={todos} />
    </div>
  );
}

export default App;
