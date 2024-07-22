import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Home = () => {
    const [games, setGames] = useState([])


    useEffect(() => {
        fetch('http://localhost:4444/games')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setGames(res)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
           {games.map((game, i) => {
            return (
                <div key={i}>
                    <Link to={`/games/${game.id}`}>{game.name}</Link>
                    </div>
            )
           })}
        </div>
    )
};

export default Home;