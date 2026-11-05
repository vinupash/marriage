import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

interface EditButtonProps {
  title: string;
  style?: ViewStyle;
  styleGradient: ViewStyle;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean | undefined;
}
const EditButton = ({
  style,
  styleGradient,
  title,
  onPress,
  loading = false,
  disabled = false,
}: EditButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <LinearGradient
        colors={["#e63157", "#e9496c", "#eb607e"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[styles.gradient, styleGradient]}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" size="small" />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default EditButton;

const styles = StyleSheet.create({
  button: {
    width: verticalScale(150),
    justifyContent: "center",
    alignItems: "center",

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
  },
  gradient: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: verticalScale(16),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    color: "#FFFFFF",
    fontSize: verticalScale(12),
    fontFamily: "Poppins-SemiBold",
  },
});
