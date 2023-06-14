import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StatusBar, StyleSheet } from 'react-native';
import HomeHeadNav from '../components/HomeHeadNav';
import Categories from '../components/Categories';
import OfferSlider from '../components/OfferSlider';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/style';
import { firebase } from '../Firebase/FirebaseConfig';
import Cardslider from '../components/Cardslider';

const HomeScreen = () => {
  const [itemData, setItemData] = useState([]);
  const itemRef = firebase.firestore().collection('ItemData');
  const [kitchenData, setKitchenData] = useState([]);
  const [decorData, setDecorData] = useState([]);


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
    setKitchenData(itemData.filter((item) => item.itemType == 'Kitchen-Items'));
    console.log('Kitchen Data:', kitchenData);

    setDecorData(itemData.filter((item) => item.itemType == 'Home-Decoration'));
    console.log('Decor Data:', decorData);
  }, [itemData]);

  console.log(decorData)
  //console.log (kitchenData)
  //console.log(itemData);

  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeadNav />
      <View style={styles.searchbox}>
        <AntDesign name="search1" size={24} color="black" style={styles.searchicon} />
        <TextInput style={styles.input} placeholder="search" />
      </View>
      <Categories />
      <OfferSlider />
      {/*<Text>HomeScreen</Text>*/}
      <Cardslider title={"Today's Special"} data={itemData}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    width: '100%',
    height: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: '90%',
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
});

export default HomeScreen;
