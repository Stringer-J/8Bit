import { useState, useEffect } from 'react';
import './Room1.css';

function Room1() {
    const squares = new Array(120).fill(null);
    const [dungeonManIndex, setDungeonManIndex] = useState(60);

    const handleSquareClick = (index) => {
        setDungeonManIndex(index);
    }

    return (
        <>
            <audio autoPlay loop>
                <source src="/Room1.wav" type="audio/wav" />
            </audio>

            <div className='room1Box'>
                {squares.map((_, index) => (
                    <div key={index} 
                         className={`square ${index === 60 ? 'center' : ''}`}
                         onClick={() => handleSquareClick(index)}
                    >
                        {index === dungeonManIndex && <img src='/DungeonMan.png' alt='DungeonMan' />}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Room1;