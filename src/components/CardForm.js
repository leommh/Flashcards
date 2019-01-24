import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { addQuestion } from '../actions/decks'
import { validateNecessary } from '../utils/validate'
import { Actions } from 'react-native-router-flux'

class QuestionForm extends Component {

    state = {
        question: '',
        resolution: undefined
    }

    confirm = () => {
        const { state: { question, resolution }, props: { parentID } } = this

        let err = []
        !validateNecessary(parentID) && err.push({input: 'ID', msg: 'ParentID is null!'});
        !validateNecessary(question) && err.push({input: 'Question', msg: 'Question is null!'});
        !validateNecessary(resolution) && err.push({input: 'Resolution', msg: 'Resolution not selected!'});

        err.length === 0 ? (
            this.props.dispatch(addQuestion({
                parentID: parentID,
                question: question,
                resolution: resolution,
            }))
        ) : (
            this.setState({err})
        )
    }

    componentDidUpdate(oldProps) {
        this.props.decks !== oldProps.decks && Actions.pop();
    }

    render() {
        return (
            <View>
                <FormLabel>Question</FormLabel>
                <FormInput placeholder="Insert the question" onChangeText={(text) => this.setState({question: text})}/>
                {
                    this.state.err && this.state.err.map((error, index) => {
                        if (error.input === 'Question') {
                            return <FormValidationMessage key={index}>{error.msg}</FormValidationMessage>
                        }
                    })
                }

                <Picker
                    selectedValue={this.state.resolution}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({resolution: itemValue})}
                >
                    <Picker.Item label="Select Resolution!" value={undefined} />
                    <Picker.Item label="Correct" value={true} />
                    <Picker.Item label="Incorrect" value={false} />
                </Picker>
                {
                    this.state.err && this.state.err.map((error, index) => {
                        if (error.input === 'Resolution') {
                            return <FormValidationMessage key={index}>{error.msg}</FormValidationMessage>
                        }
                    })
                }

                <Button
                    backgroundColor="red"
                    large
                    icon={{name: 'plus-circle', type: 'font-awesome'}}
                    title='ADD QUESTION' 
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


export default connect(mapStateToProps)(QuestionForm)