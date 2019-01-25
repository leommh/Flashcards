import React, { PureComponent } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Button, Text } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { randomColor } from '../utils/colors'
import styles from '../styles'

class DeckView extends PureComponent {

    state = {
        deck: {}
    }

    componentDidMount() {
        Object.keys(this.state.deck).length <= 0 && this.catchDeck(this.props.decks, this.props.id)
    }

    componentDidUpdate(oldProps) {
        this.props.decks !== oldProps.decks && this.catchDeck(this.props.decks, this.props.id)
    }

    catchDeck = (decks, id) => {
        const selectedDeck = decks.filter(deck => deck.id === id);
        return selectedDeck.map(deck => this.setState({deck}))
    }

    render() {
        
        const color = this.props.color || randomColor(); 
        return (
            <View style={[styles.page, { backgroundColor: color}]}>
                { 
                    Object.keys(this.state.deck).length > 0 && (
                        <View style={styles.pagePanel}>
                            <View style={styles.pageHeader}>
                                <Text h2 style={styles.pageText}>{this.state.deck.title}</Text>
                                <Text h4 style={styles.pageText}>CARDS: { this.state.deck.itens.length }</Text>
                            </View>
                            <View style={styles.pageBody}>
                                {
                                    this.state.deck.itens.length > 0 && (
                                        <Button
                                            buttonStyle={[styles.button, { padding: 20, borderRadius: 10, backgroundColor: color }]}
                                            backgroundColor="#333"
                                            fontSize={20}
                                            icon={{name: 'games'}}
                                            title='PLAY' 
                                            onPress={() => Actions.play({itens: this.state.deck.itens})}
                                        />
                                    )
                                }
                                <Button
                                    buttonStyle={[styles.button, { padding: 15, backgroundColor: color }]}
                                    backgroundColor="#333"
                                    fontSize={20}
                                    icon={{name: 'plus-circle', type: 'font-awesome'}}
                                    title='QUESTION' 
                                    onPress={() => Actions.cardForm({mode: 'new', parentID: this.props.id, color: color})}
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
        decks: state.decks.decks
    }
}

export default connect(mapStateToProps)(DeckView)