import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { firebase } from '../Firebase/FirebaseConfig';
import { btn2, colors, navbtn, navbtnin, navbtnout } from '../global/style';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';

const UserCart = ({ navigation }) => {
    const [cartdata, setCartdata] = useState(null);
    const [totalCost, setTotalCost] = useState('0');

    const getCartData = async () => {
        const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().
            currentUser.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = JSON.stringify(doc.data());
                //console.log(data);
                setCartdata(data);
            } else {
                console.log('No such document!');
            }
        })
    }
    useEffect(() => {
        getCartData();
    }, []);

    useEffect(() => {
        if (cartdata != null) {
            const item = JSON.parse(cartdata).cart;
            // console.log(item);
            let totalitemprice = 0;
            item.map((item) => {
                let itemPrice = item.data.itemPrice;
                let itemQty = item.Itemquantity;
                let itemAddPrice = item.data.itemAddonPrice;
                let itemAddQty = item.Addonquantity;

                totalitemprice = ( parseFloat(itemPrice.replace(/,/g, '')) * parseFloat(itemQty.replace(/,/g, '')))
                 + (parseFloat(itemAddPrice.replace(/,/g, ''))  * parseFloat(itemAddQty.replace(/,/g, ''))) + totalitemprice;
            })
            
            setTotalCost(totalitemprice.toLocaleString())
        }
    }, [cartdata])

    const deleteItem = (item) => {
        const docRef = firebase.firestore().collection('UserCart').doc(firebase.auth().currentUser.uid);
        docRef.update({
            cart: firebase.firestore.FieldValue.arrayRemove(item)
        })
        getCartData();

    }

    return (
        <View style={styles.containerout}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}
                style={navbtnout}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.bottomnav}>
                <BottomNav navigation={navigation} />
            </View>

            <View style={styles.container}>
                <Text style={styles.head1}>Your Cart</Text>
                {cartdata == null || JSON.parse(cartdata).cart.length == 0 ?
                    <Text style={styles.head2}>Your Cart is Empty</Text>
                    :
                    <FlatList style={styles.cardlist} data={JSON.parse(cartdata).cart}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <View style={styles.cartcard}>
                                        <Image source={{ uri: item.data.itemImageUrl }}
                                            style={styles.cartimg} />
                                        <View style={styles.cartcardin}>
                                            <View style={styles.c1}>
                                                <Text style={styles.txt1}>{item.Itemquantity}
                                                    &nbsp;{item.data.itemName}</Text>

                                            </View>
                                            <Text style={styles.txt2}>Rs.{item.data.itemPrice} 
                                                </Text>
                                            {item.Addonquantity > 0 &&
                                                <View style={styles.c2}>
                                                    <Text style={styles.txt3}>{item.
                                                        Addonquantity}&nbsp;{item.data.itemAddon}</Text>

                                                    <Text style={styles.txt3}>Rs{item.data.
                                                        itemAddonPrice}</Text>
                                                </View>
                                            }
                                            <TouchableOpacity style={styles.c4} onPress={() => deleteItem(item)} >
                                                <AntDesign name="delete" size={24} color="black" style={styles.del} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }
                        }
                    />
                }
                <View style={styles.btncont}>
                    <View style={styles.c3}>
                        <Text style={styles.txt5}>Total</Text>
                        <Text style={styles.txt6}>Rs.{totalCost}</Text>
                    </View>
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={styles.btntxt} onPress={() => navigation.navigate
                            ('placeorder', { cartdata })}>Order Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default UserCart;

const styles = StyleSheet.create({
    bottomnav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.col1,
        zIndex: 20,
    },
    container: {
        flex: 1,
        backgroundColor: colors.col1,
        //alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        // height: '100%',
    },
    containerout: {
        flex: 1,
        backgroundColor: colors.col1,
        width: '100%',
    },
    head1: {
        fontSize: 40,
        textAlign: 'center',
        // fontWeight: '200',
        // marginVertical: 20,
        color: colors.text1,
    },
    head2: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '200',
        marginVertical: 20,
        elevation: 10,
        backgroundColor: colors.col1,
        width: '90%',
        height: '50%',
        alignSelf: 'center',
        paddingVertical: '25%',
        borderRadius: 10,
    },
    cardlist: {
        width: '100%',
    },
    cartcard: {
        flexDirection: 'row',
        backgroundColor: colors.col1,
        marginVertical: 5,
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        elevation: 10,
        alignItems: 'center',
    },
    cartimg: {
        width: 150,
        height: 100,
        borderRadius: 10,
    },
    cartcardin: {
        flexDirection: 'column',
        margin: 5,
        width: '58%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: colors.text1,

    },
    // c1: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '100%',
    //     backgroundColor: colors.col1,
    //     borderRadius: 10,
    //     padding: 5,
    // },
    txt1: {
        fontSize: 12,
        color: colors.text1,
        width: '60%',
        fontWeight: 'bold',
    },
    txt2: {
        fontSize: 16,
        color: colors.text3,
        fontWeight: 'bold',
    },
    c2: {
        backgroundColor: colors.text1,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        flexDirection: 'row',
    },
    txt3: {
        fontSize: 10,
        color: colors.col1,
    },
    del: {
        color: colors.text1,
    },
    c4: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderRadius: 10,
        borderColor: colors.text1,
        borderWidth: 1,
        marginVertical: 10,
        padding: 5,
    },
    btncont: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        //flexDirection: 'row',
        marginBottom: 70,
        borderTopColor: colors.text3,
        borderTopWidth: 0.2,
    },
    btntxt: {
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 17,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',

    },
    txt5: {
        fontSize: 20,
        color: colors.text3,
        marginHorizontal: 5,
        fontWeight: 'bold',
    },
    txt6: {
        fontSize: 15,
        color: colors.text3,
        marginHorizontal: 5,
    },
    c3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'90%',
    },
    btn2: {
        width: 330,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        color: 'white',
        margin: 10,
        alignSelf: 'center',
    },
});