import { useEffect, useState } from "react";
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

const SignUp = () => {
  const [checked, setChecked] = useState(false);
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
              <Text style={styles.highlight}>Create an Account</Text>
              <Text style={styles.title}>
                Join us in keeping our city clean
              </Text>
            </View>

            {/*<AuthTitle
              title="Create an Account"
              subtitle="Join us in keeping our city clean"
              emailAddress={null}
            />*/}

            <CustomInput
              title="First Name"
              type="text"
              placeholder="Enter First Name"
              keyboardType="email-address"
            />

            <CustomInput
              title="Last Name"
              type="text"
              placeholder="Enter Last Name"
              keyboardType="email-address"
            />

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

            <CustomInput
              title="Confirm Password"
              type="password"
              placeholder="Enter Confirm Password"
            />

            <TouchableOpacity
              style={styles.checkBoxContainer}
              activeOpacity={0.8}
              onPress={() => setChecked(!checked)}
            >
              <View style={[styles.checkbox, checked && styles.checked]}>
                {checked && <Text style={styles.checkmark}>✓</Text>}
              </View>

              <Text style={styles.label}>
                I agree to the{" "}
                <Text
                  style={styles.termsLink}
                  onPress={() => router.push("/termscondition")}
                >
                  Terms & Conditions
                </Text>
              </Text>
            </TouchableOpacity>

            <CustomButton
              title="Sign Up"
              // style={styles.footerButton}
              styleGradient={{ borderRadius: verticalScale(10) }}
              onPress={() => router.push("/(tabs)/home")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

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
    lineHeight: verticalScale(20),
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
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
  },
  checkbox: {
    width: scale(20),
    height: scale(20),
    borderWidth: 1.5,
    borderColor: "#BDBDBD",
    borderRadius: scale(4),
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#e63157",
    borderColor: "#e63157",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: scale(14),
    fontWeight: "bold",
  },
  label: {
    fontSize: scale(12),
    color: "#1A1A1A",
  },
  termsLink: {
    color: "#e63157",
    fontFamily: "Poppins-SemiBold",
  },
});
