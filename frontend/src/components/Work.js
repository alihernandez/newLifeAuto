import { useState } from 'react';

const Work = () => {
    const [isShown, setIsShown] = useState(false);
    const [isPainted, setIsPainted] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
        setIsPainted(false);
    };

    const handleClickTwo = event => {
        setIsPainted(current => !current);
        setIsShown(false);
    };

    return (
        <div className='prevWork'>
            <h1>Work:</h1>
            <div className='prevWorkMenu'>
            <button onClick={handleClick}>Damage Repair</button>
            <button onClick={handleClickTwo}>Paint Repair</button>
            </div>
            {isShown && (
            <div className='repairItem'>
                <img src='https://i.imgur.com/vlxgX68.jpg' alt='' />
                <img src='https://i.imgur.com/82M0lhG.jpg' alt='' />
                <img src='https://i.imgur.com/GMGnw5T.jpg' alt='' />
            </div>
            )}
            {isPainted && (
            <div className='repairItem'>
                <img src='https://i.imgur.com/RvKouDc.jpg' alt='' />
                <img src='https://i.imgur.com/5SBbegr.jpg' alt='' />
            </div>
            )}
        </div>
    )
}

export default Work;