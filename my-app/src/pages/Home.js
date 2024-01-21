import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import { FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




export default function ({ navigation }) {
    return (
        <>

            <View style={styles.nav}>
                <TouchableOpacity>
                    <FontAwesome6 style={{ marginTop: 30 }} name="bars-staggered" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity >
                    <FontAwesome style={styles.user} name="user" size={28} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.search}>

                <View style={styles.bar}>
                    <FontAwesome style={{ paddingLeft: 10 }} name="search" size={24} color="black" />
                    <TextInput style={{ paddingHorizontal: 10 }} placeholder='Search'></TextInput>
                </View>
                <TouchableOpacity>
                    <FontAwesome name="shopping-cart" size={35} color="black" />
                </TouchableOpacity>

            </View>

            <View style={styles.cardsc}>
                <Text style={{
                    marginLeft: 20, fontSize: 24, fontWeight: '600'
                }}>Explore</Text>

                < View style={styles.card} >
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <View style={styles.cardimg}>
                            <Image style={{
                                resizeMode: 'cover', height: 210, width: 180, borderRadius: 15,

                            }} source={require('../img/chair2.jpg')}></Image>
                            <TouchableOpacity style={styles.heart}>
                                <FontAwesome style={{ textAlign: 'center', paddingTop: 9 }} name="heart" size={24} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{ paddingTop: 10 }}>Item Name</Text>
                            <Text style={{ fontSize: 12, color: 'gray', paddingBottom: 5 }}>Description</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                <Text style={{ fontSize: 15 }}>$ 250.00</Text>
                                <TouchableOpacity>
                                    <AntDesign name="pluscircle" size={30} color="black" />
                                </TouchableOpacity>

                            </View>



                        </View>
                        <View style={styles.cardimg}>
                            <Image style={{
                                resizeMode: 'cover', height: 210, width: 180, borderRadius: 15,
                            }} source={require('../img/chair4.jpg')}></Image>
                            <TouchableOpacity style={styles.heart}>
                                <FontAwesome style={{ textAlign: 'center', paddingTop: 9 }} name="heart" size={24} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{ paddingTop: 10 }}>Item Name</Text>
                            <Text style={{ fontSize: 12, color: 'gray', paddingBottom: 5 }}>Description</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                <Text style={{ fontSize: 15 }}>$ 270.00</Text>
                                <TouchableOpacity>
                                    <AntDesign name="pluscircle" size={30} color="black" />
                                </TouchableOpacity>

                            </View>


                        </View>
                        <View style={styles.cardimg}>

                            <Image style={{
                                resizeMode: 'cover', height: 210, width: 180, borderRadius: 15,
                            }} source={require('../img/Chair1.jpg')}></Image>
                            <TouchableOpacity style={styles.heart}>
                                <FontAwesome style={{ textAlign: 'center', paddingTop: 9 }} name="heart" size={24} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{ paddingTop: 10 }}>Item Name</Text>
                            <Text style={{ fontSize: 12, color: 'gray', paddingBottom: 5 }}>Description</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                <Text style={{ fontSize: 15 }}>$ 180.00</Text>
                                <TouchableOpacity>
                                    <AntDesign name="pluscircle" size={30} color="black" />
                                </TouchableOpacity>

                            </View>


                        </View>

                    </ScrollView>
                </View>

            </View >
            <View style={styles.items}>

                <Text style={{ fontSize: 24, fontWeight: '600', paddingHorizontal: 20 }}>Best Selling</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.rect}>
                        <View><Image style={styles.img} source={require('../img/Chair3.jpg')} /></View>
                        <View style={{ width: 230, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '600' }}> Magical Player</Text>
                            <Text style={{ fontSize: 15, paddingLeft: 8, color: '#808080' }}>Color: Pink</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingTop: 10 }}>
                                <Text style={{ fontWeight: '500' }}>$ 125.00</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail')}><AntDesign style={{ height: 40, width: 40, backgroundColor: '#000', textAlign: 'center', paddingTop: 5, marginTop: -10, borderRadius: 10, }} name="arrowright" size={30} color="#fff" /></TouchableOpacity>

                            </View>
                        </View>

                    </View>
                    <View style={styles.rect}>
                        <View><Image style={styles.img} source={require('../img/Chair1.jpg')} /></View>
                        <View style={{ width: 230, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '600' }}> Magical Player</Text>
                            <Text style={{ fontSize: 15, paddingLeft: 8, color: '#808080' }}>Color: Pink</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingTop: 10 }}>
                                <Text style={{ fontWeight: '500' }}>$ 125.00</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail')}><AntDesign style={{ height: 40, width: 40, backgroundColor: '#000', textAlign: 'center', paddingTop: 5, marginTop: -10, borderRadius: 10, }} name="arrowright" size={30} color="#fff" /></TouchableOpacity>

                            </View>
                        </View>

                    </View>
                    <View style={styles.rect}>
                        <View><Image style={styles.img} source={require('../img/chair2.jpg')} /></View>
                        <View style={{ width: 230, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '600' }}> Magical Player</Text>
                            <Text style={{ fontSize: 15, paddingLeft: 8, color: '#808080' }}>Color: Pink</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingTop: 10 }}>
                                <Text style={{ fontWeight: '500' }}>$ 125.00</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail')}><AntDesign style={{ height: 40, width: 40, backgroundColor: '#000', textAlign: 'center', paddingTop: 5, marginTop: -10, borderRadius: 10, }} name="arrowright" size={30} color="#fff" /></TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </ScrollView>


            </View>

            <StatusBar barStyle={'dark-content'} backgroundColor={'#f5f6fa'} />

        </>
    )
}
const styles = StyleSheet.create({
    nav: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#f5f6fa'



    },
    user: {
        backgroundColor: 'black',
        height: 40,
        width: 40,
        textAlign: 'center',
        paddingTop: 5, borderRadius: 10,
        marginTop: 20

    },
    search: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#f5f6fa'

    },
    bar: {
        backgroundColor: '#fff',
        elevation: 5,
        height: 40,

        alignItems: 'center',
        width: '80%',
        flexDirection: 'row',
        borderRadius: 10,

    },
    cardsc: {
        flex: .5,
        backgroundColor: '#f5f6fa'

    }
    ,
    cardimg: {
        height: 340,
        width: 200,
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginTop: 20, marginRight: 10

    },
    items: {
        flex: .3,

        backgroundColor: '#f5f6fa'
    },
    rect: {
        marginTop: 30,
        height: 150,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 30,

        paddingLeft: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingTop: 15,
        marginLeft: 10,
        marginRight: 10,

    },
    img: {
        height: 120,
        width: 120,
        resizeMode: 'cover',
        borderRadius: 15,


    },
    heart: {
        height: 40, width: 40, backgroundColor: '#ff6a6d', position:
            'absolute', marginLeft: 145, marginTop: 20, borderRadius: 40,

    }
})