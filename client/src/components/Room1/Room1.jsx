import { useState, useEffect } from 'react';
import './Room1.css';

function Room1() {
    const [dMPosition, setDMPosition] = useState({ top: 10, left: 0 });

    const handleKeyDown = (event) => {
        let newTop = dMPosition.top;
        let newLeft = dMPosition.left;

        switch (event.key) {
            case 'w':
                newTop -= 100;
                break;
            case 'a':
                newLeft -= 100;
                break;
            case 's':
                newTop += 100;
                break;
            case 'd':
                newLeft += 100;
                break;
            case ' ':
                alert('There is nothing here...');
                break;
            default:
                break;
        }

        setDMPosition({ top: newTop, left: newLeft });
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [dMPosition]);

    return (
        <>
            <audio autoPlay loop>
                <source src="/Room1.wav" type="audio/wav" />
            </audio>

            <div className='room1Box' style={{ position: 'relative' }}>
                <img src='/DungeonMan.png'
                     alt='DungeonMan'
                     style={{
                        position: 'absolute',
                        top: `${dMPosition.top}px`,
                        left: `${dMPosition.left}px`
                     }}></img>
            </div>
        </>
    )
}

export default Room1;