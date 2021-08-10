import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Công Cốcc</Text>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black'
  }
})
