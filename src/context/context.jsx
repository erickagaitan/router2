import { createContext,useState,useEffect} from "react";

export const pokemonContext = createContext()

const Context = ({children}) => {

    const [pokemones,setPokemones]=useState ()
    const [pokeseleccionado,setPokeseleccionado]=useState([])

    useEffect(() => {
        fetch ("https://pokeapi.co/api/v2/pokemon")
        .then ((res)=>res.json())
        .then((json)=> setPokemones(json.results))
        
        .catch ((e)=>console.log(e))
        
        }, [])
        
    return(
        <pokemonContext.Provider
            value={{
                pokemones,
                pokeseleccionado,
                setPokeseleccionado
            }}
        >
            {children}
        </pokemonContext.Provider>
    )

}

export default Context
