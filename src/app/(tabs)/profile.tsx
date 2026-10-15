import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import Header from "../../../components/header";
import BackIcon from "../../../components/backicon";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/*<Header />*/}
      <BackIcon style={styles.backIcon} onPress={() => router.back()} />
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
