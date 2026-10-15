import {
  View,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";

interface BackButtonProps {
  style: ViewStyle;
  onPress: (e: GestureResponderEvent) => void;
}

const BackIcon = ({ onPress, style }: BackButtonProps) => {
  return (
    <View style={[styles.backIconShadow, style]}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.backIcon}
        // onPress={() => router.back()}
        onPress={onPress}
      >
        <Feather name="arrow-left" size={scale(20)} color="#e63157" />
      </TouchableOpacity>
    </View>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  backIconShadow: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),

    // Android shadow
    elevation: 5,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: verticalScale(3),
    },
    shadowOpacity: 0.2,
    shadowRadius: scale(4),
  },

  backIcon: {
    width: "100%",
    height: "100%",
    borderRadius: scale(20),
    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",
  },
});
