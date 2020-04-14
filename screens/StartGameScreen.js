import React from 'react';
import {View,Text,StyleSheet,TextInput,Button}  from 'react-native';

import Card from '../Components/Card';

const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={style=styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number!</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}}/>
                </View>
            </Card>
        </View>
    );
};
//adding another view in order to place the buttons in a sideways manner and not above one another

const styles = StyleSheet.create({
    screen : {
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title: {
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15

    }

});

export default StartGameScreen;