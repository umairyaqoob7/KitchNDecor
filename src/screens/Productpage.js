import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { navbtn, navbtnin, navbtnout, colors, btn2 } from '../global/style';

const Productpage = ({ navigation, route }) => {
    const data = route.params;
    //console.log('product page data', data)
    if (route.params === undefined) {
        navigation.navigate('home')
    }
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}
                style={navbtnout}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>

            <View style={styles.container1}>
                <View style={styles.s1}>
                    <Image source={{
                        uri: data.itemImageUrl
                    }} style={styles.cardimgin} />
                </View>
                <View style={styles.s2}>
                    <View style={styles.s2in}>
                        <Text style={styles.head1}>{data.itemName}</Text>
                        <Text style={styles.head2}>Rs {data.itemPrice}/-</Text>
                    </View>
                    <View style={styles.s3}>
                    <Text style={styles.head3}>About Item</Text>
                    <Text style={styles.head4}>{data.itemDescription}</Text>
                </View>
                </View>

                <View style={styles.btncont}>
                    <TouchableOpacity style={styles.btn3}>
                        <Text style={styles.btntxt}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn3}>
                    <Text style={styles.btntxt}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Productpage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        width: '100%',
    },
    container1: {
        // position: 'absolute',
        // top: 0,
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    s1: {
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardimgin: {
        width: '100%',
        height: '100%',
    },
    s2: {
        width: '100%',
        padding: 20,
        position: 'relative',
        top: -30,
        backgroundColor: colors.col1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    s2in: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    head1: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.text1,
        width: 200,
        marginRight: 5,
        marginLeft:5,
    },
    head2: {
        fontSize: 20,
        fontWeight: '200',
        color: colors.text3,
        marginRight: 10,
    },
    s3: {
        backgroundColor: colors.text1,
        padding: 20,
        borderRadius: 10,
    },
    head3: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.col1,
    },
    head4: {
        marginVertical: 10,
        fontSize: 15,
        fontWeight: '200',
        color: colors.col1,
        textAlign: 'justify',
    },
    head5: {
        color: colors.text3,
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 10,
    },
    btntxt: {
        backgroundColor: 'black',
        color: colors.col1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        fontSize: 14,
        borderRadius: 10,
        width: '100%',
        textAlign: 'center',

    },
    btncont: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10,
        flexDirection: 'row',
    },
    btn3: {
        width: 140,
        height: 80,
        // borderRadius: 50,
        // elevation: 5,
        margin: 12,
    },
});