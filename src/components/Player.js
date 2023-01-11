import React from 'react'
import Spells from './Spells'
import Weapons from './Weapons'

function Player() {
    
    return (
        <div className='container'>
            <Weapons/>
            <Spells/>
        </div>
    )
}

export default Player