import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colors } from "../utils/colors.js";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Location extends Component {
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
          height: "100%",
          backgroundColor: "semi-transparent",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "5%",
          backgroundColor: "rgba(255,255,255,0.3)"
        }}
      >
        <View
          style={{
            width: "10%",
            paddingHorizontal: "2%"
          }}
        >
          <TouchableOpacity onPress={this.props.onLocation}>
            <Ionicons
              // a hack to align icon veritcally, fault in ionicons
              style={{ height: height / 24 - 1 }}
              name="md-pin"
              size={height / 26}
              color={Colors.primaryText}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            height: "100%",
            paddingHorizontal: "1%",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: this._normalize(20),
              color: Colors.primaryText
            }}
          >
            {`${this.props.address || "Hemisphere black 32"}`}
          </Text>
        </View>
      </View>
    );
  }
}

Location.PropTypes = {
  address: PropTypes.string,
  onLocation: PropTypes.func
};
