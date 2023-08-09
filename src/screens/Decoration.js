import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import { colors } from '../global/style';
import { AntDesign } from '@expo/vector-icons';
import { firebase } from '../Firebase/FirebaseConfig';


const Decoration = ({ navigation }) => {
    const [decorData, setDecorData] = useState([]);
    const [itemData, setItemData] = useState([]);
    const itemRef = firebase.firestore().collection('ItemData');

    useEffect(() => {
        itemRef
            .get()
            .then((querySnapshot) => {
                setItemData(querySnapshot.docs.map((doc) => doc.data()));
            })
            .catch((error) => {
                console.log('Error fetching item data: ', error);
            });
    }, []);

    useEffect(() => {
        setDecorData(itemData.filter((item) => item.itemType == 'Home-Decoration'));
        // console.log('Decor Data:', decorData);
    }, [itemData]);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={styles.navbtn}>
                        <AntDesign name="back" size={24} color="black" style={styles.navbtnin} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.headText}>Home Decorations</Text>
            </View>
            <View style={styles.container} >
                <Categories data={decorData} navigation={navigation} />
            </View>

        </SafeAreaView>
    );
};

export default Decoration;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    head: {
        backgroundColor: 'green', // Set the background color to green
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
        paddingVertical: 10,
    },
    headText: {
        color: 'white', // Set the text color to white
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -30
    },
    container: {
        flex: 1,
        backgroundColor: colors.col1,
    },
    navbtn: {
        //backgroundColor: 'white',
        marginTop: 10,
        marginLeft: -175,
    },
    navbtnin: {
        color: 'white',
    },
});