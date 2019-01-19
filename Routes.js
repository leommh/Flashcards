import React from "react";
import {Router, Scene, Drawer, BackButton} from "react-native-router-flux";

class Routers extends React.Component {

    render() {
        return (

            <Router>
                <Scene key="root">
                    <Scene initial key="app" component={App} hideNavBar={true} type="reset"/>
                    {/* <Scene key="loginScreen" component={LoginScreen} hideNavBar={true} type="replace" />
                    <Scene key="addCred" panHandlers={null}  component={AddCredenciadoScreen} hideNavBar={true}/> */}



                </Scene>
            </Router>

        );
    }
};


export default Routers;
