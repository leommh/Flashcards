import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { randomColor, randomImage } from '../utils/colors'
import { Actions } from 'react-native-router-flux'

class Deck extends Component {

    render() {
        const { key, deck: { id, title, likes, dislikes } } = this.props
        const color = randomColor();

        return (
            <Card 
                image={randomImage()}
                imageStyle={{backgroundColor: color}}
            >
                <View key={key} style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Title: { title }</Text>
                    <Text>Likes: { likes }</Text>
                    <Text>Dislikes: { dislikes }</Text>
                </View>
                <Button
                    backgroundColor={color}
                    small
                    icon={{name: 'games'}}
                    title='ENTER' 
                    onPress={() => Actions.deckView({ id: id })}
                />
            </Card>
        )
    }

}

mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Deck)