import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colors } from "../utils/colors.js";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, Dimensions } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import ProductItem from "./ProductItem.js";

export default class CategoryRow extends Component {
  _normalize(size) {
    const DEVICE_SCALE = Dimensions.get("window").width / 375;
    return Math.round(DEVICE_SCALE * size);
  }
  render() {
    const { height, width } = Dimensions.get("window");
    return (
      <View
        style={{
          width: "100%",
          height: 400
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 16, paddingVertical:8 }}>
          <View style={{ width: "80%" }}>
            <Text style={{ fontSize: this._normalize(24) }}>Vegetable</Text>
          </View>
          <View style={{ width: "20%" }}>
            <TouchableOpacity onPress={this.props.onLocation}>
              <Text style={{ fontSize: this._normalize(20) }}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            horizontal
            data={[{ key: 1 }, { key: 2 }, { key: 3 }]}
            renderItem={() => (
              <View
                style={{ height: height * 0.35, width: width * 0.8, marginLeft: 16 }}
              >
                <ProductItem />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

CategoryRow.PropTypes = {
  address: PropTypes.string,
  onLocation: PropTypes.func
};
