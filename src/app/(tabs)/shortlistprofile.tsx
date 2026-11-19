import { useCallback, useMemo, useRef, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";

import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import BottomSheet from "@gorhom/bottom-sheet";

import { useTourGuide } from "@wrack/react-native-tour-guide";

import Header from "../../../components/header";
import { Colors } from "../../../constants/theme";

const ShortlistProfile = () => {
  // Bottom sheet
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["88%"], []);

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Open filter sheet
  const handleOpenFilter = useCallback(() => {
    // Hide button immediately
    setIsSheetOpen(true);

    sheetRef.current?.snapToIndex(0);
  }, []);

  // Close filter sheet
  const handleCloseFilter = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const { startTour } = useTourGuide();
  const buttonRef = useRef(null);
  const avatarRef = useRef(null);

  const handleStart = () => {
    startTour([
      {
        id: "welcome",
        targetRef: buttonRef,
        title: "Welcome",
        description: "Tap here to get started.",
        targetStyle: styles.button,
      },
      {
        id: "avatar",
        targetRef: avatarRef,
        targetRegion: {
          // x: scale(288),
          // y: 748,
          // y: scale(635.5),
          x: Platform.OS === "ios" ? scale(285.8) : scale(288),
          y: Platform.OS === "ios" ? scale(637.9) : scale(635.5),
          width: verticalScale(40),
          height: verticalScale(40),
        },
        title: "Filter Profiles",
        description: "Tap here to filter profiles based on your preferences.",
        targetStyle: styles.avatar,
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Header />

      {/* Filter Bottom Sheet */}
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        enableDynamicSizing={false}
        onChange={(index) => {
          setIsSheetOpen(index >= 0);
        }}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.sheetIndicator}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Filter Profiles</Text>

          {/* Close button */}
          <TouchableOpacity
            onPress={handleCloseFilter}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <View>
        <Pressable ref={buttonRef} style={styles.button} onPress={handleStart}>
          <Text>Start Tour</Text>
        </Pressable>

        {/*<View ref={avatarRef} style={styles.avatar} />*/}
      </View>

      {/* Floating Filter Button */}
      {!isSheetOpen && (
        <Pressable
          ref={avatarRef}
          onPress={handleOpenFilter}
          style={styles.avatar}
        ></Pressable>
      )}
      {/*<Pressable
        ref={avatarRef}
        onPress={handleOpenFilter}
        style={styles.avatar}
      ></Pressable>*/}
    </SafeAreaView>
  );
};

export default ShortlistProfile;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  sheetBackground: {
    backgroundColor: "#fef7f9",
  },

  sheetIndicator: {
    backgroundColor: Colors.primary,
    width: 45,
  },

  sheetContent: {
    padding: scale(20),
  },

  sheetTitle: {
    fontSize: scale(20),
    fontWeight: "700",
    color: "#222222",
  },

  filterButton: {
    width: verticalScale(40),
    height: verticalScale(40),
    backgroundColor: "red",
    position: "absolute",
    bottom: verticalScale(20),
    right: verticalScale(20),
    zIndex: 10,
    elevation: 10,
    borderRadius: verticalScale(20),
  },

  closeButton: {
    marginTop: verticalScale(20),
    padding: scale(12),
    backgroundColor: Colors.primary,
    borderRadius: scale(8),
    alignSelf: "flex-start",
  },

  closeButtonText: {
    color: "#FFFFFF",
    fontSize: scale(13),
    fontWeight: "600",
  },

  button: { borderRadius: 12, padding: 16, backgroundColor: "#007AFF" },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#ccc",
    position: "absolute",
    bottom: scale(20),
    right: scale(20),
  },
});
