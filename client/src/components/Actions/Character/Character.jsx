import './Character.css';
import PropTypes from 'prop-types';

function Character({ onClose }) {
    return (
        <div className='character-overlay' onClick={onClose}>
            <div className='character-info' onClick={(e) => e.stopPropagation()}>
                <h2>Character Page</h2>
                <p>Stuff about Dungeon Man</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

Character.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Character;