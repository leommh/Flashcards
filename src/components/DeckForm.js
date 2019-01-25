import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Text, FormValidationMessage, Button } from 'react-native-elements'
import { addDeck } from '../actions/decks'
import { Actions } from 'react-native-router-flux'
import { randomColor } from '../utils/colors'
import styles from '../styles'

const color = randomColor();

class DeckForm extends Component {

    state = {
        title: ''
    }

    confirm = () => {
        const { title } = this.state
        title.length > 0 ? (
            this.props.dispatch(addDeck({title: title}))
        ) : (
            this.setState({err: [{
                input: 'title',
                msg: 'Title is null!'
            }]})
        )
    }

    componentDidUpdate(oldProps) {
        if (this.props.decks !== oldProps.decks) {
            const newDeck = this.props.decks[this.props.decks.length - 1];
            return Actions.deckView({ id: newDeck.id, color: color })
        }
    }

    render() {
        return (
            <View style={[styles.page, { backgroundColor: color }]}>
                <View style={[styles.pagePanel, { padding: 20 }]}>
                    <View style={[styles.pageHeader, { flex: 1, width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center' }]}>
                        <View style={styles.inputPanel}>
                            <Text h4 style={[styles.text, { color: color }]}>Title*:</Text>
                            
                            <TextInput
                                style={[styles.input, { borderColor: color, color: color }]}
                                placeholder="Insert title of the Deck"
                                onChangeText={(text) => this.setState({title: text})}
                                value={this.state.title}
                            />
                            {
                                this.state.err && this.state.err.map((error, index) => {
                                    if (error.input === 'title') {
                                        return <FormValidationMessage key={index}>Error: {error.msg}</FormValidationMessage>
                                    }
                                })
                            }
                        </View>
                    </View>
                    <View style={styles.pageBody}>
                        <Button
                            buttonStyle={[styles.button, { backgroundColor: color, padding: 16 }]}
                            icon={{name: 'plus-circle', type: 'font-awesome'}}
                            title='DECK' 
                            onPress={() => this.confirm()}
                        />
                    </View>
                    
                    
                </View>
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
        decks: state.decks.decks 
    }
}


export default connect(mapStateToProps)(DeckForm)