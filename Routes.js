import React, { Component } from "react";
import { connect } from 'react-redux'
import {Router, Scene, Actions} from "react-native-router-flux";
import Home from './src/components/Home'
import DeckForm from './src/components/DeckForm'
import DeckView from './src/components/DeckView'
import CardForm from "./src/components/CardForm";
import Play from "./src/components/Play";

class Routes extends Component {
    render() {
        console.log('router', this.props)
        return (

            <Router>
                <Scene key="root">
                    <Scene initial key="home" component={(props) => <Home {...props} />} title="Decks" hideNavBar={false} />
                    <Scene key="deckView" component={(props) => <DeckView {...props} />} title="Deck View" hideNavBar={false} onBack={() => Actions.home()} />
                    <Scene key="deckForm" component={(props) => <DeckForm {...props} />} title="Deck Form" hideNavBar={false} />
                    <Scene key="cardForm" component={(props) => <CardForm {...props} />} title="Card Form" hideNavBar={false} />
                    <Scene key="play" component={(props) => <Play {...props} />} title="Play View" hideNavBar={false} />
                </Scene>
            </Router>

        ) 
    }
}


export default connect()(Routes);
