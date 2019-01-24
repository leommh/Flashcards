import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { addDeck } from '../actions/decks'
import { Actions } from 'react-native-router-flux'

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
            return Actions.deckView({ id: newDeck.id })
        }
    }

    render() {
        return (
            <View>
                <FormLabel>Title</FormLabel>
                <FormInput placeholder="Insert title of the Deck" onChangeText={(text) => this.setState({title: text})}/>
                {
                    this.state.err && this.state.err.map((error, index) => {
                        if (error.input === 'title') {
                            return <FormValidationMessage key={index}>{error.msg}</FormValidationMessage>
                        }
                    })
                }
                <Button

                    backgroundColor="red"
                    large
                    icon={{name: 'plus-circle', type: 'font-awesome'}}
                    title='ADD DECK' 
                    onPress={() => this.confirm()}
                />
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