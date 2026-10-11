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

// interface CustomButtonProps {
//   title: string;
//   style?: ViewStyle;
//   styleGradient: ViewStyle;
//   onPress: (event: GestureResponderEvent) => void;
//   loading?: boolean;
//   disabled?: boolean | undefined;
// }
// const CustomButton = ({
//   style,
//   styleGradient,
//   title,
//   onPress,
//   loading = false,
//   disabled = false,
// }: CustomButtonProps) => {
//   return (
//     <TouchableOpacity
//       style={[styles.button, style]}
//       activeOpacity={0.9}
//       onPress={onPress}
//       disabled={disabled || loading}
//     >
//       <LinearGradient
//         colors={["#0B6B2A", "#1E8E3E", "#34C759"]}
//         start={{ x: 0, y: 0.5 }}
//         end={{ x: 1, y: 0.5 }}
//         style={[styles.gradient, styleGradient]}
//       >
//         {loading ? (
//           <ActivityIndicator color={"#FFFFFF"} size={"small"} />
//         ) : (
//           <Text style={styles.title}>{title}</Text>
//         )}
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// };
//
// export default CustomButton;

interface CustomButtonProps {
  title: string;
  style?: ViewStyle;
  styleGradient: ViewStyle;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean | undefined;
}
export default function CustomButton({
  style,
  styleGradient,
  title,
  onPress,
  loading = false,
  disabled = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <LinearGradient
        colors={["#0B6B2A", "#1E8E3E", "#34C759"]}
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
}

const styles = StyleSheet.create({
  button: {
    height: verticalScale(45),
    width: "100%",
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  title: {
    color: "#FFFFFF",
    fontSize: scale(14),
    fontFamily: "Poppins-SemiBold",
  },
});
