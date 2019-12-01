import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import ProductItem from "./src/components/ProductItem";
import Search from "./src/components/Search";
import Location from "./src/components/Location";
import AppBar from "./src/components/AppBar";
import Header from "./src/components/Header";



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:"30%"}}>
       <Header/>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
