import {
  ImageBackground,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import Animation, { FadeInDown } from "react-native-reanimated";
import { theme } from "../constants/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.background}
        source={require("../assets/welcome.png")}
        resizeMode="cover"
      />
      <Animation.View
        entering={FadeInDown.duration(600)}
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={[
            "rgba(255, 255, 255,0)",
            "rgba(255, 255, 255, 0.5)",
            "rgba(255, 255, 255, 0.8)",
            "rgba(255, 255, 255, 1)",
          ]}
          style={styles.linearGradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <View style={styles.contentContainer}>
          <Animation.Text
            entering={FadeInDown.duration(400).springify()}
            style={styles.title}
          >
            Pixels
          </Animation.Text>
          <Animation.Text
            entering={FadeInDown.duration(500).springify()}
            style={styles.punchline}
          >
            Every Pixel Tells a Story
          </Animation.Text>
          <Animation.View entering={FadeInDown.duration(600).springify()}>
            <Pressable
              style={styles.button}
              onPress={() => Linking.openURL("https://www.pexels.com/")}
            >
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </Animation.View>
        </View>
      </Animation.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  linearGradient: {
    width: wp(100),
    height: hp(70),
    position: "absolute",
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 20,
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeights.bold,
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.colors.neutral(0.9),
  },
  button: {
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.md,
    marginBottom: 50,
    borderCurve: "continuous",
    backgroundColor: theme.colors.neutral(0.9),
  },

  startText: {
    color: theme.colors.white,
    fontSize: hp(2),
    fontWeight: theme.fontWeights.medium,
    letterSpacing: 1,
  },
});
