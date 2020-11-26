import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen=() =>{
const friends=[
    {name:'Gaurav', age:'19'},
    {name:'Saurav', age:'19.5'},
    {name:'Gita', age:'20'},
    {name:'Sunita', age:'29'},
    {name:'Ankita', age:'9'}

]

    return (
        <FlatList
        // horizontal={false}
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item})=>{
           return <Text style={styles.textstyle}>{item.name} -Age {item.age}</Text>
        }}/>
    )
}

const styles=StyleSheet.create({
    textstyle:{
        marginHorizontal:50,
        marginVertical:100
    }
})

export default ListScreen;