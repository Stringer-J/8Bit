import './MainMenu.css';

function MainMenu() {

    return (
        <>
            <audio autoPlay loop>
                <source src="/dungeonManMainMenuTheme.mp3" type="audio/mp3" />
            </audio>

            <div className='mainMenuBox'>
                <div className='mainMenu'>
                    <h1 className='tiny5-regular not-editable-text titleText'>DUNGEON MAN</h1>
                    <button className='tiny5-regular newGameButton'>NEW</button>
                    <button className='tiny5-regular continueButton'>CONTINUE</button>
                </div>
            </div>
        </>
    )
}

export default MainMenu;