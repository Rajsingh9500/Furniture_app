import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function Detail({ navigation }) {
    return (
        <>
            <View style={styles.Pr}>
                <ImageBackground borderBottomLeftRadius={80} style={styles.img} source={require('../img/Chair3.jpg')}>

                    <View style={styles.sbars} >
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                            <AntDesign name="arrowleft" size={30} color="black" />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 17 }}>Product</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <FontAwesome name="shopping-cart" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
                <View style={styles.icon}>
                    <TouchableOpacity style={styles.heart}>
                        <FontAwesome name="heart" size={30} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.description}>


                <Text style={{ fontSize: 24, fontWeight: '900', color: '#fe6a71', paddingHorizontal: 20 }}>$ 118.00</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <Text style={{ fontWeight: '400', fontSize: 16 }}> Minimal Chair</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}>⭐⭐⭐⭐  4 </Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>Color Options:</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 10, }}>
                        <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1, borderColor: 'red', justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: 'red', }} ></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1, borderColor: 'gray', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                            <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: 'gray', }} ></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1, borderColor: 'blue', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                            <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: 'blue', }} ></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Description :</Text>
                    <Text style={{ fontSize: 13, color: 'gray' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam cupiditate est, itaque fugit impedit a quas doloremque minima nihil .</Text>
                </View>
                <View style={styles.button}>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.btn}>
                        <AntDesign name="plus" size={30} color="#fff" />
                        <Text style={{ color: '#fff', paddingLeft: 10, fontSize: 18 }}>Add to cart</Text>
                    </TouchableOpacity>
                </View>


            </View>



        </>
    )
}

const styles = StyleSheet.create({
    Pr: {
        flex: .58,
        borderBottomLeftRadius: 80,
    },
    img: {

        resizeMode: 'cover',
        height: 470,
        width: '100%', borderRadius: 65,



    },

    sbars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20

    }, heart: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        position: 'absolute',
        justifyContent: 'center',
        marginTop: 20, borderRadius: 25,
        alignItems: 'center',
        elevation: 5

    },
    icon: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 25,
        marginRight: 50
    },
    description: {
        flex: .44,

    },
    btn: {
        width: '50%',
        flexDirection: 'row',
        backgroundColor: '#24293d',
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 50,
    },
    button: {
        alignItems: 'flex-end',

    }

})