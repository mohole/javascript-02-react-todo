
const List = (props) => {
  // Fare sempre un controllo di valorizzazione delle props prima di
  // passarle al template, ed eventualmente fornire un valore predefinito
  const data = props.data || [];

  return (
    <ul>
      { data.map((element,i) => <li key={i}>
        <input type="checkbox" checked={element.completed} ></input>
        <label>{element.title}</label>
      </li>) }
    </ul>      
  )

  // quando credo template con liste dinamiche è FONDAMENTALE identificare
  // ogni elemento con un attributo "key" univoco
  // https://reactjs.org/docs/lists-and-keys.html#keys
}

export {
  List
}