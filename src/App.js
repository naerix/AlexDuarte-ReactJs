import logo from './logo.svg';
import './App.css';
import { dividerClasses, Typography } from '@mui/material';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailCointainer from './components/ItemDetailCointainer';


function App() {
  return (
    <div style={{backgroundColor:"#F3F3F3"}}>
      <NavBar/>
      {/*<ItemListContainer/>*/}
      <ItemDetailCointainer/>
      <div style={{backgroundColor:"#666666"}}>
        footer
      </div>
    </div>
  );
}

export default App;
