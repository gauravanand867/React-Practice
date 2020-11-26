import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen=()=>{
const name="Gaurav Anand";

    return (
        <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.SubheaderStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:45
    },
    SubheaderStyle:{
        fontSize:20
    }

})

export default ComponentScreen;