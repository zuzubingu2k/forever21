import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView, StatusBar, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ImageBackground, TouchableOpacity } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container} >
                <StatusBar barStyle={'light-content'}></StatusBar>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss} >
                        <View style={styles.container}>
                            <View style={styles.LogoContainer}>
                                <Image style={styles.logo}
                                    source={require('../Images/logo.png')}>
                                </Image>
                                <Text style={styles.title}>Thương Hiệu Việt</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    textAlign='center'
                                    placeholder="Enter username/email"
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.fo}
                                >
                                </TextInput>
                                <TextInput style={styles.input}
                                    placeholder="Enter password"
                                    textAlign='center'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                >

                                </TextInput>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'column',

    },
    LogoContainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 200,
        height: 60,

    },
    title: {
        fontStyle: 'italic',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.5,//lam mo chu
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 250,
        padding: 20,

    },
    input: {
        height: 40,
        backgroundColor: 'red',
        alignItems: 'center',
        opacity: 0.3,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonContainer: {
        backgroundColor: '#446384',
        paddingVertical: 15,
        height: 50,
    },
})