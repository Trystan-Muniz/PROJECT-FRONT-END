import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Show = () => {
    const [game, setGames]= useState(null)
    const { id } = useParams()
    
        useEffect(() =>{
            fetch(`http://localhost:4444/games/${id}`)
            .then(res => res.json())
            .then(res => setGames(res))
                
            .catch(err => console.error(err))
        }, [])



    return (
        <div>
           {game && 
                    <div>
                        <h2>{game.name}</h2>
                        <a href={game.irl} target="_blank">The Game</a>
                    </div>
                    }
        </div>
    );
};

export default Show;