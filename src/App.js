import './App.css';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import * as data from './api/todos'
import { useEffect,useState} from 'react';
import AddTask from './components/AddTask';
import ListItem from './components/ListItem';

function App() {

  const [todos, setTodos] = useState(null)
  
  useEffect(() => {
  const fetchdata = async() => {
  const fetcheddata = await data.getTodos()
  console.log(fetcheddata)
  setTodos(fetcheddata)
  }
  fetchdata()
  }, [])



  return (
    <div>
      <Navbar />
    <div className="app">
    <AddTask  />
  {
  !todos?<Preloader /> : todos.length >0 ?
  <ul className="collection with-header">
  <li className="collection-header"><h4>Tasks</h4></li>
  {
  todos.map((todo) => (
    <ListItem key={todo.id} title={todo.title} description={todo.description}/>
   ))
   }
  </ul>: <div>empty array</div>
}

</div>
</div>
      );
    }

export default App;

