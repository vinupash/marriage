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
import BackIcon from "../../../components/backicon";
import { termsData } from "../../../mocks/terms_data";

const TermsCondition = () => {
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
                अटी व शर्ती (Terms & Conditions)
              </Text>
              <Text style={styles.title}>
                सुतार समाज विवाह मंच या ॲपमध्ये आपले स्वागत आहे. या ॲपचा वापर
                करण्यापूर्वी कृपया खालील अटी व शर्ती काळजीपूर्वक वाचा. या ॲपचा
                वापर करून किंवा खाते तयार करून आपण या अटींशी सहमत असल्याचे मान्य
                करता.
              </Text>
            </View>

            <View>
              {termsData.map((term, index) => (
                <Terms
                  key={term.id}
                  title={term.title}
                  descriptions={term.terms.map((item) => item.terms_1)}
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
});
