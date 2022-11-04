import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Products from './Components/Products';
import Checkout from './Components/Checkout';
import {CartProvider} from './CartContex'

function App() {
  return (
    <div className="App">
     <CartProvider>
          <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>          
          </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
