import React, { Component } from "react"
import { connect } from 'react-redux'
import {Router, Scene, Actions} from "react-native-router-flux"
import { TouchableOpacity } from 'react-native'
import Home from './src/components/Home'
import DeckForm from './src/components/DeckForm'
import DeckView from './src/components/DeckView'
import CardForm from "./src/components/CardForm"
import Play from "./src/components/Play"
import { MaterialIcons } from '@expo/vector-icons'
import styles from './src/styles'

const renderBackButton = () => {
    return (
        <TouchableOpacity
            onPress={() => Actions.home()}
        >
            <MaterialIcons name="arrow-back" size={24} color="white" style={{paddingLeft: 15}} />
        </TouchableOpacity>
    );
};

class Routes extends Component {
    render() {
        console.log('router', this.props)
        return (

            <Router>
                <Scene key="root" titleStyle={styles.navTitle} navigationBarStyle={styles.nav} navBarButtonColor={"#FFF"}>
                    <Scene initial key="home" component={(props) => <Home {...props} />} title="Decks" hideNavBar={false} />
                    <Scene key="deckView" renderBackButton={() => renderBackButton()} component={(props) => <DeckView {...props} />} title="Deck View" hideNavBar={false} onBack={() => Actions.home()} />
                    <Scene key="deckForm" component={(props) => <DeckForm {...props} />} title="Deck Form" hideNavBar={false} />
                    <Scene key="cardForm" component={(props) => <CardForm {...props} />} title="Card Form" hideNavBar={false} />
                    <Scene key="play"  component={(props) => <Play {...props} />} title="Play View" hideNavBar={false} />
                </Scene>
            </Router>

        ) 
    }
}


export default connect()(Routes);
