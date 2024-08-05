import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Games = () => {

    let [gameName, setGame] = useState('')
    let [playerName, setPlayer] = useState('')

    const gameStore = useSelector(store => store.gameStore)
    let {game, player} = gameStore

    const dispatch = useDispatch()

  return (
    <div className='flex h-96 flex-col justify-center items-center'>
        <span>
            Game: {game}
        </span>
        <input type="text" onChange={(e) => setGame(e.target.value)} />
        <button className='bg-green-200 p-2' onClick={() => dispatch({
            type: "UPDATE_GAME",
            payload: gameName
        })}>Update Game</button>
        <span>
            Player: {player}
        </span>
        <input type="text" onChange={(e) => setPlayer(e.target.value)} />
        <button className='bg-green-200 p-2' onClick={() => dispatch({
            type: "UPDATE_PLAYER",
            payload: playerName
        })}>Update Player</button>

    </div>
  )
}

export default Games