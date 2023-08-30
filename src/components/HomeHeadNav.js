import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {colors} from '../global/style';

const HomeHeadNav = ({navigation}) => {
  return (
    <View style={styles.container}>
        {/* <Fontisto name="nav-icon-list-a" size={24} color="black" 
        style={styles.myicon}/> */}
        <View style={styles.containerin}>
        <FontAwesome5 name="utensils" size={24} color="black" 
        style={styles.myicon1} />
        <Text style={styles.mytext}>Kitch-n-Decor </Text>
        <MaterialCommunityIcons name="lamps" size={24} color="black"
                style={styles.myicon2} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate ('userprofile')}>
        <FontAwesome5 name="user-circle" size={32} color="black" 
        style={styles.myicon3}/>
        </TouchableOpacity>
    </View>
  );
};

export default HomeHeadNav;

const styles=StyleSheet.create ({
        container: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
            backgroundColor: colors.col1,
            elevation: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        },
        containerin: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft:75
        },
        myicon1: {
            color: colors.text1,
            marginLeft:'-5%'
        },
        myicon2: {
            color: colors.text1,
        },
        myicon3: {
            color: colors.text1,
        },
        mytext: {
            color: colors.text1,
            fontSize: 20,
            marginLeft:'5%'
        },
});
