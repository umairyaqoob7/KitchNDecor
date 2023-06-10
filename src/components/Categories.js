import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import {colors} from '../global/style';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
        <FontAwesome5 name="utensils" size={24} color="black" 
        style={styles.myicon} />
        <Text style={styles.text}> Kitchen Items</Text>
        </View>
        <View style={styles.box}>
        <MaterialCommunityIcons name="lamps" size={24} color="black" 
        style={styles.myicon} />
        <Text style={styles.text}> Home Decor</Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    width: '100%',
    // height: 100,
    // alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
},
head: {
    color: colors.text1,
    fontSize: 20,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
},
box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
},
myicon: {
    marginRight: 10,
    color: colors.text3,
},
mytext: {
    color: colors.text3,
}
});