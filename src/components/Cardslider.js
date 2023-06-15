import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {colors, decor, kitchen } from '../global/style';

const Cardslider = ({ title, data }) => {
    //console.log(title);
    return (
        <View style={styles.container}>
            <Text style={styles.cardouthead}>
                {title}
            </Text>
            <FlatList style={styles.cardsout}
            horizontal
            showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.s1}>
                            <Image source={{
                                uri: item.itemImageUrl
                            }} style={styles.cardimgin} />
                        </View>
                        <View style={styles.s2}>
                            <Text style={styles.txt1}>{item.itemName}</Text>
                            <View style={styles.s2in}> 
                            <Text style={styles.txt2}>Rs.{item.itemPrice}/-</Text>
                            {/* {item.itemType == 'kitchen' ? <Text style={kitchen}>
                            </Text> : <Text style={decor}></Text>} */}
                            </View>
                        </View>
                        <View style={styles.s3}>
                                <Text style={styles.buybtn}>
                                    Buy
                                </Text>
                            </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Cardslider;

const styles = StyleSheet.create({
    container: {
        marginVertical: 0,
    },
    //card
    cardouthead: {
        color: colors.text3,
        width: '90%',
        fontSize: 20,
        fontWeight: '200',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop:-5
    },
    cardsout: {
        width: '90%',
        //backgroundColor: 'red',
    },
    card: {
        // backgroundColor: "aqua",
        width: 300,
        height: 300,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: colors.col1,
    },
    cardimgin: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    s2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'aqua',
    },
    txt1: {
        fontSize: 18,
        color: colors.text3,
        marginHorizontal: 5,
        width: 150,
    },
    txt2: {
        fontSize: 20,
        color: colors.text2,
        marginRight: 10,
    },
    s2in: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,

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
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',
    }
});