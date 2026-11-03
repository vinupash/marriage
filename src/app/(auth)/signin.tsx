import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

import { images } from "../../../constants/images";
import CustomButton from "../../../components/custombutton";
import CustomInput from "../../../components/custominput";
import { CommonStyles } from "../../../constants/theme";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "top"]}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
          keyboardDismissMode="on-drag"
        >
          <View style={styles.imageContainer}>
            <ImageBackground
              source={images.SigninBG}
              resizeMode="cover"
              style={styles.background}
            />
          </View>

          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.highlight}>
                पुन्हा स्वागत आहे! (Welcome Back!)
              </Text>
              <Text style={styles.title}>
                तुमच्या आयुष्याच्या सुंदर सहप्रवासासाठी योग्य जीवनसाथी शोधण्याचा
                प्रवास सुरू ठेवा.
              </Text>
            </View>

            <CustomInput
              title="Mobile No.1 (मोबाइल नंबर १)"
              type="text"
              placeholder="Mobile No.1 (मोबाइल नंबर १)"
              keyboardType="number-pad"
            />

            {/*<CustomInput
              title="Password"
              type="password"
              placeholder="Enter Password"
            />*/}

            {/*<TouchableOpacity
              style={styles.forgotPassword}
              activeOpacity={0.8}
              onPress={() => router.push("/(auth)/forgotpassword")}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>*/}

            <CustomButton
              title="Log In"
              // style={styles.footerButton}
              styleGradient={{ borderRadius: verticalScale(10) }}
              onPress={() => router.push("/verifyotp")}
            />

            <TouchableOpacity
              style={styles.dontHaveAccount}
              activeOpacity={0.8}
              onPress={() => router.push("/(auth)/registration")}
            >
              <Text style={styles.dontHaveAccountText}>
                New to Runanubandh?{" "}
                <Text
                  style={{
                    color: "#e63157",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Create an Account
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.container,
    width: "100%",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: verticalScale(30),
  },
  imageContainer: {
    width: "100%",
    height: verticalScale(250),
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flexDirection: "column",
    gap: verticalScale(20),
    backgroundColor: "#FFFFFF",
    paddingHorizontal: verticalScale(20),
  },
  textContainer: {
    flexDirection: "column",
    gap: verticalScale(5),
  },
  title: {
    fontSize: verticalScale(12),
    lineHeight: verticalScale(18),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
  },
  highlight: {
    ...CommonStyles.sectionTitle,
  },
  forgotPassword: {
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontSize: verticalScale(12),
    fontFamily: "Poppins-SemiBold",
    color: "#e63157",
  },
  dontHaveAccount: {
    alignItems: "center",
  },
  dontHaveAccountText: {
    fontSize: verticalScale(14),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
    textAlign: "center",
  },
});
