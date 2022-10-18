/* import Button from './Componentes/Button/Button.js'; */
import './App.css';
import { useState } from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, serCart] = useState ([])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    {/* <Button style={{backgroundColor: 'green', color: 'white'}}
    handleOnClick={(children) => console.log(children)}>
      Aceptar 
    </Button>
    <Button style={{backgroundColor: 'red', color: 'white'}}>
      Cancelar 
    </Button> */}
    </div>


  );
}

export default App;
