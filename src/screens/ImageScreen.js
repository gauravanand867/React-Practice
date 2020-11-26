import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetail title="Forest"imageSource={require('../../assets/forest.jpg')} score={4}/>
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={8}/>
            <ImageDetail title="mountain" imageSource={require('../../assets/mountain.jpg')} score={5}/>
        </View>
    )
}

const Style=StyleSheet.create({})

export default ImageScreen;