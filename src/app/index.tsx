import { useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

import { images } from "../../constants/images";
import CustomButton from "../../components/custombutton";

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
            <View style={styles.contentWrapperContent}>
              <View
                style={{
                  width: scale(100),
                  height: scale(100),
                  borderWidth: 1,
                  marginTop: verticalScale(90),
                }}
              ></View>
              <View>
                <Text style={styles.contentWrapperTitle}>
                  तुमच्या उज्ज्वल उद्यासाठी योग्य जीवनसाथी शोधा
                </Text>
              </View>
            </View>
            <CustomButton
              style={styles.footerButton}
              styleGradient={{ borderRadius: scale(8) }}
              title="Get Started"
              onPress={() => router.replace}
              loading={false}
            ></CustomButton>
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
    paddingHorizontal: scale(20),
  },
  contentWrapperContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: scale(30),
  },
  contentWrapperTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: scale(20),
    lineHeight: scale(30),
    textAlign: "center",
  },
  footerButton: { marginBottom: scale(90) },
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
