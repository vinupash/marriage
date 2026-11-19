import React, { useMemo, useRef, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function CustomBottomSheet() {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["45%", "80%"], []);

  const openSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  const closeSheet = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openSheet}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={styles.sheet}
        handleIndicatorStyle={styles.indicator}
      >
        <BottomSheetView style={styles.content}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.description}>
            This is your custom bottom sheet popup.
          </Text>

          <TouchableOpacity style={styles.closeButton} onPress={closeSheet}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1E8E3E",
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  indicator: {
    backgroundColor: "#B8BEC5",
    width: 45,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  description: {
    marginTop: 10,
    color: "#777",
  },
  closeButton: {
    marginTop: 25,
    backgroundColor: "#1E8E3E",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
