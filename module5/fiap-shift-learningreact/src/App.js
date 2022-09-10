import logo from './logo.svg';
import './App.css';

function App() {
  let fruits = ['Apple', 'Cannot', 'Strawberry']

  let info = [];
  fruits.forEach(fruit => {
    info.push(<div className= "App"> {fruit} </div>)
  });

  return (
    <>
    <div className="App">
      <p>Fruits LIST</p>
    </div>
    <div>
      {info}
    </div>
    </>
  );
}

export default App;
