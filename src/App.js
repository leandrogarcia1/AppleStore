
import './App.css';
import  Navbar3  from './componentes/Navbar/Navbar3';
import Footer from './componentes/footer/Footer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Nosotros from './componentes/Nosotros/Nosotros';
import { MyContexto } from './contexto/Mycontext';




function App() {

  const profesor= "hola"

  return (
    <MyContexto.Provider value={profesor}>
        <BrowserRouter>
      
          <Navbar3/>
          
          
          <Routes>
            <Route path='/' element={ <ItemListContainer /> }/>
            <Route path='/Nosotros' element={ <Nosotros/> }/>
            <Route path='*' element={ <Navigate to={"/"}/> }/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }/>
            <Route path='/producto/:categoryId' element={ <ItemListContainer /> }/>
          
          </Routes>
                  
          <Footer/>
    </BrowserRouter>
      </MyContexto.Provider>
    


    
   
  );
}

export default App;
