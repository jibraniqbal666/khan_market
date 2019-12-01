import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colors } from "../utils/colors.js";
import { Ionicons } from "@expo/vector-icons";
import { Platform, Text, View, TextInput, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Search extends Component {
  _normalize(size) {
    const DEVICE_SCALE = Dimensions.get("window").width / 375;
    return Math.round(DEVICE_SCALE * size);
  }
  render() {
    const { height } = Dimensions.get("window");
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: "5%"
        }}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: Colors.secondaryBackground,
            flexDirection: "row",
            borderRadius: 24,
            opacity: 0.8
          }}
        >
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Ionicons
              // a hack to align icon veritcally, fault in ionicons
              style={{ height: height / 24 - 1 }}
              name="md-search"
              size={height / 24}
              color={Colors.grey}
            />
          </View>
          <TextInput
            style={{
              color: Colors.grey,
              ...Platform.select({
                ios: {
                  paddingVertical: 16
                },
                android: {}
              })
            }}
            onChangeText={this.props.onSearch}
            placeholder={`Search in ${this.props.title || "Khan Market"}...`}
          />
        </View>
        <View
          style={{
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "2%"
          }}
        >
          <TouchableOpacity onPress={this.props.onFav || null}>
            <Ionicons
              name="md-cog"
              size={height / 24}
              color={Colors.primaryText}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Search.PropTypes = {
  title: PropTypes.string,
  onFav: PropTypes.func,
  onSearch: PropTypes.func
};
