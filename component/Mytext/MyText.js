import PropTypes from "prop-types";
import React from "react";
import {View,Text, Alert} from 'react-native';
import style from "./style";

const Mytext=(name)=>{
    const handleOnPress=()=>{
        Alert.alert('Button Pressed')
    }
    return (
        <View>
<Text style ={style.text} onPress={()=>handleOnPress()}>Hello, name</Text>
        </View>
    )
}

Mytext.propTypes= {
    name : PropTypes.string.isRequired
}
export default Mytext;