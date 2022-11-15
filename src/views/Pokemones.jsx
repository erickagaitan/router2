import React, { useContext, useState } from "react"
import { pokemonContext } from "../context/context"
import { useNavigate } from "react-router-dom"
import Context from "../context/context"

const Pokemones= ()=>{

    const navigate = useNavigate()
    const { pokemones } =useContext(pokemonContext)
    const [seleccionado,setSeleccionado]=useState('')
    
    const verDetalle = ()=> {
        navigate (`/pokemones/${seleccionado}`)
}


return (

    <main>
        <h1>Selecciona un Pokemon</h1>
        <select className="pkmn-select" onChange={(e)=>setSeleccionado(e.target.value)}>
        <option value="0">Seleccionar</option>
        {
        pokemones?.map((pkmn)=>{
            return (
            <option key={pkmn.name} value={pkmn.name}>{pkmn.name}</option>
                )
            })
            
            }

        </select>

        <button className={`btn ${(!seleccionado || seleccionado == '0')?'disabled': ''}`} onClick={()=>verDetalle()}>Ver Detalle</button>
    </main>
)
    
}


export default Pokemones