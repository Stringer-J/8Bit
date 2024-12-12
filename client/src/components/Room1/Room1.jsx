import './Room1.css';

function Room1() {

    return (
        <>
            <audio autoPlay loop>
                <source src="/Room1.wav" type="audio/wav" />
            </audio>

            <div className='room1Box'>
                <h1 className='tiny5-regular not-editable-text'>Room 1</h1>
                <img src='/DungeonMan.png'></img>
            </div>
        </>
    )
}

export default Room1;