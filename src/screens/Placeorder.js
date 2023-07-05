import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { navbtn, navbtnin, navbtnout } from '../global/style';
import { AntDesign } from '@expo/vector-icons';

const Placeorder = ({ navigation,route}) => {
     const [orderdata, setOrderdata] = useState([]);
    const [totalCost, setTotalCost] = useState('0');
    const {cartdata} = route.params;

    // console.log(cartdata)
    useEffect(()=>{
        setOrderdata(JSON.parse(cartdata))
    }, [cartdata])
    // console.log(orderdata)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('home')}
                style={navbtnout}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <Text>Placeorder</Text>
        </View>
    );
};

export default Placeorder;

const styles = StyleSheet.create({});