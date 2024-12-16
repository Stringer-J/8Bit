import { useState, useEffect } from 'react';
import './Room1.css';
import CharacterPage from '../Actions/Character/Character.jsx';

function Room1() {
    //array for squares on the game map
    const squares = new Array(121).fill(null);

    const mapTilePaths = [
        { img: '/map-tiles/NormalFloor.png', count: 110 },
        { img: '/map-tiles/PoisonFloor.png', count: 6 },
        { img: '/map-tiles/SpikeTrap.png', count: 5 }
    ];

    const [squareTiles, setSquareTiles] = useState([]);

    //state for determining what square Dungeon Man is located in
    const [dungeonManIndex, setDungeonManIndex] = useState(60);
    //state for determining if the character page is open or not
    const [isCharacterPageOpen, setIsCharacterPageOpen] = useState(false);

    const assignMapTiles = () => {
        let assignedTiles = [];

        mapTilePaths.forEach(({ img, count }) => {
            for (let i = 0; i < count; i++) {
                assignedTiles.push(img);
            }
        });

        for (let i = assignedTiles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [assignedTiles[i], assignedTiles[j]] = [assignedTiles[j], assignedTiles[i]];
        }

        while (assignedTiles.length < 121) {
            assignedTiles.push(null);
        }

        setSquareTiles(assignedTiles);
    };

    useEffect(() => {
        assignMapTiles();
    }, []);

    //code for changing Dungeon Man's location on square click
    const handleSquareClick = (index) => {
        setDungeonManIndex(index);
    }

    //code for setting the character page to open when you click Dungeon Man
    const handleCharacterClick = () => {
        setIsCharacterPageOpen(true);
    }

    //code for close the character page when you click outside of it
    const closeCharacterPage = () => {
        setIsCharacterPageOpen(false);
    }

    return (
        <>
            {/* code for playing audio */}
            <audio autoPlay loop>
                <source src="/Room1.wav" type="audio/wav" />
            </audio>

            <div className='room1Box'>
                {/* code for mapping out all the squares, putting Dungeon Man on the map, and opening and closing the character page */}
                {squares.map((_, index) => (
                    <div key={index} 
                         className={`square ${index === 60 ? 'center' : ''}`}
                         onClick={() => handleSquareClick(index)}
                    >
                        {index === dungeonManIndex && (
                            <img 
                                src='/DungeonMan.png' 
                                alt='DungeonMan'
                                className='dungeon-man'
                                onClick={handleCharacterClick}
                            />
                        )}

                        {squareTiles[index] && (
                            <img
                                src={squareTiles[index]}
                                alt={`Map Tile ${index}`}
                                className='map-tile-image'
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