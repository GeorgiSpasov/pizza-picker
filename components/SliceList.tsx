import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { parallaxLayout } from "../helpers/parallax";
import { SliceSide } from "@/types/global";
import { Pizza } from "@/models/Pizza";
import SliceItem from "./SliceItem";

const { height, width } = Dimensions.get("window");

const PAGE_WIDTH = width / 3;
const PAGE_HEIGHT = height / 3;

interface Props {
  pizzas: Pizza[];
  side: SliceSide;
  onSliceSelect: (pizza: Pizza) => void;
}

const SliceList: React.FC<Props> = ({ pizzas, side, onSliceSelect }) => {
  return (
    <View
      style={[
        styles.container,
        { alignItems: side === "left" ? "flex-end" : "flex-start" },
      ]}
    >
      <Carousel
        loop={true}
        vertical
        style={{
          flex: 1,
          width: PAGE_WIDTH,
          justifyContent: "center",
          borderLeftWidth: side === "right" ? 2 : 0,
          borderRightWidth: side === "left" ? 2 : 0,
          borderColor: "white",
        }}
        height={PAGE_HEIGHT}
        onSnapToItem={(i) => onSliceSelect(pizzas[i])}
        data={pizzas}
        renderItem={({ item, animationValue }) => {
          return (
            <SliceItem
              key={item.id}
              pizza={item}
              side={side}
              animationValue={animationValue}
            />
          );
        }}
        customAnimation={parallaxLayout(
          {
            size: PAGE_HEIGHT,
            vertical: true,
          },
          {
            parallaxScrollingScale: 1,
            parallaxAdjacentItemScale: 0.6,
            parallaxScrollingOffset: 26,
          },
          side
        )}
        scrollAnimationDuration={800}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 1.5,
  },
  sliceListWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(SliceList);
