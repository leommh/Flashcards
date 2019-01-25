import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Card, ListItem, Button, Text  } from 'react-native-elements'
import { connect } from 'react-redux'
import { randomColor, randomImage } from '../utils/colors'
import { Actions } from 'react-native-router-flux'
import styles from '../styles'

class Deck extends Component {

    render() {
        const { key, deck: { id, title, likes, dislikes } } = this.props
        const color = randomColor();

        return (
            <Card 
                image={randomImage()}
                imageStyle={[styles.cardImage, { backgroundColor: color, borderColor: color, padding: 3 }]}
                containerStyle={[styles.card, { borderColor: color }]}
                // wrapperStyle={{borderRadius: 20, elevation: 2}}
            >
                <View key={key} style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text h4 style={{color: '#333', margin: 5}}>{ title }</Text>
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 5}}>
                        <Text>LIKES: { likes }</Text>
                        <Text>DISLIKES: { dislikes }</Text>
                    </View>
                </View>
                <Button
                    backgroundColor={color}
                    buttonStyle={styles.button}
                    fontSize={16}
                    icon={{name: 'crosshairs',  type: 'font-awesome'}}
                    title='ENTER' 
                    onPress={() => Actions.deckView({ id: id, color: color })}
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