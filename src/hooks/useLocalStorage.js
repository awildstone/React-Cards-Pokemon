import { useState, useEffect } from 'react';

/** 
 * Custom hook to get/set localStorage and set/update cardData state.
 * 
 * If key exists in localStorage get the existing data and set as the initial cardData state.
 * If no key exists in localStorage the initial cardData state is set to an empty array.
 * 
 * Effect sets the cardData from current state in localStorage any time cardData is updated.
 */
const useLocalStorage = (key, initialValue=[]) => {
    const [cardData, setCardData] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            initialValue = JSON.parse(window.localStorage.getItem(key));
        }
        return initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(cardData))
    }, [cardData, key]);

    return [cardData, setCardData];
}

export default useLocalStorage;