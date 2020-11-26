import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = (props) =>{
    return (
        <View>
        <Text>{props.title}</Text>
        <Image source={props.imageSource}/>
        <Text>Score = {props.score}</Text>
        </View>
    )
}

const Style=StyleSheet.create({})

export default ImageDetail;