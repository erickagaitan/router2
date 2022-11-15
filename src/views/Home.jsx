import React from "react"
import Imagen from "../assets/images/pokemon.png"

const Home= ()=>{

return (

    <main>
        <h1>Bienvenido Maestro Pokemon</h1>
        <img className="imagen" src={Imagen} alt="pokemon" />
    </main>
)
    
}





export default Home