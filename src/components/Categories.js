import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, decor, kitchen } from '../global/style';

const Categories = ({ title, data, navigation }) => {
  const openProductkitchen= (item) => {
    navigation.navigate('productkitchen', item);
  };
  const openProductdecor= (item) => {
    //console.log('item ---- ', item.itemType);
    navigation.navigate('productdecor', item);
  };

  // Convert the data array into an array of arrays (rows of 2 cards)
  const rowData = [];
  for (let i = 0; i < data.length; i += 2) {
    rowData.push(data.slice(i, i + 2));
  }

  return (
    <View >
      <Text style={styles.cardouthead}>{title}</Text>
      <FlatList
        style={styles.cardsout}
        data={rowData} // Use the row data instead of the original data
        keyExtractor={(item, index) => `row_${index}`} // Unique key for each row
        renderItem={({ item: row }) => (
          <View style={styles.rowContainer}>
            {row.map((item) => (
              item.itemType === 'Home-Decoration' ? (
                <TouchableOpacity key={item.index} onPress={() => openProductdecor(item)}>
                  <View style={styles.card}>
                    <View style={styles.s1}>
                      <Image source={{ uri: item.itemImageUrl }} style={styles.cardimgin} />
                    </View>
                    <View style={styles.s2}>
                      <Text style={styles.txt1}>{item.itemName}</Text>
                      <View style={styles.s2in}>
                        <Text style={styles.txt2}>Rs.{item.itemPrice}/-</Text>
                        {/* {item.itemType == 'kitchen' ? <Text style={kitchen}></Text> : <Text style={decor}></Text>} */}
                      </View>
                    </View>
                    <View style={styles.s3}>
                      <Text style={styles.buybtn}>Buy</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity key={item.index} onPress={() => openProductkitchen(item)}>
                  <View style={styles.card}>
                    <View style={styles.s1}>
                      <Image source={{ uri: item.itemImageUrl }} style={styles.cardimgin} />
                    </View>
                    <View style={styles.s2}>
                      <Text style={styles.txt1}>{item.itemName}</Text>
                      <View style={styles.s2in}>
                        <Text style={styles.txt2}>Rs.{item.itemPrice}/-</Text>
                        {/* {item.itemType == 'kitchen' ? <Text style={kitchen}></Text> : <Text style={decor}></Text>} */}
                      </View>
                    </View>
                    <View style={styles.s3}>
                      <Text style={styles.buybtn}>Buy</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  cardouthead: {
    color: colors.text3,
    width: '30%',
    fontSize: 15,
    fontWeight: '200',
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: -5,
  },
  cardsout: {
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row', // To display cards side by side in a row
    //justifyContent: 'space-between', // To evenly distribute cards horizontally
  },
  card: {
    width: '90%', // Adjust the width to accommodate two cards in each row
    height: 240,
    marginVertical: -2, // Adjust the vertical margin to create spacing between rows
    borderRadius: 8,
    marginRight:-50,
    marginLeft:20,
    marginBottom:20,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    backgroundColor: colors.col1,
    flex: 1, // Make the card take half of the container's width (2 cards per row)
  },
  cardimgin: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  s2: {
    justifyContent: 'space-between', // To align elements vertically
    alignItems: 'center',
  },
  txt1: {
    fontSize: 10,
    color: colors.text3,
    marginHorizontal: 5,
    width: 140,
    marginLeft: 45,
    fontWeight: '500',
    marginTop: 10,
  },
  txt2: {
    fontSize: 10,
    color: colors.text2,
    marginRight: 100,
    marginLeft: 52,
    marginTop: 5,
  },
  s2in: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -50,
  },
  s3: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 1,
    width: '100%',
  },
  buybtn: {
    backgroundColor: colors.text1,
    color: colors.col1,
    paddingHorizontal: 10,
    paddingVertical: 0,
    fontSize: 15,
    borderRadius: 5,
    width: '90%',
    marginBottom: 5,
    textAlign: 'center',
  },
});
