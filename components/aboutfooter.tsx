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
import { scale, verticalScale } from "react-native-size-matters";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const AboutFooter = ({}) => {
  return (
    <View style={styles.aboutFooterWrapper}>
      <View style={styles.aboutContentWrapper}>
        <View style={styles.aboutLine} />
        <Text style={styles.aboutTitle}>आपला समाज, आपली नाती</Text>
        <View style={styles.aboutLine} />
      </View>
      <Text style={styles.footerSubTitle}>सुंदर नात्यांसाठी एकत्र येऊया!</Text>
      <FontAwesome5 name="praying-hands" size={scale(28)} color="#e63157" />
    </View>
  );
};

export default AboutFooter;

const styles = StyleSheet.create({
  aboutFooterWrapper: {
    flexDirection: "column",
    gap: verticalScale(10),
    paddingVertical: verticalScale(20),
    paddingHorizontal: verticalScale(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fce8ed",
    borderRadius: verticalScale(15),
  },
  aboutContentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: verticalScale(10),
  },
  aboutTitle: {
    fontSize: verticalScale(14),
    fontFamily: "Poppins-SemiBold",
    color: "#e63157",
  },
  aboutLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e63157",
  },
  footerSubTitle: {
    fontSize: verticalScale(12),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
    lineHeight: verticalScale(18),
  },
});
