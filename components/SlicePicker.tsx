import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import SliceList from "./SliceList";
import { pizzas } from "@/mocks/pizzas";
import { useEffect, useRef, useState } from "react";
import { Pizza } from "@/models/Pizza";
import { useCountUp } from "use-count-up";

const { width } = Dimensions.get("window");

const SlicePicker: React.FC = () => {
  const [leftSlice, setLeftSlice] = useState<Pizza>(pizzas[0]);
  const [rightSlice, setRightSlice] = useState<Pizza>(pizzas[0]);
  const previousSumRef = useRef(0);

  const { value, reset } = useCountUp({
    isCounting: true,
    decimalPlaces: 2,
    start: previousSumRef.current,
    end: leftSlice.price + rightSlice.price,
    duration: 1,
  });

  useEffect(() => {
    reset();
    setTimeout(() => {
      previousSumRef.current = leftSlice.price + rightSlice.price;
    }, 1100);
  }, [leftSlice, rightSlice]);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
          style={styles.gradientTop}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        />
        <View style={styles.sliceListWrapper}>
          <SliceList pizzas={pizzas} side="left" onSliceSelect={setLeftSlice} />
          <SliceList
            pizzas={pizzas}
            side="right"
            onSliceSelect={setRightSlice}
          />
        </View>
        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
          style={styles.gradientBottom}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      </View>
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.btnLabel}>{`Добави за ${value}`}</Text>
      </Pressable>
    </View>
  );
};

const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: BORDER_RADIUS,
    marginHorizontal: width / 16,
  },
  sliceListWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gradientTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  gradientBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 1,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  button: {
    minWidth: "90%",
    backgroundColor: "#079c2e",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 12,
  },
  btnLabel: {
    color: "white",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});

export default SlicePicker;
