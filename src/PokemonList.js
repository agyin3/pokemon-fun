import React, { useEffect, useState } from 'react'
import cuid from 'cuid'
import axios from 'axios'
import Pokemon from './Pokemon.js'
import { CardGroup } from 'semantic-ui-react'

const PokemonList = props => {
    const [pokemons, setPokemons] = useState()
    const [url, setURL] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log('PokemonList Res', res)
            setPokemons(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [url])

    const next = e => {
        if(pokemons.next){
            setURL(pokemons.next)
        }
    }

    const previous = e => {
        if(pokemons.previous){
            setURL(pokemons.previous)
        }
    }
    return(
        <>
        <CardGroup>
            {pokemons && pokemons.results.map(pokemon => {
                return(
                <Pokemon key={pokemon.name} {...pokemon} />
            )
            })}
        </CardGroup>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
        </>
    )
}

export default PokemonList