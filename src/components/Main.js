import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colors } from "../utils/colors.js";
import { Ionicons } from "@expo/vector-icons";
import { View, Dimensions, StyleSheet, FlatList, Text } from "react-native";
import data from "../data/main.js";
import CategoryRow from "./CategoryRow.js";
import Slider from "./Slider.js";

export default class Main extends Component {
  _normalize(size) {
    const DEVICE_SCALE = Dimensions.get("window").width / 375;
    return Math.round(DEVICE_SCALE * size);
  }
  render() {
    const { height, width } = Dimensions.get("window");
    return (
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View style={{ height: height * 0.3 }}>
              <Slider />
            </View>
          );
        }}
        data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
        renderItem={() => {
          return (
            <View style={{ height: height * 0.4, marginVertical:8 }}>
              <CategoryRow />
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  customSlide: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  customImage: {
    width: "100%",
    height: "100%"
  }
});

Main.PropTypes = {
  address: PropTypes.string,
  onLocation: PropTypes.func
};
