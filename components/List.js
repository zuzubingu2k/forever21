import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Dimensions } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-3.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/22/14/co-giao-xinh-dep-day-vat-ly-hut-1-8-trieu-luot-xem-khi-phat-livestream-5.jpg'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image: 'https://kenh14cdn.com/2019/6/13/6219200219155276752141116264566021508562944n-15604239841781107710787.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: 'https://wikilaptop.com/wp-content/uploads/2021/01/1610833114_Hinh-anh-Rose-Black-Pink-dep-nhat.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: 'https://cdnmedia.thethaovanhoa.vn/Upload/leenEplQKY7jsunvYUYgg/files/2019/07/simple7.jpg'
    },
];
export default function List() {
    const { height, width } = Dimensions.get('window');
    const itemWidth = (width - 15) / 2;
    const renderItem = ({ item }) => (
        <View style={{ itemWidth, flex: 1, margin: 5 }}>
            <View >
                <Image
                    style={{ height: 300, width: '100%' }}
                    source={{
                        uri: item.image
                    }}
                >
                </Image>
                <View style={{
                    position: "absolute", top: 20, right: 30, backgroundColor: 'white', alignItems: 'center'
                    , height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
                }}>
                    <Text>Heart</Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        backgroundColor: 'orange', alignItems: 'center', marginTop: 10, borderWidth: 3, borderColor: 'black'
                        , height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
                    }}>
                        <View style={{ backgroundColor: 'orange', borderWidth: 3, borderColor: 'white', width: 46, height: 46, borderRadius: 46 / 2 }}></View>
                    </View>
                    <View style={{
                        backgroundColor: 'red', alignItems: 'center', marginTop: 10, marginLeft: 10
                        , height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center'
                    }}>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 17, marginTop: 10 }}>Texttured Cotton</Text>
                    <Text style={{ fontSize: 17, marginTop: 10 }}>Skort</Text>
                    <Text style={{ fontSize: 17, marginTop: 10 }}>$19.99</Text>
                </View>
            </View >
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1 }}>
                        <Text>Short By:</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Relevance</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text>aaaaa</Text>
                        <Text>Filter</Text>
                    </View>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}

                />
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,

    },
});