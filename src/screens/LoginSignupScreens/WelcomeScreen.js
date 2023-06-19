import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo1 from '../../../assets/logo1.png';
import { colors, hr80 } from '../../global/style';

import { firebase } from '../../Firebase/FirebaseConfig';

const WelcomeScreen = ({ navigation }) => {
  const [userlogged, setUserlogged] = useState(null);

  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged((user) => {
        // console.log(user);
        if (user) {
          // navigation.navigate('home');
          setUserlogged(user);
        } else {
          // No user is signed in.
          console.log('no user');
        }
      });
    }
    checklogin();
  }, [])

  const handlelogout = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      setUserlogged(null);
      console.log('signed out');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Kitch n Decor </Text>
      <View style={styles.logout}>
        <Image source={logo1} style={styles.logo1} />
      </View>

      <View style={hr80} />
      <Text style={styles.text}>Find the best Items at lowest prices.</Text>
      <View style={hr80} />

      {userlogged == null ?
        <View style={styles.btnout}>
          <TouchableOpacity onPress={() => navigation.navigate
            ('signup')}>
            <Text style={styles.btn}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.btn}>Login</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.logged}>
          <Text style={styles.txtlog}>Signed in as <Text style={styles.txtlogin}>
            {userlogged.email}</Text></Text>
          <View style={styles.btnout}>
            <TouchableOpacity onPress={() => navigation.navigate
              ('home')}>
              <Text style={styles.btn}>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlelogout()}>
              <Text style={styles.btn}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40,
    color: colors.col1,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: '200',
    marginTop: 45
  },
  logout: {
    width: "100%",
    height: "40%",
    //backgroundColor:"#fff",
    alignItems: "center",
  },
  logo1: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 18,
    width: "80%",
    color: colors.col1,
    textAlign: 'center',
  },
  btnout: {
    flexDirection: 'row',
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: '700',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 15,
  },
  logged: {
    alignItems: 'center',

  },
  txtlog: {
    fontSize: 16,
    color: colors.col1,
  },
  txtlogin: {
    fontSize: 16,
    color: colors.col1,
    fontWeight: '700',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  }
});
export default WelcomeScreen;