import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Pizza } from "@/models/Pizza";
import { SliceSide } from "@/types/global";

const OpacityView = Animated.createAnimatedComponent(View);

interface Props {
  pizza: Pizza;
  side: SliceSide;
  animationValue: SharedValue<number>;
}

const SliceItem: React.FC<Props> = ({ pizza, side, animationValue }) => {
  const maskStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animationValue.value, [-1, 0, 1], [0, 1, 0]);

    return {
      opacity,
    };
  }, [animationValue]);

  return (
    <View>
      <OpacityView
        style={[
          styles.textWrapper,
          {
            left: side === "left" ? 0 : "auto",
            right: side === "right" ? 0 : "auto",
            alignItems: side === "left" ? "flex-start" : "flex-end",
          },
          maskStyle,
        ]}
      >
        <Text style={{ textAlign: side, fontSize: 16 }}>{pizza.name}</Text>
        <Text style={{ textAlign: side, fontSize: 16 }}>{pizza.price}</Text>
      </OpacityView>
      <Image
        source={pizza.imgSrc[side]}
        resizeMode={"contain"}
        style={styles.pizzaImg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    position: "absolute",
    top: -20,
  },
  pizzaImg: {
    maxWidth: "100%",
    height: "100%",
  },
});

export default SliceItem;
