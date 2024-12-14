import './Character.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Character({ onClose }) {
    const equippedSquares = new Array(3).fill(null);
    const inventorySquares = new Array(12).fill(null);

    const [equippedHoveredSquare, setEquippedHoveredSquare] = useState(null);
    const [inventoryHoveredSquare, setInventoryHoveredSquare] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});
    const [hoveredImage, setHoveredImage] = useState(null);

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

    const handleMouseEnterImage = (e, imageName) => {
        setHoveredImage(imageName);
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
        setHoveredImage(null);
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
                    <div
                        className='stat-image'
                        onMouseEnter={(e) => handleMouseEnterImage(e, 'HP')}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src='/HPIcon.png' alt='HP Icon'></img>
                        <p>HP: 10</p>
                        {hoveredImage === 'HP' && (
                            <div
                                className='tooltip'
                                style={{
                                    position: 'absolute',
                                    left: mousePosition.x + 35 + 'px',
                                    top: mousePosition.y + 35 + 'px',
                                }}
                            >
                                Health remaining. Lose it all and your dead.
                            </div>
                        )}
                    </div>

                    <div
                        className='stat-image'
                        onMouseEnter={(e) => handleMouseEnterImage(e, 'MP')}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src='/MPIcon.png' alt='MP Icon'></img>
                        <p>MP: 5</p>
                        {hoveredImage === 'MP' && (
                            <div
                                className='tooltip'
                                style={{
                                    position: 'absolute',
                                    left: mousePosition.x + 35 + 'px',
                                    top: mousePosition.y + 35 + 'px',
                                }}
                            >
                                Mana required for casting magic.
                            </div>
                        )}
                    </div>

                    <div
                        className='stat-image'
                        onMouseEnter={(e) => handleMouseEnterImage(e, 'AT')}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src='/ATIcon.png' alt='AT Icon'></img>
                        <p>AT: 1</p>
                        {hoveredImage === 'AT' && (
                            <div
                                className='tooltip'
                                style={{
                                    position: 'absolute',
                                    left: mousePosition.x + 35 + 'px',
                                    top: mousePosition.y + 35 + 'px',
                                }}
                            >
                                Amount of raw damage you can deal.
                            </div>
                        )}
                    </div>

                    <div
                        className='stat-image'
                        onMouseEnter={(e) => handleMouseEnterImage(e, 'DF')}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src='/DFIcon.png' alt='DF Icon'></img>
                        <p>DF: 0</p>
                        {hoveredImage === 'DF' && (
                            <div
                                className='tooltip'
                                style={{
                                    position: 'absolute',
                                    left: mousePosition.x + 35 + 'px',
                                    top: mousePosition.y + 35 + 'px',
                                }}
                            >
                                Reduces damage from enemy attacks or physical traps.
                            </div>
                        )}
                    </div>

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