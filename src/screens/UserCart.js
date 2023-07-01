import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { firebase } from '../Firebase/FirebaseConfig';
import { colors, navbtn, navbtnin, navbtnout } from '../global/style';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';

const UserCart = ({ navigation }) => {
    const [cartdata, setCartdata] = useState(null);
    const [totalCost, setTotalCost] = useState('0');

    const getCartData = async () => {
        const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().
            currentUser.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = JSON.stringify(doc.data());
                //console.log(data);
                setCartdata(data);
            } else {
                console.log('No such document!');
            }
        })
    }
    useEffect(() => {
        getCartData();
    }, []);
    //console.log(cartdata);
    return (
        <View style={styles.containerout}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}
                style={navbtnout}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.bottomnav}>
                <BottomNav navigation={navigation} />
            </View>

            <View style={styles.container}>
                <Text style={styles.head1}>Your Cart</Text>
            </View>
        </View>
    );
};

export default UserCart;

const styles = StyleSheet.create({
    bottomnav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.col1,
        zIndex: 20,
    },
    containerout: {
        flex:1,
        backgroundColor:colors.col1,
        width:'100%',
    }
});