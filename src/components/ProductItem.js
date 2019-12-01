import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colors } from "../utils/colors.js";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Image, Dimensions } from "react-native";
import {
  TouchableOpacity,
  TouchableHighlight
} from "react-native-gesture-handler";

export default class ProductItem extends Component {
  _normalize(size) {
    const DEVICE_SCALE = Dimensions.get("window").width / 375;
    return Math.round(DEVICE_SCALE * size);
  }
  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#F5FCFF",
          borderRadius: 16
        }}
      >
        <View
          style={{
            width: "100%",
            height: "65%",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: "hidden"
          }}
        >
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
              width: height / 14,
              height: height / 14,
              backgroundColor: "white",
              opacity: 0.7,
              borderRadius: height,
              zIndex: 1,
              position: "absolute",
              top: 8,
              right: 8,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={this.props.onFav || null}>
              <Ionicons
                name={this.props.isFav ? "md-heart" : "md-heart-empty"}
                size={height / 24}
                color="red"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ height: "35%", padding: "4%", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: this._normalize(16),
              fontWeight: "400",
              paddingTop: 1,
              color: Colors.blackText
            }}
          >
            {this.props.title || "Rib Eye"}
          </Text>
          <View style={{ flexDirection: "row", paddingTop: 1 }}>
            <Text
              style={{
                fontSize: this._normalize(16),
                color: Colors.disabledText,
                fontWeight: "400",
                color: Colors.blackText
              }}
            >
              {`$${this.props.price || "5.00"} / kg`}
            </Text>
            <Text> . </Text>
            <Text
              style={{
                fontSize: this._normalize(16),
                fontWeight: "400",
                color: Colors.blackText
              }}
            >
              {`$${this.props.dPrice || "3.50"} / kg`}
            </Text>
          </View>
          <Text
            style={{
              fontSize: this._normalize(13),
              paddingTop: 1,
              color: Colors.blackText
            }}
          >
            {`You will save ${this.props.dPercentage || "10"}%`}
          </Text>
          <Text
            style={{
              fontSize: this._normalize(13),
              paddingTop: 1,
              color: Colors.blackText
            }}
          >
            {`Instore Pickup available by ${this.props.date || "XX"} date`}
          </Text>
        </View>
      </View>
    );
  }
}

ProductItem.PropTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  dPrice: PropTypes.number,
  dPercentage: PropTypes.number,
  date: PropTypes.string,
  isFav: PropTypes.bool,
  onFav: PropTypes.func
};
