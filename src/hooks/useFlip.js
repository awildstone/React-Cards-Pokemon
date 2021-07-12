import {useState} from 'react';

/**
 * Toggles card flipped state.
 */
const useFlip = (currState = true) => {
    const [isFlipped, setIsFlipped] = useState(currState);
    const flipCard = () => {
        setIsFlipped(isUp => !isUp);
    }
    return [isFlipped, flipCard]
};

export default useFlip;
