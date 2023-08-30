import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { navbtn, navbtnin, navbtnout, btn1, colors, hr80 } from '../global/style';
import { firebase } from '../Firebase/FirebaseConfig';
import { AntDesign } from '@expo/vector-icons';

const Placeorder = ({ navigation, route }) => {
    const [orderdata, setOrderdata] = useState([]);
    const [totalCost, setTotalCost] = useState('0');
    const { cartdata } = route.params;
    const itemPrice = (item) => {
        return parseFloat(item.Itemquantity.replace(/,/g, '')) * parseFloat(item.data.itemPrice.replace(/,/g, ''));
    };
    useEffect(() => {
        setOrderdata(JSON.parse(cartdata));
    }, [cartdata]);
    // console.log(totalitemprice);
    useEffect(() => {
        if (cartdata != null) {
            const item = JSON.parse(cartdata).cart;
            let totalitemprice = 0;
            item.map((item) => {
                let itemPrice = item.data.itemPrice;
                let itemQty = item.Itemquantity;
                let itemAddPrice = item.data.itemAddonPrice;
                let itemAddQty = item.Addonquantity;

                totalitemprice = (parseFloat(itemPrice.replace(/,/g, '')) * parseFloat(itemQty.replace(/,/g, '')))
                    + (parseFloat(itemAddPrice.replace(/,/g, '')) * parseFloat(itemAddQty.replace(/,/g, ''))) + totalitemprice;
            })
            // console.log(totalitemprice);
            setTotalCost(totalitemprice.toLocaleString())
        }
    }, [cartdata])

    //userdata----------------------------------------

    const [userloggeduid, setUserloggeduid] = useState(null);
    const [userdata, setUserdata] = useState(null);

    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                // console.log(user);
                if (user) {
                    // navigation.navigate('home');
                    setUserloggeduid(user.uid);
                } else {
                    setUserloggeduid(null)
                    //navigation.navigate('login')
                }
            });
        }
        checklogin();
    }, [])

    //console.log(userloggeduid);

    useEffect(() => {
        const getuserdata = async () => {
            const docRef = firebase.firestore().collection('UserData').where
                ('uid', '==', userloggeduid);
            const doc = await docRef.get();
            if (!doc.empty) {
                doc.forEach((doc) => {
                    setUserdata(doc.data());
                })
            }
            else {
                //navigation.navigate('login');
            }
        }
        getuserdata();
    }, [userloggeduid])

    // console.log(userdata);
    const placenow = () => {
        const docRef = firebase.firestore().collection('UserOrders').doc(new Date().getTime().toString());
        docRef.set({
            orderid: docRef.id,
            orderdata: orderdata.cart,
            orderstatus: 'pending',
            ordercost: totalCost,
            orderdate: firebase.firestore.FieldValue.serverTimestamp(),
            orderaddress: userdata.address,
            orderphone: userdata.phone,
            ordername: userdata.name,
            orderuseruid: userloggeduid,
            orderpayment: 'cash on delivery',
            paymentstatus: 'unpaid',
        }).then(() => {
            alert('Order Placed Successfully');
        })
    }
    // console.log("Total Cost:", totalCost);
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.head1}>Your Order Summary</Text>
                {orderdata.cart && orderdata.cart.length > 0 ? (
                    orderdata.cart.map((item, index) => (
                        <View key={index} style={styles.rowout}>
                            <View style={styles.row}>
                                <View style={styles.left}>
                                    <Text style={styles.qty}>{item.Itemquantity}</Text>
                                    <Text style={styles.title}>{item.data.itemName}</Text>
                                    <Text style={styles.price1}>Rs.{item.data.itemPrice}/-</Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.totalprice}>
                                        Rs.{(parseFloat(item.Itemquantity.replace(/,/g, '')) * parseFloat(item.data.itemPrice.replace(/,/g, '')))
                                            .toLocaleString('en-IN', { maximumFractionDigits: 2 })}/-
                                    </Text>
                                </View>
                            </View>
                            {item.Addonquantity > 0 && (
                                <View style={styles.row}>
                                    <View style={styles.left}>
                                        <Text style={styles.qty}>{item.Addonquantity}</Text>
                                        <Text style={styles.title}>{item.data.itemAddon}</Text>
                                        <Text style={styles.price1}>Rs.{item.data.itemAddonPrice}/-</Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.totalprice}>
                                            Rs.{
                                                (parseFloat(item.Addonquantity.replace(/,/g, '')) * parseFloat(item.data.itemAddonPrice.replace(/,/g, '')))
                                                    .toLocaleString('en-IN', { maximumFractionDigits: 2 })
                                            }/-
                                        </Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    ))
                ) : (
                    <Text>No items in the order</Text>
                )}
                <View style={hr80}></View>
                <View style={styles.row}>
                    <View style={styles.left}>
                        <Text style={styles.title}>Order Total :</Text>
                    </View>
                    <View style={styles.left}>
                        <Text style={styles.totalprice}>Rs.{totalCost}/-</Text>
                    </View>
                </View>
                <View style={hr80}></View>

                <View style={styles.userdataout}>
                    <Text style={styles.head1}>Your Details</Text>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Name :</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>{userdata?.name}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Email :</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>{userdata?.email}</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Phone :</Text>
                        </View>

                        <View style={styles.right}>
                            <Text style={styles.title}>{userdata?.phone}</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Address :</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={styles.title}>{userdata?.address}</Text>
                        </View>
                    </View>
                </View>

                <View style={hr80}></View>

                <View style={styles.paymentcontainer}>
                    <Text style={styles.paymentstatus}>Payment Method:</Text>
                    <Text style={styles.status}>Cash on Delivery</Text>
                </View>

                <View style={hr80}></View>

                <View >
                    <TouchableOpacity style={btn1}>
                        <Text style={styles.btntext} onPress={() => placenow()}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Placeorder;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    head1: {
        fontSize: 20,
        fontWeight: '200',
        color: colors.text1,
        margin: 10,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    rowout: {
        flexDirection: 'column',
        margin: 10,
        elevation: 10,
        backgroundColor: colors.col1,
        padding: 10,
        borderRadius: 10,
    },
    qty: {
        width: 40,
        height: 30,
        backgroundColor: colors.text1,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 10,
        color: colors.col1,
        fontSize: 12,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 12,
        marginTop: 7,
        fontWeight: 'bold',
        marginRight: 10,
    },
    price1: {
        fontSize: 12,
        marginTop: 7,
        fontWeight: 'bold',
        marginRight: 10,
        color: colors.text1,
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        flexDirection: 'row',
    },
    totalprice: {
        fontSize: 12,
        fontWeight: 'bold',
        borderColor: colors.text1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    btntext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.col1,
        margin: 10,
    },
    paymentcontainer:{
        flexDirection:'row',
        margin:10,
    },
    paymentstatus:{
        color:'green',
        fontSize:20,
        fontWeight:200,
        marginRight:5
    },
    status:{
        marginTop:'2%',
        fontWeight:900
    }
});
