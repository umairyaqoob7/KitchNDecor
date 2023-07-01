import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StatusBar, StyleSheet, ScrollView, FlatList } from 'react-native';
import HomeHeadNav from '../components/HomeHeadNav';
import Categories from '../components/Categories';
import OfferSlider from '../components/OfferSlider';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/style';
import { firebase } from '../Firebase/FirebaseConfig';
import Cardslider from '../components/Cardslider';
import BottomNav from '../components/BottomNav';

const HomeScreen = ({ navigation }) => {
  const [itemData, setItemData] = useState([]);
  const itemRef = firebase.firestore().collection('ItemData');
  const [kitchenData, setKitchenData] = useState([]);
  const [decorData, setDecorData] = useState([]);
  const [search, setSearch] = useState([]);


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
    // console.log('Kitchen Data:', kitchenData);

    setDecorData(itemData.filter((item) => item.itemType == 'Home-Decoration'));
    // console.log('Decor Data:', decorData);
  }, [itemData]);

  //console.log(decorData)
  //console.log (kitchenData)
  //console.log(itemData);

  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeadNav navigation={navigation} />
      <View style={styles.bottomnav}>
      <BottomNav navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.searchbox}>
          <AntDesign name="search1" size={24} color="black" style={styles.searchicon} />
          <TextInput style={styles.input} placeholder="search"
            onChangeText={(text) => { setSearch(text) }}
          />
        </View>
        {search != '' && <View style={styles.seacrhresultsouter}>
          <FlatList style={styles.searchresultsinner} data={itemData} renderItem={
            ({ item }) => {
              if (item.itemName.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <View style={styles.searchresult}>
                    <AntDesign name="arrowright" size={24} color="black" />
                    <Text style={styles.searchresulttext}>{item.itemName}</Text>
                  </View>
                )
              }
            }
          } />
        </View>}
        <Categories />
        <OfferSlider />
        {/*<Text>HomeScreen</Text>*/}
        <Cardslider title={"Today's Special"} data={itemData} navigation=
          {navigation} />
        <Cardslider title={"Kitchen Utensils"} data={kitchenData} navigation=
          {navigation} />
        <Cardslider title={"Home Decoration"} data={decorData} navigation=
          {navigation} />
      </ScrollView>
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
    borderRadius: 10,
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
  seacrhresultsouter: {
    width: '100%',
    marginHorizontal: 30,
    height: '100%',
    backgroundColor: colors.col1,
  },
  searchresultsinner: {
    width: '100%',
  },
  searchresult: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 5,
  },
  searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.text1,
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.col1,
    zIndex: 20,
}
});

export default HomeScreen;
