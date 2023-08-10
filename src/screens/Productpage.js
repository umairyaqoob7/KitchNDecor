import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
    navbtn, navbtnin, navbtnout, colors, btn2, hr80, incdecbtn,
    incdecinput, incdecout
} from '../global/style';
import { firebase } from '../Firebase/FirebaseConfig';

const Productpage = ({ navigation, route }) => {
    const data = route.params;
    //console.log('product page data', data)
    if (route.params === undefined) {
        navigation.navigate('home')
    }

    const [quantity, setQuantity] = useState('1');
    const [addonquantity, setAddonquantity] = useState('0');

    const addtocart = () => {
        //console.log('add to cart')
        const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().
            currentUser.uid);

        const data1 = { data, Addonquantity: addonquantity, Itemquantity: quantity }
        docRef.get().then((doc) => {
            if (doc.exists) {
                docRef.update({
                    cart: firebase.firestore.FieldValue.arrayUnion(data1)
                })

                alert('Added to Cart')
            }
            else {
                docRef.set({
                    cart: [data1],
                })
                alert('Added to Cart')
            }
        })
    }
    // console.log(quantity);
    //console.log(data.itemPrice * quantity);

    const increaseQuantity = () => {
        setQuantity((parseInt(quantity) + 1).toString())
    }
    const decreaseQuantity = () => {
        if (parseInt(quantity) > 1) {
            setQuantity((parseInt(quantity) - 1).toString())
        }
    }

    const increaseAddonQuantity = () => {
        setAddonquantity((parseInt(addonquantity) + 1).toString())
    }
    const decreaseAddonQuantity = () => {
        if (parseInt(addonquantity) > 0) {
            setAddonquantity((parseInt(addonquantity) - 1).toString())
        }
    }

    const cartdata = JSON.stringify({ cart: [{ Addonquantity: addonquantity, Itemquantity: quantity, data }] });

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
                        <Text style={styles.head2}>Rs.{data.itemPrice}</Text>
                    </View>
                    <View style={styles.s3}>
                        <Text style={styles.head3}>About Item</Text>
                        <Text style={styles.head4}>{data.itemDescription}</Text>
                    </View>

                    <View style={styles.container2}>
                        <Text style={styles.txt1}>Location</Text>
                        <Text style={styles.txt2}>{data.storeName}</Text>
                        <View style={styles.container2in}>
                            <Text style={styles.txt3}>{data.storeAddressBuilding}</Text>
                            <View style={styles.dash}></View>
                            <Text style={styles.txt3}>{data.storeAddressStreet}</Text>
                            <View style={styles.dash}></View>
                            <Text style={styles.txt3}>{data.storeAddressCity}</Text>
                        </View>
                    </View>

                    {data.itemAddonPrice != "" &&
                        <View style={styles.container3}>
                            <View style={hr80}></View>
                            <Text style={styles.txt5}>Add Extra</Text>
                            <View style={styles.c3in}>
                                <Text style={styles.text4}>{data.itemAddon}</Text>
                                <Text style={styles.text4}>Rs.{data.itemAddonPrice}</Text>
                            </View>
                            <View style={incdecout}>
                                <Text style={incdecbtn} onPress={() => increaseAddonQuantity()}>+</Text>
                                <TextInput value={addonquantity} style={incdecinput} />
                                <Text style={incdecbtn} onPress={() => decreaseAddonQuantity()}>-</Text>
                            </View>
                        </View>
                    }

                    <View style={styles.container3}>
                        <View style={hr80}></View>
                        <Text style={styles.txt5}>Item Quantity</Text>
                        <View style={incdecout}>
                            <Text style={incdecbtn} onPress={() => increaseQuantity()}>+</Text>
                            <TextInput value={quantity} style={incdecinput} />
                            <Text style={incdecbtn} onPress={() => decreaseQuantity()}>-</Text>
                        </View>
                        <View style={hr80}></View>
                    </View>
                </View>

                <View style={styles.container3}>
                    {/* <View style={hr80}></View> */}

                    <View style={styles.c4in}>
    <Text style={styles.txt2}>Total Price</Text>
    {data.itemAddonPrice !== "" ? (
        <Text style={styles.txt6}>
            Rs.{" "}
            {(
                (parseFloat(data.itemPrice.replace(/,/g, '')) * parseFloat(quantity)) +
                parseFloat(addonquantity) * parseFloat(data.itemAddonPrice)
            ).toLocaleString('en-IN')}
        </Text>
    ) : (
        <Text style={styles.txt6}>
            Rs.{" "}
            {(
                parseFloat(data.itemPrice.replace(/,/g, '')) *
                (parseFloat(quantity) + parseFloat(addonquantity))
            ).toLocaleString('en-IN')}
        </Text>
    )}
</View>

                    <View style={styles.hr7}></View>
                </View>

                <View style={styles.btncont}>
                    <TouchableOpacity style={styles.btn3} onPress={() => addtocart()}>
                        <Text style={styles.btntxt}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn4}>
                        <Text style={styles.btntxt1} onPress={() => navigation.navigate('placeorder', { cartdata })}>Buy Now</Text>
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
        height: 350,
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
        marginLeft: 5,
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
        fontSize: 18,
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
        // backgroundColor:'black',
        backgroundColor: 'white',
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        fontWeight: 600,
        fontSize: 14,
        borderRadius: 10,
        width: '100%',
        elevation: 10,
        textAlign: 'center',

    },

    btntxt1: {
        backgroundColor: 'black',
        // backgroundColor: 'white',
        color: 'white',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        fontWeight: 600,
        fontSize: 14,
        borderRadius: 10,
        width: '100%',
        elevation: 10,
        textAlign: 'center',

    },
    btncont: {
        width: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: -32,
        flexDirection: 'row',
    },

    btn3: {
        width: 140,
        height: 63,
        borderRadius: 30,
        margin: 12,
    },
    btn4: {
        width: 140,
        height: 80,
        borderRadius: 30,
        // elevation: 15,
        margin: 12,
    },
    container2: {
        width: '90%',
        backgroundColor: colors.col1,
        padding: 20,
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 10,
        marginTop: 30,
        marginBottom: 15,
        elevation: 10,
        alignItems: 'center',
    },
    txt1: {
        color: colors.text1,
        fontSize: 20,
        fontWeight: '200',
        marginTop: -10,
        marginBottom: -10,

    },
    txt2: {
        color: colors.text3,
        fontSize: 25,
        fontWeight: '200',
        marginVertical: 10,

    },
    container2in: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt3: {
        color: colors.text1,
        fontSize: 12,
        //width:70 //address in product page
        // textAlign:'center'
    },
    dash: {
        width: 1,
        height: 20,
        backgroundColor: colors.text1,
        marginHorizontal: 10,
    },
    c3in: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    container3: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    text4: {
        color: colors.text3,
        fontSize: 20,
        marginHorizontal: 10,
    },
    c4in: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    txt5: {
        color: colors.text1,
        fontSize: 18,
        //width:70 //address in product page
        textAlign: 'center'
    },
    txt6: {
        color: colors.text1,
        fontSize: 25,
        //width:70 //address in product page
        textAlign: 'center'
    },
    hr7: {
        width: '80%',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});