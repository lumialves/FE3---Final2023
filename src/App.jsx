import {
  BrowserRouter, 
  Routes, 
  Route,
} from 'react-router-dom';
import Home from "./Routes/Home";
import Contacto from "./Routes/Contacto";
import Dentista from "./Routes/Dentista";
import Favoritos from "./Routes/Favoritos";
import NotFound from './Routes/NotFound';
import './App.css'
import { ContextProvider } from './Components/utils/global.context';
import Footer from './Components/footer';
//import { useReducer } from 'react';
import Navbar from './Components/navbar';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" index element={<Home/>} />
              <Route path='detail/:id' element={<Dentista/>}/>
              <Route path="contact" element={<Contacto/>} />
              <Route path="favs" element={<Favoritos/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </BrowserRouter>
        <Footer />
      </div>
    </ContextProvider>
  );
}


export default App;
