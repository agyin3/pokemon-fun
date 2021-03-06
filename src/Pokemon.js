import React, {useEffect, useState} from 'react'
import {Card, Loader} from 'semantic-ui-react'
import axios from 'axios'

const Pokemon = ({name, url}) => {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log('Pokemon res', res)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [url])
    if(!data){
        return(
            <Card>
                <Card.Content>
                    <Loader active inline='centered'>
                        Loading
                    </Loader>
                </Card.Content>
            </Card>
        )
    }
    return(
            <Card>
                <Card.Content>
                    <Card.Header>{data && data.name.toUpperCase()}</Card.Header>
                    <Card.Meta>Weight: {data && data.weight}</Card.Meta>
                    <Card.Meta>Height: {data && data.height}</Card.Meta>
                    <Card.Description>Abilities: {data && data.abilities.map(abilityy => `${abilityy.ability.name} | `)}</Card.Description>
                </Card.Content>
            </Card>
    )
}

export default Pokemon