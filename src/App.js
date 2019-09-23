import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCFYHDQNwFX_WL3gKUp1HF8_eFx-6eP-Mc',
            authDomain: 'authentication-3ea21.firebaseapp.com',
            databaseURL: 'https://authentication-3ea21.firebaseio.com',
            projectId: 'authentication-3ea21',
            storageBucket: '',
            messagingSenderId: '83153257884',
            appId: '1:83153257884:web:ceb10698aa68143402b459'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            }
            else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderData = () => {
        switch (this.state.loggedIn) {
            case true:
                return <CardSection>
                        <Button onPress={()=> firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
            case false:
                return <LoginForm />
            default:
                <Spinner size='large'/>
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header textHeader="Authentication" />
                <View >
                    {this.renderData()}
                </View>
            </View>
        );
    }
}

export default App;
