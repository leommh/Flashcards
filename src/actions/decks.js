export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const LIST_DECKS = 'LIST_DECKS'

/**
* @description Add deck
* @param {object} data ( title )
* @returns {boolean} true or false
*/
export function addDeck(data) {
    return {
        type: ADD_DECK,
        payload: data
    }
}

/**
* @description Add question
* @param {object} data ( parentID, question, response )
* @returns {boolean} true or false
*/
export function addQuestion(data) {
    return {
        type: ADD_QUESTION,
        payload: data
    }
}

// /**
// * @description List all decks
// * @returns {boolean} true or false
// */
// export function listDecks() {
//     return {
//         type: LIST_DECKS
//     }
// }