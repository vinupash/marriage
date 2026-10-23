import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import Header from "../../../components/header";
import BackIcon from "../../../components/backicon";
import ScreenNavbar from "../../../components/screennavbar";

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
  backIcon: {
    // top: verticalScale(40),
    // left: verticalScale(20),
    // zIndex: 1,
  },
});
