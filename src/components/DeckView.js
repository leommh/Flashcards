import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

class DeckView extends Component {

    state = {
        deck: {}
    }

    componentDidUpdate(oldProps) {
        console.log(this.state)
        this.props.decks !== oldProps.decks && this.catchDeck(this.props.decks, this.props.id)
    }

    catchDeck = (decks, id) => {
        const selectedDeck = decks.filter(deck => deck.id === id);
        return selectedDeck.map(deck => this.setState({deck}))
    }

    render() {
        Object.keys(this.state.deck).length <= 0 && this.catchDeck(this.props.decks, this.props.id)
        
        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
                { 
                    Object.keys(this.state.deck).length > 0 && (
                        <ScrollView style={{flex: 1}}>
                            <Text>TITLE: {this.state.deck.title}</Text>
                            <Text>CARDS: { this.state.deck.itens.length }</Text>
                            <Button
                                buttonStyle={{marginBottom: 10}}
                                backgroundColor="#333"
                                large
                                icon={{name: 'plus-circle', type: 'font-awesome'}}
                                title='ADD QUESTION' 
                                onPress={() => Actions.cardForm({mode: 'new', parentID: this.props.id})}
                            />
                            {
                                this.state.deck.itens.length > 0 && (
                                    <Button
                                        buttonStyle={{marginBottom: 10}}
                                        backgroundColor="#333"
                                        large
                                        icon={{name: 'plus-circle', type: 'font-awesome'}}
                                        title='PLAY' 
                                        onPress={() => Actions.play({itens: this.state.deck.itens})}
                                    />
                                )
                            }
                        </ScrollView>
                    )
                }

            </View>
        )   
    } 
    
}

mapStateToProps = (state) => {
    return {
        decks: state.decks.decks
    }
}

export default connect(mapStateToProps)(DeckView)