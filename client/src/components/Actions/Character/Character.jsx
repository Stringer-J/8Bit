import './Character.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Character({ onClose }) {
    const equippedSquares = new Array(3).fill(null);
    const inventorySquares = new Array(12).fill(null);

    const [equippedHoveredSquare, setEquippedHoveredSquare] = useState(null);
    const [inventoryHoveredSquare, setInventoryHoveredSquare] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});

    const handleMouseEnterEquipped = (e, index) => {
        setEquippedHoveredSquare(index);
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    const handleMouseEnterInventory = (e, index) => {
        setInventoryHoveredSquare(index);
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    const handleMouseLeave = () => {
        setEquippedHoveredSquare(null);
        setInventoryHoveredSquare(null);
    };

    return (
        <div className='character-overlay' onClick={onClose}>
            <div className='character-info' onClick={(e) => e.stopPropagation()}>
                <div className='character-header tiny5-regular'>
                    Dungeon Man LV. 1
                </div>
                <div className='character-title tiny5-regular'>
                    <p>STATS</p><hr></hr>
                </div>
                <div className='character-stats tiny5-regular'>
                    <img src='/HPIcon.png'></img><p>HP 10</p>
                    <img src='/MPIcon.png'></img><p>MP 5</p>
                    <img src='/ATIcon.png'></img><p>AT 1</p>
                    <img src='/DFIcon.png'></img><p>DF 0</p>
                </div>
                <div className='character-title tiny5-regular'>
                    <p>EQUIPMENT</p>
                </div>
                <div className='character-equipped'>
                    {equippedSquares.map((_, index) => (
                        <div key={index} 
                             className='equipped-square'
                             onMouseEnter={(e) => handleMouseEnterEquipped(e, index)}
                             onMouseMove={handleMouseMove}
                             onMouseLeave={handleMouseLeave}
                        >
                             {equippedHoveredSquare === index && (
                                <div
                                    className='tooltip tiny5-regular'
                                    style={{
                                        position: 'absolute',
                                        left: mousePosition.x + 35 + 'px',
                                        top: mousePosition.y + 35 + 'px',
                                    }}
                                >
                                    Empty
                                </div>
                             )}
                        </div>
                    ))}
                </div>
                <div className='character-title tiny5-regular'>
                    <p>INVENTORY</p>
                </div>
                <div className='character-inventory'>
                    {inventorySquares.map((_, index) => (
                        <div key={index} 
                             className='inventory-square'
                             onMouseEnter={(e) => handleMouseEnterInventory(e, index)}
                             onMouseMove={handleMouseMove}
                             onMouseLeave={handleMouseLeave}>

                             {inventoryHoveredSquare === index && (
                                <div
                                    className='tooltip tiny5-regular'
                                    style={{
                                        position: 'absolute',
                                        left: mousePosition.x + 35 + 'px',
                                        top: mousePosition.y + 35 + 'px',
                                    }}
                                >
                                    Empty
                                </div>
                             )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Character.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Character;