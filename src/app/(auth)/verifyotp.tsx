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
  Image,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

import CustomButton from "../../../components/custombutton";
import OTPInput from "../../../components/otpinput";
import BackIcon from "../../../components/backicon";
import { images } from "../../../constants/images";

const verifyOTP = () => {
  const [timeLeft, setTimeLeft] = useState<number>(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };
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
            <BackIcon style={styles.backIcon} onPress={() => router.back()} />
            <ImageBackground
              source={images.SigninBG}
              resizeMode="cover"
              style={styles.background}
            />
          </View>

          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.highlight}>
                OTP सत्यापित करा (Verify OTP)
              </Text>
              <Text style={styles.title}>
                तुमच्या नोंदणीकृत ईमेलवर पाठवलेला 6 अंकी OTP टाका.
              </Text>
            </View>

            <OTPInput
              onChange={(value) => {
                // setOtp(value);
                console.log("Entered OTP:", value);
              }}
            />

            <View style={styles.dontReceivedWrapper}>
              <Text style={styles.dontReceivedText}>Don't receive OTP?</Text>

              <View style={styles.resendWrapper}>
                <TouchableOpacity
                  disabled={timeLeft > 0}
                  activeOpacity={0.8}
                  onPress={() => {
                    console.log("Resend OTP");

                    // Call resend OTP API here

                    setTimeLeft(180);
                  }}
                >
                  <Text
                    style={[
                      styles.resendText,
                      timeLeft > 0 && styles.resendDisabled,
                    ]}
                  >
                    Resend
                  </Text>
                </TouchableOpacity>

                <Text style={styles.resendTimer}>({formatTime(timeLeft)})</Text>
              </View>
            </View>

            <CustomButton
              title="Verify OTP"
              // style={styles.footerButton}
              styleGradient={{ borderRadius: verticalScale(10) }}
              onPress={() => router.push("/newpassword")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default verifyOTP;

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
    position: "relative",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backIcon: {
    position: "absolute",
    top: verticalScale(40),
    left: verticalScale(20),
    zIndex: 1,
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
    fontSize: verticalScale(16),
    lineHeight: verticalScale(22),
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
  dontReceivedWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(5),
  },
  dontReceivedText: {
    fontSize: scale(12),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
  },
  resendWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(3),
  },
  resendText: {
    fontSize: scale(12),
    fontFamily: "Poppins-SemiBold",
    color: "#1E8E3E",
  },
  resendDisabled: {
    color: "#e63157",
  },
  resendTimer: {
    fontSize: scale(12),
    fontFamily: "Poppins-Regular",
    color: "#666666",
  },
});
