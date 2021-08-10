import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native'

export default function Bag() {
    const DATA = [
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title2: 'Hàng không bán $',
            title3: 'SKU#:234244532',
            title4: 'Color:White',
            title5: 'Size:M',
            titile6: 'Qty:1',
            image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-3.jpg'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title2: 'Hàng không bán $',
            title3: 'SKU#:657673453',
            title4: 'Color:Black',
            title5: 'Size:M',
            titile6: 'Qty:1',
            image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-5.jpg'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title2: 'Hàng không bán $',
            title3: 'SKU#:1343456452',
            title4: 'Color:White/black',
            title5: 'Size:M',
            titile6: 'Qty:1',
            image: 'https://danviet.mediacdn.vn/thumb_w/650/296231569849192448/2021/7/23/22067765312706274000620962783647346013365708n-16270008973741917384020.jpeg'
        },
    ];
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.item}>
                <Image
                    style={{ height: 300, width: 150, padding: 20 }}
                    source={{
                        uri: item.image,
                    }}
                />
            </View>
            <View>
                <View><Text style={styles.texttitle}>{item.title2}</Text></View>
                <View><Text style={styles.texttitle}>{item.title3}</Text></View>
                <View><Text style={styles.texttitle}>{item.title4}</Text></View>
                <View><Text style={styles.texttitle}>{item.title5}</Text></View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ textAlign: 'center' }}>Xoa</Text>
                        </TouchableOpacity>
                    </View>
                    <View><Text style={styles.texttitle}>{item.titile6}</Text></View>
                    <View >
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ textAlign: 'center' }}>Them</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={{}}>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>Your Bag</Text>
                    </View>
                    <View style={{ height: 50, width: 80, flex: 1 }}>
                        <TouchableOpacity style={styles}>
                            <Text style={{ textAlign: 'center' }}>Tim Kiem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: 18 }}>WESC Lets get Weird Graphic Tee</Text>
                </View>

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
    texttitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    button: {
        margin: 10,
        borderRadius: 50, backgroundColor: '#dfcccc',
        width: 70, height: 70,
        borderColor: 'black', borderWidth: 1,
        justifyContent: 'center', alignItems: 'center'

    },
})
