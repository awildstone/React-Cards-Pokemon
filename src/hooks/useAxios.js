import {useState} from 'react';
import uuid from "uuid";
import axios from "axios";
import useLocalStorage from './useLocalStorage';

/** 
 * Custom hook to make API calls for requests for cards.
 * addCard gets new card data from the specified API and updates the cards state with the new data.
 * clearCards clears card data from state.
 *  */
const useAxios = (key, base_url) => {
    // const [cards, setCards] = useState([]);
    const [cards, setCards] = useLocalStorage(key);
    const addCard = async (formatter = data => data, name='') => {
        const response = await axios.get(`${base_url}${name}`)
        setCards(cards => [...cards, { id: uuid(), ...formatter(response.data) }]);
    };
    const clearCards = () => {
        setCards([]);
    };
    return [cards, addCard, clearCards]
};

export default useAxios;