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

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
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
              <Text style={styles.highlight}>Welcome Back!</Text>
              <Text style={styles.title}>Sign in to continue</Text>
            </View>

            <CustomInput
              title="Email Address"
              type="text"
              placeholder="Enter Email Address"
              keyboardType="email-address"
            />

            <CustomInput
              title="Password"
              type="password"
              placeholder="Enter Password"
            />

            <TouchableOpacity
              style={styles.forgotPassword}
              activeOpacity={0.8}
              // onPress={() => router.push("/(auth)/forgotpassword")}
              onPress={() => router.push}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton
              title="Sign In"
              // style={styles.footerButton}
              styleGradient={{ borderRadius: verticalScale(10) }}
              onPress={() => router.push("/(tabs)/home")}
            />

            <TouchableOpacity
              style={styles.dontHaveAccount}
              activeOpacity={0.8}
              onPress={() => router.push}
            >
              <Text style={styles.dontHaveAccountText}>
                Don't have an account?{" "}
                <Text
                  style={{
                    color: "#e63157",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Sign Up
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
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
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
    marginTop: -verticalScale(10),
    borderTopLeftRadius: verticalScale(15),
    borderTopRightRadius: verticalScale(15),
    backgroundColor: "#FFFFFF",
    padding: verticalScale(20),
  },
  textContainer: {
    flexDirection: "column",
    gap: verticalScale(3),
  },
  title: {
    fontSize: verticalScale(14),
    lineHeight: verticalScale(24),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
  },
  highlight: {
    fontSize: verticalScale(20),
    lineHeight: verticalScale(30),
    fontFamily: "Poppins-SemiBold",
    color: "#e63157",
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
  },
});
