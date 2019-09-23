import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

 const Header = (props) => {
     const {textStyles,viewStyles} = Styles
    return(
        <View style={viewStyles}>
                 <Text style={textStyles}>{props.textHeader}</Text>
        </View>
       
  
    )
}

const Styles=StyleSheet.create({
    textStyles:{
       fontSize:20
    },
    viewStyles:{
      paddingTop:30,
        backgroundColor:'#f0f8ff',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowOffset:{width:0,height:2}
       
        
    }
})
export  { Header };

