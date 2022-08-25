import logo from './logo.svg';
import './App.css';
import { dividerClasses } from '@mui/material';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  let greetins = {saludo: 'Hola', saludo2: 'Bienvenido/a'};

  return (
    <div>
      <NavBar/>

      <ItemListContainer item={greetins}/>
    </div>
  );
}

export default App;
