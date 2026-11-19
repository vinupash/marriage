import React, { forwardRef } from "react";
import { TouchableOpacity, GestureResponderEvent } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { scale } from "react-native-size-matters";

interface FilterButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const FilterButton = forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  FilterButtonProps
>(({ onPress }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: scale(40),
        right: scale(20),
        zIndex: 10,
        elevation: 10,
      }}
    >
      <LinearGradient
        colors={["#e63157", "#e9496c", "#eb607e"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{
          width: scale(50),
          height: scale(50),
          borderRadius: scale(25),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="filter-sharp" size={scale(20)} color="#ffffff" />
      </LinearGradient>
    </TouchableOpacity>
  );
});

FilterButton.displayName = "FilterButton";

export default FilterButton;
