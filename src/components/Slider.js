import React, { Component } from "react";
import PropTypes from "prop-types";
import { Colors } from "../utils/colors.js";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageSlider from "react-native-image-slider";

export default class Slider extends Component {
  _normalize(size) {
    const DEVICE_SCALE = Dimensions.get("window").width / 375;
    return Math.round(DEVICE_SCALE * size);
  }
  render() {
    const images = [
      "https://picsum.photos/800/300",
      "https://picsum.photos/800/300",
      "https://picsum.photos/800/300",
      "https://picsum.photos/800/300"
    ];

    return (
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={3000}
        images={images}
        customSlide={({ index, item, style, width }) => (
          // It's important to put style here because it's got offset inside
          <View key={index} style={[style, styles.customSlide]}>
            <Image source={{ uri: item }} style={styles.customImage} />
            <View
              style={{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "rgba(0,0,0,0.3)",
                width: "100%",
                height: "45%",
                padding: "3%"
              }}
            >
              <Text
                style={{
                  color: Colors.primaryText,
                  fontSize: this._normalize(18)
                }}
                numberOfLines={1}
              >{`Fresh broccoli from the gardens of colombia`}</Text>
              <View style={{ flexDirection: "row", paddingVertical:"1%" }}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: Colors.primaryText,
                    fontSize: this._normalize(18),
                    width:"80%",
                  }}
                >{`2 packs for $2.20 (save $1.30)`}</Text>
                <View
                  style={{
                    width: "20%",
                    height: "75%",
                    backgroundColor: Colors.primaryText,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius:8
                  }}
                >
                  <Text
                    style={{
                      color: Colors.blackText,
                      fontSize: this._normalize(20)
                    }}
                  >
                    Buy
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
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

Slider.PropTypes = {
  address: PropTypes.string,
  onLocation: PropTypes.func
};
