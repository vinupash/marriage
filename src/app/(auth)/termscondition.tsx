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
import Terms from "../../../components/terms";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const TermsCondition = () => {
  const [checked, setChecked] = useState(false);
  const termsData = [
    {
      id: 1,
      title: "Acceptance of Terms",
      description:
        "By accepting or using Clean Place, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
      icon: (
        <Ionicons
          name="document-text-outline"
          size={scale(20)}
          color="#FFFFFF"
        />
      ),
    },
    {
      id: 2,
      title: "User Responsibilities",
      description:
        "You agree to provide accurate information and use the app only for lawful purposes. You are responsible for the activity that occurs under your account.",
      icon: <Feather name="user" size={scale(20)} color="#FFFFFF" />,
    },
    {
      id: 3,
      title: "Reporting & Content",
      description:
        "You agree to provide genuine complaints and accurate information. Do not upload content that is false, misleading, or violates any law.",
      icon: <Feather name="camera" size={scale(20)} color="#FFFFFF" />,
    },
    {
      id: 4,
      title: "Rewards & Points",
      description:
        "Reward points are subject to our reward policy and may be updated or modified at any time without prior notice.",
      icon: <Feather name="gift" size={scale(20)} color="#FFFFFF" />,
    },
    {
      id: 5,
      title: "Privacy",
      description:
        "Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.",
      icon: <Feather name="shield" size={scale(20)} color="#FFFFFF" />,
    },
    {
      id: 6,
      title: "Limitation of Liability",
      description:
        "Clean Place is not liable for any indirect, incidental, or consequential damages arising from the use of the app.",
      icon: <Feather name="stop-circle" size={scale(20)} color="#FFFFFF" />,
    },
    {
      id: 7,
      title: "Changes to Terms",
      description:
        "We may update these Terms & Conditions from time to time. You will be notified of any material changes.",
      icon: (
        <MaterialIcons
          name="published-with-changes"
          size={scale(20)}
          color="#FFFFFF"
        />
      ),
    },
  ];
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
              <Text style={styles.highlight}>Terms & Condition</Text>
              <Text style={styles.title}>
                Please read these terms and conditions carefully before using
                the Clean Place app.
              </Text>
            </View>

            <View>
              {termsData.map((term, index) => (
                <Terms
                  key={term.id}
                  title={term.title}
                  description={term.description}
                  icon={term.icon}
                  isLast={index === termsData.length - 1}
                />
              ))}
            </View>

            <CustomButton
              title="Sign Up"
              // style={styles.footerButton}
              styleGradient={{ borderRadius: verticalScale(10) }}
              onPress={() => router.back()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TermsCondition;

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
});
