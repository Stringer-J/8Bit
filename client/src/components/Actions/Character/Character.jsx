import './Character.css';
//let's me use onClose
import PropTypes from 'prop-types';
import { useState } from 'react';

function Character({ onClose }) {
    //array for equipment squares
    const equippedSquares = new Array(3).fill(null);
    //array for inventory squares
    const inventorySquares = new Array(12).fill(null);

    //state for hover tooltip on equip squares
    const [equippedHoveredSquare, setEquippedHoveredSquare] = useState(null);
    //state for hover tooltip on inventory squares
    const [inventoryHoveredSquare, setInventoryHoveredSquare] = useState(null);
    //state to determine mouse position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});
    //state for tooltip on images
    const [hoveredImage, setHoveredImage] = useState(null);

    //code for what happens when the cursor enters an equip square
    const handleMouseEnterEquipped = (e, index) => {
        setEquippedHoveredSquare(index);
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    //code for what happens when the cursor enters an inventory square
    const handleMouseEnterInventory = (e, index) => {
        setInventoryHoveredSquare(index);
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    }

    //code for what happens when the cursor is over an image
    const handleMouseEnterImage = (e, imageName) => {
        setHoveredImage(imageName);
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    }

    //code for knowing the position of the mouse while it is over something
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    //code for what happens when the mouse stops hovering over something
    const handleMouseLeave = () => {
        setEquippedHoveredSquare(null);
        setInventoryHoveredSquare(null);
        setHoveredImage(null);
    };

    return (
        <div className='character-overlay' onClick={onClose}>
            <div className='character-info' onClick={(e) => e.stopPropagation()}>
                <div className='character-header tiny5-regular'>
                    Dungeon Man
                </div>
                <div className='character-title tiny5-regular'>
                    <p>STATS</p><hr></hr>
                </div>
                <div className='character-stats tiny5-regular'>
                    {/* code for handling the tooltip when hovering over the HP icon */}
                    <div
                        className='stat-image'
                        onMouseEnter={(e) => handleMouseEnterImage(e, 'HP')}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src='/HPIcon.png' alt='HP Icon'></img>
                        <p>HP: 10/10</p>
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

                    {/* code for handling the tooltip when hovering over the MP icon */}
                    <div
                        className='stat-image'
                        onMouseEnter={(e) => handleMouseEnterImage(e, 'MP')}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src='/MPIcon.png' alt='MP Icon'></img>
                        <p>MP: 5/5</p>
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

                    {/* code for handling the tooltip when hovering over the AT icon */}
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

                    {/* code for handling the tooltip when hovering over the DF icon */}
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

                {/* code for handling the tooltip when hovering over an equipment square */}
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

                {/* code for handling the tooltip when hovering over an inventory square */}
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

//allows the use of onClose
Character.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Character;