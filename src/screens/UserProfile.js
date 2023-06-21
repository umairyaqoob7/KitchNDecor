import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { navbtn, navbtnin, navbtnout, colors } from '../global/style';

import { firebase } from '../Firebase/FirebaseConfig';

const UserProfile = ({ navigation }) => {
    const [userloggeduid, setUserloggeduid] = useState(null);
    const [userdata, setUserdata] = useState(null);

    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                // console.log(user);
                if (user) {
                    // navigation.navigate('home');
                    setUserloggeduid(user.uid);
                } else {
                    setUserloggeduid(null)
                    //navigation.navigate('login')
                }
            });
        }
        checklogin();
    }, [])

    //console.log(userloggeduid);

    useEffect(() => {
        const getuserdata = async () => {
            const docRef = firebase.firestore().collection('UserData').where
                ('uid', '==', userloggeduid);
            const doc = await docRef.get();
            if (!doc.empty) {
                doc.forEach((doc) => {
                    setUserdata(doc.data());
                })
            }
            else {
                //navigation.navigate('login');
            }
        }
        getuserdata();
    }, [userloggeduid])
    console.log(userdata);
    return (
        <View style={styles.containerout}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.head1}>Your Profile </Text>
                <View style={styles.containerin}>
                    <Text style={styles.head2}>Name:
                        {userdata ?
                            <Text style={styles.head2in}> {userdata.name}</Text>
                            :
                            'loading'}
                    </Text>
                    <Text style={styles.head2}>Email:
                        {userdata ?
                            <Text style={styles.head2in}> {userdata.email}</Text>
                            :
                            'loading'}
                    </Text>
                    <Text style={styles.head2}>Phone:
                        {userdata ?
                            <Text style={styles.head2in}> {userdata.phone}</Text>
                            :
                            'loading'}
                    </Text>
                    <Text style={styles.head2}>Address:
                        {userdata ?
                            <Text style={styles.head2in}> {userdata.address}</Text>
                            :
                            'loading'}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    containerout: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
    },
    head1: {
        fontSize: 30,
        fontWeight: '200',
        marginVertical: 20,
        color: colors.text1,
    },
    containerin: {
        width: '90%',
        //alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.text1,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    head2: {
        fontSize: 17,
        fontWeight: '300',
        marginTop: 20,

    },
    head2in: {
        fontSize: 15,
        fontWeight: '200',
    },
});