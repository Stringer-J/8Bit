import './Character.css';
import PropTypes from 'prop-types';

function Character({ onClose }) {
    return (
        <div className='character-overlay' onClick={onClose}>
            <div className='character-info' onClick={(e) => e.stopPropagation()}>
                <button className='tiny5-regular menuButton'>CHARACTER</button><br></br>
                <button className='tiny5-regular menuButton'>INVENTORY</button><br></br>
                <button className='tiny5-regular menuButton'>SAVE/LOAD</button><br></br>
                <button className='tiny5-regular menuButton'>OPTIONS</button><br></br>
                <button className='tiny5-regular menuButton' onClick={onClose}>CLOSE</button>
            </div>
        </div>
    )
}

Character.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Character;