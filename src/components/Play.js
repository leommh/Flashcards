import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { addDeck } from '../actions/decks'
import { Actions } from 'react-native-router-flux'

class Play extends Component {

    state = {
        keyPlay: 0,
        cards: 0,
        points: 0,
        cardActive: 0,
        showResolution: false
    }

    componentDidMount() {
        const { itens } = this.props
        itens !== undefined && this.setState({cards: itens.length})
    }

    componentDidUpdate(oldProps) {
        console.log(this.props)
    }

    setResponse = (response) => {
        const { state: { cards, points, cardActive }, props: { itens } } = this
        let tempPoints = itens[cardActive].resolution === response ? points + 1 : points  
        let tempCards = cards - 1
        let tempCardActive = cardActive < itens.length ? cardActive + 1 : itens.length
        return this.setState({cards: tempCards, points: tempPoints, cardActive: tempCardActive, showResolution: false})
    }

    reset = () => {
        const { itens } = this.props
        this.setState({cards: itens.length, points: 0, cardActive: 0, showResolution: false });
    }

    render() {
        const { keyPlay, cards, points, cardActive, showResolution } = this.state
        const { itens } = this.props
        return (
            <View key={keyPlay} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    cards !== 0 && cardActive < itens.length && (
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text>Points: {points}</Text>
                                <Text>Cards Rest: {cards}</Text>
                            </View>
                            <View>
                                <Text>{itens[cardActive].question}</Text>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    {
                                        showResolution && (
                                            <Text>Resolution: {itens[cardActive].resolution === true ? `Correct` : `Incorrect`}</Text>
                                        )
                                    }
                                    <Button
                                        backgroundColor="yellow"
                                        small
                                        title='SHOW RESOLUTION' 
                                        onPress={() => this.setState({showResolution: true})}
                                    />
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Button
                                        backgroundColor="red"
                                        small
                                        title='INCORRECT' 
                                        onPress={() => this.setResponse(false)}
                                    />
                                    <Button
                                        backgroundColor="blue"
                                        small
                                        title='CORRECT' 
                                        onPress={() => this.setResponse(true)}
                                    />                         
                                </View>

                            </View>
                        </View>
                    )
                }

                {
                    cards === 0 && cardActive === itens.length && (
                        <View>
                            <Text>Final Points: {points}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Button
                                    backgroundColor="red"
                                    small
                                    title='RE-PLAY GAME' 
                                    onPress={() => this.reset()}
                                />
                                <Button
                                    backgroundColor="blue"
                                    small
                                    title='BACK TO DECK' 
                                    onPress={() => Actions.pop()}
                                />                         
                            </View>
                        </View>
                    )
                }

            </View>

        )
    }
}

mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps)(Play)