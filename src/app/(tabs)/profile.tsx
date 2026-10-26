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

import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Header from "../../../components/header";
import BackIcon from "../../../components/backicon";
import ScreenNavbar from "../../../components/screennavbar";
import CustomInput from "../../../components/custominput";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/*<Header />*/}
      <ScreenNavbar
        screenTitle={"My Profile"}
        screenSubTitle={
          "View and manage your personal and matrimonial details."
        }
        onPress={() => router.back()}
      />
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
          <View style={styles.content}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: verticalScale(10),
              }}
            >
              <View
                style={{
                  width: verticalScale(140),
                  height: verticalScale(140),
                  borderWidth: 1,
                }}
              ></View>
              <TouchableOpacity
                style={{
                  width: scale(40),
                  height: scale(40),
                  borderRadius: scale(20),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#e63157",

                  // ios
                  shadowColor: "#000000",
                  shadowOffset: {
                    width: 0,
                    height: scale(5),
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: scale(4),

                  // android
                  elevation: 5,
                }}
              >
                <FontAwesome name="camera" size={scale(15)} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <CustomInput
              title="First Name"
              type="text"
              placeholder="Enter First Name"
              keyboardType="email-address"
            />
            <CustomInput
              title="Father Name"
              type="text"
              placeholder="Enter Father Name"
              keyboardType="email-address"
            />
            <CustomInput
              title="Mother Name"
              type="text"
              placeholder="Enter Mother Name"
              keyboardType="email-address"
            />
            <CustomInput
              title="Last Name"
              type="text"
              placeholder="Enter Last Name"
              keyboardType="email-address"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;

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
    paddingBottom: verticalScale(2),
  },
  content: {
    flexDirection: "column",
    gap: verticalScale(20),
    backgroundColor: "#FFFFFF",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
  },
});
