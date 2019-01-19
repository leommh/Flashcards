import uuid from 'react-native-uuid';
import { ADD_DECKS, ADD_QUESTION } from '../actions/decks'

let STATE_INITIAL = {
    decks: []
}

initialDeck = (stateDecks, newDeck) => {
    newDeck.id = uuid.v1();
    newDeck.itens = [];
    return stateDecks.push(newDeck)
}

questDeck = (stateDecks, newQuestion) => {
    stateDecks.map(deck => {
        if (deck.id === newQuestion.deckID) {
            deck.itens.push(newQuestion)
        } else {
            deck
        }
    })
}

export default function decks (state = STATE_INITIAL, action) {
    switch (action.type) {
        case ADD_DECKS:
            return {
                ...state,
                decks: initialDeck(state.decks, action.payload)
            }
        case ADD_QUESTION: 
            return {
                ...state,
                decks: questDeck(state.decks, action.payload)
            }
        default:
            return state
    }
}