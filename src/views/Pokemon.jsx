import React from "react"
import {useParams} from "react-router-dom"
import { useState,useEffect } from "react"
import Card from "../components/Card"

const Pokemon= ()=>{

    const {name}=useParams()
    const [pokemon,setPokemon]= useState({})
   
    useEffect (()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((json) => {
            setPokemon (json)
        })
        .catch((e) => console.log(e))
        
        .then((res)=>res.json())
        .then((json)=> {
            console.lo( 'hola mundo',json)
            setPokemon (json)
        })
        .catch((e)=>console.log(e))
    },[name])

    return (

    <main>
      <Card pokemon={pokemon}></Card>
    </main>

    )
}


export default Pokemon