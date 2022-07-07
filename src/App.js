import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {"Este es el item list container"} />
    </div>
  );
}

export default App;
