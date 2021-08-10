import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList, Image, Button } from 'react-native'

export default function Wishlist() {
    const DATA = [
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title1: 'Ribbed Notched Blazed',
            title2: 'Hàng không bán $',
            title3: 'SKU#:234244532',
            image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-3.jpg'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title1: 'Def lefpard graphic tea',
            title2: 'Hàng không bán $',
            title3: 'SKU#:657673453',
            image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-5.jpg'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title1: 'Ribbed Notched Blazed',
            title2: 'Hàng không bán $',
            title3: 'SKU#:1343456452',
            image: 'https://danviet.mediacdn.vn/thumb_w/650/296231569849192448/2021/7/23/22067765312706274000620962783647346013365708n-16270008973741917384020.jpeg'
        },
    ];
    const renderItem = ({ item }) => (
        <View >
            <View style={{}}>
                <View>
                    <Text style={styles.title}>{item.title1}</Text>
                </View>
                <View style={styles.item}>
                    <Image
                        style={{ height: 300, width: 150, padding: 20 }}
                        source={{
                            uri: item.image,
                        }}
                    />
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 20 }}></View>
            </View>
            <View style={{ position: 'absolute', top: 80, right: 30, }}>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.title2}</Text>
                </View>
                <View>
                    <Text style={{}}>{item.title3}</Text>
                </View>
                <View style={{ width: 200 }}>
                    <View style={{}}>
                        <Button style={{}}
                            title="Add to Card"
                            color="#e1dddd"

                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button style={{}}
                            title="Remove from Wishlist"
                            color="#e1dddd"

                        />
                    </View>

                </View>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                backgroundColor: 'white', borderBottomColor: 'black', borderBottomWidth: 1, height: 35
            }}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>Your Wishlist</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={1}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    item: {
        backgroundColor: 'white',
        padding: 2,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 10,

    },
    title: {
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 15,
        fontSize: 18,
    }

});
