import { useState, useEffect } from 'react';
import './Room1.css';
import CharacterPage from '../Actions/Character/Character.jsx';

function Room1() {
    const squares = new Array(120).fill(null);
    const [dungeonManIndex, setDungeonManIndex] = useState(60);
    const [isCharacterPageOpen, setIsCharacterPageOpen] = useState(false);

    const handleSquareClick = (index) => {
        setDungeonManIndex(index);
    }

    const handleCharacterClick = () => {
        setIsCharacterPageOpen(true);
    }

    const closeCharacterPage = () => {
        setIsCharacterPageOpen(false);
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
                        {index === dungeonManIndex && (
                            <img 
                                src='/DungeonMan.png' 
                                alt='DungeonMan'
                                onClick={handleCharacterClick}
                            />
                        )}
                    </div>
                ))}
            </div>

            {isCharacterPageOpen && <CharacterPage onClose={closeCharacterPage} />}
        </>
    )
}

export default Room1;