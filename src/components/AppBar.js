import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colors } from "../utils/colors.js";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class AppBar extends Component {
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
          backgroundColor: "semi-transparent",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "5%",
          paddingVertical: "1%"
        }}
      >
        <View
          style={{
            width: "10%",
            paddingHorizontal: "2%"
          }}
        >
          <TouchableOpacity onPress={this.props.onDrawer}>
            <Ionicons
              name="md-menu"
              size={height / 18}
              color={Colors.primaryText}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            paddingHorizontal: "3%"
          }}
        >
          <Text
            style={{
              fontSize: this._normalize(24),
              color: Colors.primaryText
            }}
          >
            {`${this.props.title || "KHAN MARKET"}`}
          </Text>
        </View>
      </View>
    );
  }
}

AppBar.PropTypes = {
  title: PropTypes.string,
  onDrawer: PropTypes.func,
};
