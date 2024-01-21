import { View, Text, TextInput, Touchable, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5, Feather } from '@expo/vector-icons';

export default function Cart({ navigation }) {
    const [isChecked, setChecked] = useState();
    const [isChecked1, setChecked1] = useState();
    const [isChecked2, setChecked2] = useState();
    const [Quantity, setQuantity] = useState(1)
    const [Quantity1, setQuantity1] = useState(1)
    const [Quantity2, setQuantity2] = useState(1)


    return (
        <View style={{ flex: 1, backgroundColor: '#f5f6fa', }}>


            <View style={styles.sbars} >
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>

                <Text style={{ fontSize: 17 }}>Product</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <View style={styles.check}>
                    <Checkbox style={styles.checkbox} value={isChecked}
                        onValueChange={setChecked} />
                    <Image style={styles.img} source=
                        {require('../img/Chair3.jpg')}></Image>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Minimal Chair</Text>

                        <View style={styles.price}>
                            <View>
                                <Text style={{ fontSize: 16, color: '#ff6a6d', fontWeight: '500' }}>$ 235.00</Text>
                            </View>

                            <View style={styles.item} >
                                <TouchableOpacity onPress={() => { Quantity > 0 ? setQuantity(Quantity - 1) : '' }}>
                                    <Feather name="minus" size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={{ fontWeight: '600', fontSize: 15 }}>{Quantity}</Text>
                                <TouchableOpacity onPress={() => { setQuantity(Quantity + 1) }}>
                                    <Feather name="plus" size={24} color="black" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>
                <View style={styles.check}>
                    <Checkbox style={styles.checkbox} value={isChecked1}
                        onValueChange={setChecked1} />
                    <Image style={styles.img} source=
                        {require('../img/chair2.jpg')}></Image>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Vintage Chair</Text>

                        <View style={styles.price}>
                            <View>
                                <Text style={{ fontSize: 16, color: '#ff6a6d', fontWeight: '500' }}>$ 200.00</Text>
                            </View>

                            <View style={styles.item} >
                                <TouchableOpacity onPress={() => { Quantity1 > 0 ? setQuantity1(Quantity1 - 1) : '' }}>
                                    <Feather name="minus" size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={{ fontWeight: '600', fontSize: 15 }}>{Quantity1}</Text>
                                <TouchableOpacity onPress={() => { setQuantity1(Quantity1 + 1) }}>
                                    <Feather name="plus" size={24} color="black" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>
                <View style={styles.check}>
                    <Checkbox style={styles.checkbox} value={isChecked2}
                        onValueChange={setChecked2} />
                    <Image style={styles.img} source=
                        {require('../img/Chair1.jpg')}></Image>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Elegant Chair</Text>

                        <View style={styles.price}>
                            <View>
                                <Text style={{ fontSize: 16, color: '#ff6a6d', fontWeight: '500' }}>$ 250.00</Text>
                            </View>

                            <View style={styles.item} >
                                <TouchableOpacity onPress={() => { Quantity2 > 0 ? setQuantity2(Quantity2 - 1) : '' }}>
                                    <Feather name="minus" size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={{ fontWeight: '600', fontSize: 15 }}>{Quantity2}</Text>
                                <TouchableOpacity onPress={() => { setQuantity2(Quantity2 + 1) }}>
                                    <Feather name="plus" size={24} color="black" />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>
            </View>


            <View style={styles.purchase}>

                <View style={styles.selected}>
                    <Text style={{ fontSize: 16 }}>Selected items</Text>
                    <Text style={{ fontSize: 16, fontWeight: '900', color: '#ff6a6d' }}>$ 235.00</Text>

                </View>
                <View style={styles.shipping}>
                    <Text style={{ fontSize: 16 }}>Shipping Fees</Text>
                    <Text style={{ fontSize: 16, fontWeight: '900', color: '#ff6a6d' }}>$ 35.00</Text>

                </View>
                <Text style={{ borderBottomWidth: 2, color: 'gray', borderBottomColor: 'gray' }}></Text>
                <View style={styles.sub}>
                    <Text style={{ fontSize: 20, fontWeight: '900' }}>Subtotal</Text>
                    <Text style={{ fontSize: 20, fontWeight: '900', color: '#ff6a6d' }}>$ 270.00 </Text>

                </View>
                <TouchableOpacity style={styles.checkout}>
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: '600' }}>Checkout</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    section: {
        flex: .6,




    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    sbars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#f5f6fa'

    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 15,
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20

    },
    item: {
        flexDirection: 'row',


        backgroundColor: '#fff',
        elevation: 5,
        width: 130,
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginLeft: 30,





    },
    price: {
        flexDirection: 'row',
        marginTop: 10,

        alignItems: 'center'




    },
    purchase: {
        flex: .4,
        /*   backgroundColor: '#f5f6fa' */
        backgroundColor: '#fff',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    selected: {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    shipping: {
        flexDirection: 'row',
        justifyContent: 'space-between',


        marginTop: 5

    },
    sub: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: 20
    },
    checkout: {
        backgroundColor: '#24293d',
        alignItems: 'center',
        marginTop: 30,

        padding: 15,
        borderRadius: 40
    }

})