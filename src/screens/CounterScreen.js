import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen=()=>{
    const [counter, setCounter]=useState(0);
    return (
        <View>
            <Button 
            title="Increment"
            onPress={()=>{
                setCounter(counter+1)
            }}/>
            <Text>Current Count:{counter}</Text>
            <Button 
            title="Decrement"
            onPress={()=>{
                setCounter(counter-1)
            }}/>
        </View>
    )
}

const Style = StyleSheet.create({})

export default CounterScreen;