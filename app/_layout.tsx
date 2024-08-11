import BurrataLogo from "@/assets/BurrataLogo";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: (_props) => (
            <View style={styles.header}>
              <BurrataLogo />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    minHeight: 40,
  },
});
