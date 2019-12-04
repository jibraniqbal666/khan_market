import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import ProductItem from "./src/components/ProductItem";
import Search from "./src/components/Search";
import Location from "./src/components/Location";
import AppBar from "./src/components/AppBar";
import Header from "./src/components/Header";
import Slider from "./src/components/Slider";
import CategoryRow from "./src/components/CategoryRow";
import Main from "./src/components/Main";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: "30%" }}>
          <Header />
        </View>
        <View style={{ height: "70%" }}>
          <Main />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee"
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
