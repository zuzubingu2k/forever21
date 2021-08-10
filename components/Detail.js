import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import Swiper from 'react-native-swiper'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
var styles = {
    wrapper: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
    },
    images: {

        height: 300,

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonSize: {
        flex: 1,
        marginTop: 100,
    },
    btz: {
        backgroundColor: 'white', position: 'absolute', width: 80,
        bottom: 20, left: 20,
        height: 50, borderColor: 'black', borderWidth: 1,
    },
    item: {
        backgroundColor: 'white',
        padding: 2,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 40,

    },
    texttitle: {
        fontSize: 8,
        marginTop: 5,
    },
    texttitle1: {
        fontSize: 13,
        marginTop: 3,
        fontWeight: 'bold'
    }
}

export default function Detail() {
    const ratingCompleted = () => {

    }
    const DATA = [
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-3.jpg',
            title2: 'One Shulder Cami Bodysuit',
            title3: '120$',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-5.jpg',
            title2: 'Twist-Font Crop Top',
            title3: '55,99$',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            image: 'https://danviet.mediacdn.vn/thumb_w/650/296231569849192448/2021/7/23/22067765312706274000620962783647346013365708n-16270008973741917384020.jpeg',
            title2: 'Racerback Mock Neck',
            title3: '200$',
        },
    ]
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                style={{ height: 200, width: 100, padding: 20 }}
                source={{
                    uri: item.image,
                }}
            />
            <View><Text style={styles.texttitle}>{item.title2}</Text></View>
            <View><Text style={styles.texttitle1}>{item.title3}</Text></View>
        </View>
    )
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <Swiper style={styles.wrapper} >
                    <View>
                        <Image
                            style={styles.images}
                            source={{
                                uri: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_01_16/1056800131547583426762nike1.jpg',
                            }}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.images}
                            source={{
                                uri: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-5.jpg',
                            }}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.images}
                            source={{
                                uri: 'https://cdnimg.vietnamplus.vn/uploaded/izhsa/2019_01_16/1056800131547583426762nike1.jpg',
                            }}
                        />
                    </View>
                </Swiper>
                <View style={{ height: 1000 }}>
                    <View>
                        <View style={{ marginTop: 30, marginLeft: 20, height: 80 }}>
                            <Text style={styles.text}>Texttored Cotton Skort</Text>
                            <Text style={styles.text}>$19.9</Text>
                        </View >
                        <View style={{ flex: 1 }}>
                            <Icon style={{ marginLeft: 120, marginTop: 30 }} name="heart" size={50} color="pink" />
                        </View>
                    </View>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, marginRight: 10 }}>Color:</Text>
                        <Text style={styles.text}>CAMEL</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                        <View style={{
                            backgroundColor: 'orange', alignItems: 'center', marginTop: 10, marginRight: 10, borderWidth: 1, borderColor: 'black'
                            , height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
                        }}>
                        </View>
                        <View style={{
                            backgroundColor: '#bdc0c3', alignItems: 'center', marginTop: 10, borderWidth: 1, borderColor: 'black'
                            , height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
                        }}>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 20, marginTop: 30, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, marginRight: 10 }}>Size:</Text>
                            <Text style={styles.text}>XS</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ marginTop: 30, position: 'absolute', marginLeft: 200, backgroundColor: '#bdc0c3', width: 100, height: 30 }}>
                                <Text style={{ textAlign: 'center' }}>Size Chart</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 30 }}>
                        <Text style={styles.text}>YOU MIGHT ALSO LIKE</Text>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={4}

                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <View flexDirection='row' style={{ marginBottom: 40 }}>
                    <View style={styles.buttonSize}>
                        <TouchableOpacity style={styles.btz}>
                            <Text style={{ marginTop: 10, textAlign: 'center' }}>XS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonSize}>
                        <TouchableOpacity style={styles.btz} >
                            <Text style={{ marginTop: 10, textAlign: 'center' }}>S</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonSize}>
                        <TouchableOpacity style={styles.btz}>
                            <Text style={{ marginTop: 10, textAlign: 'center' }}>M</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonSize}>
                        <TouchableOpacity style={styles.btz}>
                            <Text style={{ marginTop: 10, textAlign: 'center' }}>L</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View flexDirection='row' >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{
                            backgroundColor: 'yellow', position: 'absolute', width: '70%',
                            bottom: 20, left: 80,
                            height: 30, borderRadius: 80, borderColor: 'black', borderWidth: 1

                        }}>
                            <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>Add To Card</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ right: 20, bottom: 20 }}>
                        <Icon name="heart" size={30} color="pink" />
                    </View>
                </View>
            </View>
        </View >
    )
}