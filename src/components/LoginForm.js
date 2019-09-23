import React, { Component } from 'react';
import {Text, } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
 state={ email:'',password:'',error:'', loading: false,}

 Login(){
     const { email, password } = this.state;

     this.setState({ error:'', loading: true})

     firebase.auth().signInWithEmailAndPassword(email, password)
        .then( this.onLoginSuccess)
        .catch(() =>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then( this.onLoginSuccess)
                .catch( this.onLoginFailed );
        });
 }

 onLoginFailed =()=>{
    this.setState({
        error:'Authentication Failed',
        loading: false,
    });
 }

 onLoginSuccess =()=>{
    this.setState({
        email:'',
        password:'',
        loading: false,
    });
 }


  render() {
    return (
      <Card>
          <CardSection>
              <Input 
                label='Email'
                placeholder='user@gmail.com'
                value={this.state.email} 
                onChangeText={ email=> this.setState({email})}
                />
          </CardSection>
          <CardSection>
              <Input 
                secureTextEntry
                label='Password'
                placeholder='********'
                value={this.state.password}
                onChangeText={ password=> this.setState({password})}
                />
          </CardSection>
            <Text style={styles.errorText}>
                {this.state.error}
            </Text>
          <CardSection>
              {this.state.loading?
              <Spinner/>:
              <Button onPress={ this.Login.bind(this)}>
                  Log In
              </Button>}
          </CardSection>
      </Card>
    );
  }
}

const styles={
    errorText:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;
