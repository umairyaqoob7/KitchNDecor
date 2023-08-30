import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StatusBar, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import HomeHeadNav from '../components/HomeHeadNav';
// import Categories from '../components/Categories';
import OfferSlider from '../components/OfferSlider';
import { AntDesign } from '@expo/vector-icons';
import { colors, kitchen } from '../global/style';
import { firebase } from '../Firebase/FirebaseConfig';
import Cardslider from '../components/Cardslider';
import BottomNav from '../components/BottomNav';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import Kitchen from './Kitchen';

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
          <FlatList
            style={styles.searchresultsinner}
            data={itemData}
            renderItem={({ item }) => {
              if (item.itemName.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <TouchableOpacity
                    key={item.id} // Assuming you have an 'id' property for each item
                    onPress={() => navigation.navigate('productpage', item)}>
                    <View style={styles.searchresult}>
                      <AntDesign name="arrowright" size={24} color="black" />
                      <Text style={styles.searchresulttext}>{item.itemName}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </View>}
        {/* <Categories /> */}
        <Text style={styles.head}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <TouchableOpacity onPress={() => navigation.navigate('kitchen')}>
            <View style={styles.box}>
              <FontAwesome5 name="utensils" size={24} color="black"
                style={styles.myicon} />
              <Text> Kitchen Item</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('decoration')}>
            <View style={styles.box}>
              <MaterialCommunityIcons name="lamps" size={24} color="black"
                style={styles.myicon} />
              <Text> Home Decor</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <OfferSlider />
        {/*<Text>HomeScreen</Text>*/}
        <Cardslider title={"Today's Special"} data={itemData} navigation=
          {navigation} />
        <Cardslider title={"Kitchen Utensils"} data={kitchenData} navigation=
          {navigation} />
        <Cardslider title={"Home Decoration"} data={decorData} navigation=
          {navigation} />
           <Text></Text>
          <Text></Text>
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
  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 17,
    padding: 8,
    marginLeft: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
  },
  head: {
    color: colors.text1,
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },
  bottomgap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.col1,
    zIndex: 20,
  },
});

export default HomeScreen;
