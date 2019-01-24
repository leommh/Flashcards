import { ADD_DECK, ADD_QUESTION } from '../actions/decks'

let STATE_INITIAL = {
    decks: [{
        id: 2,
        itens: [
            {
                parentID: 2,
                question: 'Naruto é a raposa de nove caudas?',
                resolution: true
            }, {
                parentID: 2,
                question: 'Filmes são novos meios de entretenimento na atualidade?',
                resolution: false
            }, {
                parentID: 2,
                question: 'Serjão matou uma onça?',
                resolution: true
            }
        ],
        title: 'teste',
        likes: 0,
        dislikes: 0,
    }]
}

const initialDeck = (stateDecks, newDeck) => {
    newDeck.id = Math.random() * 10 + Math.random() * 10;
    newDeck.itens = [];
    newDeck.likes = 0;
    newDeck.dislikes = 0;
    return [...stateDecks, newDeck]
}

const questDeck = (stateDecks, newQuestion) => {
    let newDecks = stateDecks.map( deck => 
        deck.id === newQuestion.parentID 
        ? {...deck, itens: [...deck.itens, newQuestion]}
        : deck
    )
    return [...newDecks]
}

export default decks = (state = STATE_INITIAL, action) => {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                decks: initialDeck(state.decks, action.payload),
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