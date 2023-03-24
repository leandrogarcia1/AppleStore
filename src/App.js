
import './App.css';
import  Navbar3  from './componentes/Navbar/Navbar3';
import Footer from './componentes/footer/Footer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import WatchSeries8 from './componentes/Detalle/WachSeries8';

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Nosotros from './componentes/Nosotros/Nosotros';
import CategoriaWatch from './componentes/Categoria-Watch/Categoria-Watch';

import CatalogoCategoria from './componentes/CatalogoCategoria/CatalogoCategoria';




function App() {
  return (
    <BrowserRouter>
     
      <Navbar3/>
      
      
      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/Nosotros' element={ <Nosotros/> }/>
        <Route path='*' element={ <Navigate to={"/"}/> }/>
        <Route path='/CategoriaWatch' element={ <ItemListContainer /> }/>
        <Route path='/producto/:categoryId' element={ <ItemListContainer /> }/>
       
        
        
      </Routes>
      
      

      <Footer/>
    </BrowserRouter>


    
   
  );
}

export default App;
