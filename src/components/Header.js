import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import Search from "./Search";
import Location from "./Location";
import AppBar from "./AppBar";
import Constants from "expo-constants";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover"
          }}
          source={{
            uri:
              this.props.url ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCS6IGm5CioghN9QkA7wFavcWG58uDZwLAGilU8Gj31ch7aTI&s"
          }}
        />
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            paddingTop: Constants.statusBarHeight,
            height: "100%"
          }}
        >
          <View style={{ height: "40%" }}>
            <AppBar />
          </View>
          <View style={{ height: "40%", justifyContent:"center" }}>
            <Search />
          </View>
          <View style={{ height: "20%" }}>
            <Location />
          </View>
        </View>
      </View>
    );
  }
}
