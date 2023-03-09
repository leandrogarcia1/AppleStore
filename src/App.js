
import './App.css';
import { Navbar } from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel  from './componentes/Carrousel/Carrousel';


function App() {
  return (
   <div >
    <Navbar/>
    <Carrousel/>
    <ItemListContainer greeting={"hola mundo"}/>
    
    
   </div>
  );
}

export default App;
