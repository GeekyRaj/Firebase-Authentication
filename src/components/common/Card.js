import React from 'react';
import {  View,StyleSheet } from 'react-native';

const Card =(props) => {
    const {Container}=Styles
  return(
    <View style={Container}>
        {props.children}
    </View>
    )
  }

export { Card } ;

const Styles=StyleSheet.create({
    Container:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#2f4f4f',
        borderBottomWidth:0,
        shadowColor:'#228b22',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft: 5,
        marginRight:5,
        marginTop:10,

    }
})