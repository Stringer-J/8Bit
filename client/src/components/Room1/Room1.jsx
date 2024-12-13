import { useState, useEffect } from 'react';
import './Room1.css';

function Room1() {
    const squares = new Array(120).fill(null);

    return (
        <>
            <audio autoPlay loop>
                <source src="/Room1.wav" type="audio/wav" />
            </audio>

            <div className='room1Box'>
                {squares.map((_, index) => (
                    <div key={index} className={`square ${index === 60 ? 'center' : ''}`}>
                        {index === 60 && <img src='/DungeonMan.png' alt='DungeonMan' />}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Room1;