
import { useState } from 'react';

const Search = (props) => {
  // Creo uno stato locale del componente, utilizzando una prop come valore iniziale
  // o se non è stata fornita una stringa vuota. Da questo stato locale vengono generati
  // un getter e un setter per poter leggere e scrivere lo stato.
  // https://reactjs.org/docs/hooks-state.html
  const [text, setText] = useState(props.text || '');

  const typing = (event) => {
    const value = event.target.value.toLowerCase();
    setText(value);

    // controllo se è stata valorizzata la prop "update", ed eventualmente
    // eseguo la funzione al suo interno passando il valore che voglio mandare
    // al componente parent
    if (props.update){
      props.update(value);
    }
  }

  return (
    <form>
      <label htmlFor="search">Search:</label>
      <input 
        type="text" 
        name="search" 
        value={text}
        onChange={typing}
      ></input>
    </form>      
  )

  // https://reactjs.org/docs/handling-events.html
}

export {
  Search
}