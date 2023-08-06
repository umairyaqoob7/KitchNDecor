import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/style';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomNav = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.btncon2}>
                <AntDesign name="home" size={35} color="black" style={styles.icon1}
                 onPress={() => { navigation.navigate('home') }} />

            </View>
        
            <View style={styles.btncon1} >
                <AntDesign name="shoppingcart" size={35} color="black" style={styles.icon1}
                 onPress={() => { navigation.navigate('cart') }} />
            </View>
            <View style={styles.btncon1} >
                <FontAwesome5 name="map-marked-alt" size={35} color="black" style={styles.icon1}
                 onPress={() => { navigation.navigate('trackorders') }} />
            </View>
        </View>
    );
};

export default BottomNav;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        elevation: 30,
        borderTopColor: colors.text1,
        borderTopWidth: 0.5,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    btncon1: {
            alignItems: 'center',
    },
    btncon2: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        //top: -20,
        //backgroundColor: colors.text1,
        width: 30,
        height: 50,
        borderRadius: 60,
    },
    icon2: {
        color: 'green',

    },
    icon1: {
        color: colors.text1,
    }
});