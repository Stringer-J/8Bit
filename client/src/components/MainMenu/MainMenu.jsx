import './MainMenu.css';
import { Link } from 'react-router-dom';

function MainMenu() {

    return (
        <>
            <audio autoPlay loop>
                <source src="/dungeonManMainMenuTheme.mp3" type="audio/mp3" />
            </audio>

            <div className='mainMenuBox'>
                <div className='mainMenu'>
                    <h1 className='tiny5-regular not-editable-text titleText'>DUNGEON MAN</h1>
                    <h2 className='tiny5-regular not-editable-text subTitleText'>ダンジョンマン</h2>
                    <Link to='/Room1'>
                        <button className='tiny5-regular newGameButton'>NEW</button>
                    </Link>
                    <Link to='/Room1'>
                        <button className='tiny5-regular continueButton'>CONTINUE</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MainMenu;