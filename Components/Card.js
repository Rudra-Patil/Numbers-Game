import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card = props =>{
    return(
    <View style={{...styles.card,...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet({
    card:{
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:5,
        backgroundColor:'white',
        padding:20,
        borderRadius:15
    },
});

export default Card;