import React from "react"
import { useState,useEffect } from "react"
import Context from "../context/context"

const Card =({pokemon})=> {
    return(
        <div className="card">
            <div className="col">
                <h3>{pokemon.name}</h3>
                <img src={pokemon?.sprites?.front_default} alt="{pokemon.name}"/>

                <div className="types">
                    {
                    pokemon?.types?.map((type)=>{
                        return(
                            <p>{type.type.name}</p>
                        )
                    })
                }
            </div>
        </div>
        <div className="col">
            <div className="stats">
            {
                pokemon?.stats?.map((stat)=>{

                    return(
                    <p>{stat.stat.name} :<span>{stat.base_stat}</span></p>
                    )
                })
            }

            </div>
        </div>

        </div>

    )
}

export default Card