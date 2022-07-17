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



// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const TASKS = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
//   const onAddTask = ([str]) => {
//     console.log(str);
//   };
  
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//     console.log('useEffect');
//   }, []);
  
//   return (
//     <div className="App">
//       <NavBar />
//       <ItemListContainer greeting = {"Este es el item list container"} />
//     </div>
//   );
// }

// export default App;