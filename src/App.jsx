import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Context from './context/context';
import {useState,useEffect} from "react"
import Navbar from './components/Navbar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './views/Pokemon';

function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/"element={<Home/>}></Route>
            <Route path="/pokemones"element={<Pokemones/>}></Route>
            <Route path="/pokemones/:name"element={<Pokemon/>}></Route>
          </Routes>
        </BrowserRouter>
      </Context>    
    </div>
  );
}

export default App;
