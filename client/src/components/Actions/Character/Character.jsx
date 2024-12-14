import './Character.css';
import PropTypes from 'prop-types';

function Character({ onClose }) {
    const equippedSquares = new Array(3).fill(null);
    const inventorySquares = new Array(12).fill(null);

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
                    <p>HP: 5</p>
                    <p>AT: 1</p>
                    <p>DF: 0</p>
                </div>
                <div className='character-title tiny5-regular'>
                    <p>EQUIPMENT</p>
                </div>
                <div className='character-equipped'>
                    {equippedSquares.map((_, index) => (
                        <div key={index} className='equipped-square'></div>
                    ))}
                </div>
                <div className='character-title tiny5-regular'>
                    <p>INVENTORY</p>
                </div>
                <div className='character-inventory'>
                    {inventorySquares.map((_, index) => (
                        <div key={index} className='inventory-square'></div>
                    ))}
                </div>
                <button className='tiny5-regular menuButton' onClick={onClose}>CLOSE</button>
            </div>
        </div>
    )
}

Character.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Character;