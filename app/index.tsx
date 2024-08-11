import { ImageBackground, StyleSheet, View } from "react-native";
import backgroundImg from "../assets/images/bg_pizzanbbq_mobile.png";
import SlicePicker from "@/components/SlicePicker";

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="repeat"
        style={styles.backgroundImg}
      >
        <SlicePicker />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImg: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
