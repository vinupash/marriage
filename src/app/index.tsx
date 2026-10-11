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
              <Animated.View style={[styles.content, animatedStyle]}>
                <View
                  style={{
                    width: scale(100),
                    height: scale(100),
                    borderWidth: 1,
                    marginTop: verticalScale(60),
                  }}
                />
              </Animated.View>
              <Animated.View style={[styles.content, animatedStyle]}>
                <Text style={styles.contentWrapperTitle}>
                  तुमच्या आयुष्याचा नवा सोबती
                </Text>
                <Text style={styles.contentWrapperSubTitle}>
                  मराठी समाजातील योग्य स्थळे शोधा आणि तुमच्या नव्या प्रवासाला
                  सुरुवात करा.
                </Text>
              </Animated.View>
            </View>
            <Animated.View style={[styles.content, animatedStyle]}>
              <CustomButton
                style={styles.footerButton}
                styleGradient={{ borderRadius: scale(8) }}
                title="Get Started"
                onPress={() => router.replace("/signin")}
                loading={false}
              />
            </Animated.View>
          </View>
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
    fontFamily: "Poppins-Bold",
    fontSize: scale(20),
    // lineHeight: verticalScale(22),
    textAlign: "center",
    marginBottom: verticalScale(10),
    color: "#1A1A1A",
  },
  contentWrapperSubTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: scale(14),
    lineHeight: scale(24),
    textAlign: "center",
    color: "#1A1A1A",
  },
  footerButton: { marginBottom: scale(60) },
  content: {
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
});
