import { useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";

export default function Index() {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(40);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    translateY.value = withSpring(0);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground
          source={images.WelcomeBG}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <View style={styles.contentWrapper}>
            
          </View>
          {/*<Animated.View style={[styles.content, animatedStyle]}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>Let's get started.</Text>
          </Animated.View>*/}
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: scale(20),
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
});

{
  /*<View style={styles.container}>
  <Text
    style={{
      fontFamily: "Poppins-Regular",
      fontSize: scale(20),
      lineHeight: scale(26),
    }}
  >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
    necessitatibus minus aliquam sunt commodi quidem, distinctio cumque
    dolorum laudantium sit cum provident eum delectus inventore velit fugit
    totam quaerat sequi?
  </Text>
</View>*/
}
