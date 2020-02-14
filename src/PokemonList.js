import React, { useEffect, useState } from 'react'
import cuid from 'cuid'
import axios from 'axios'
import Pokemon from './Pokemon.js'
import { CardGroup } from 'semantic-ui-react'

const PokemonList = props => {
    const [pokemons, setPokemons] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => {
            setPokemons(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return(
        <CardGroup>
            {pokemons && pokemons.map(pokemon => {
                return(
                <Pokemon key={pokemon.name} {...pokemon} />
            )
            })}
        </CardGroup>
    )
}

export default PokemonList