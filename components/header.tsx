import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
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
import { Feather } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { images } from "../constants/images";

const Header = () => {
  return (
    <View style={styles.homeHeaderWrapper}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: verticalScale(8),
        }}
      >
        {/*<View style={styles.profileName}>
          <Text style={styles.profileNameText}>V</Text>
        </View>*/}
        <Image source={images.ProfileImage} style={styles.profileImage} />
        <View style={styles.profileNameWrapper}>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: verticalScale(10),
              color: "#e63157",
            }}
          >
            नमस्ते!
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: verticalScale(14),
            }}
          >
            John Doe
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.notificationWrapper}
        // onPress={() => router.push("/notification/notification")}
      >
        <FontAwesome5 name="power-off" size={14} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  homeHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(15),
    paddingVertical: scale(8),
    backgroundColor: "#ffffff",
    // borderWidth: 1,
  },

  profileImage: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },

  profileName: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: "#e63157",
    alignItems: "center",
    justifyContent: "center",
  },

  profileNameText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: verticalScale(14),
    lineHeight: verticalScale(18),
    color: "#ffffff",
  },

  notificationWrapper: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e63157",
  },

  profileNameWrapper: {
    flexDirection: "column",
    gap: scale(0),
  },
});
