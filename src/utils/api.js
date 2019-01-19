import { AsyncStorage } from "react-native"

_storeData = async (data) => {
    try {
        await AsyncStorage.setItem('@flashcards:deck', data);
    } catch (error) {
        // Error saving data
    }
}