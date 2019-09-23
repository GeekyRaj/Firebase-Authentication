import React from 'react';
import { Text,TouchableOpacity,StyleSheet} from 'react-native';
//import AppFonts from '../component/FontData'

const Button = ({onPress,children}) => {
    const {buttonStyle,textStyle}=Styles
    return(
        <TouchableOpacity style={buttonStyle} onPress={onPress} >
                <Text style={textStyle}>
                   {children}
                </Text>
        </TouchableOpacity>
    
);
}
const Styles=StyleSheet.create({
    buttonStyle:{
        flex:1,
        marginTop:10,
        alignSelf:'stretch',
        backgroundColor:'#f8f8ff',
        borderColor:'#1e90ff',
        borderWidth:1,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        height:41
       
  
        },
        textStyle:{
            alignSelf:'center',
            fontSize:20,
            color:'black',
            fontWeight:'600',
            paddingTop:5,
            //fontFamily:AppFonts.extraBold
             
        }
})
export { Button };
