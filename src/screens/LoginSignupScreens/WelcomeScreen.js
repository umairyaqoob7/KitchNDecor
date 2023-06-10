import React from 'react';
import { Text,View,StyleSheet,Image,TouchableOpacity } from 'react-native';
import logo1 from '../../../assets/logo1.png';
import {colors, hr80} from '../../global/style';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to Kitch n Decor </Text>
        <View style={styles.logout}>
          <Image source={logo1} style={styles.logo1}/>
        </View>

        <View style={hr80}/>
        <Text style={styles.text}>Find the best Items at lowest prices.</Text>
        <View style={hr80}/>
        <View style={styles.btnout}>
          <TouchableOpacity onPress={()=> navigation.navigate 
            ('signup')}>
            <Text style={styles.btn}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate ('login')}>
            <Text style={styles.btn}>Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"orange",
      width:"100%",
      alignItems:"center",
      justifyContent:"center"
  },
  title:{
    fontSize:40,
    color:colors.col1,
    textAlign:"center",
    marginVertical:10,
    fontWeight:'200',
    marginTop:45
  },
  logout:{
    width:"100%",
    height:"40%",
    //backgroundColor:"#fff",
    alignItems:"center",
  },
  logo1:{
    width:"100%",
    height:"100%",
  },
  text:{
    fontSize:18,
    width:"80%",
    color:colors.col1,
    textAlign:'center',
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
});
export default WelcomeScreen;