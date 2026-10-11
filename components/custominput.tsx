import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";

interface CustomInputProps {
  title: string;
  placeholder: string;
  type?: "text" | "password";
  keyboardType?: KeyboardTypeOptions;
}

const CustomInput = ({
  title,
  placeholder,
  type = "text",
  keyboardType = "default",
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor="#999999"
          keyboardType={keyboardType}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.showButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Feather
                name="eye-off"
                size={verticalScale(20)}
                color="#e63157"
              />
            ) : (
              <Feather name="eye" size={verticalScale(20)} color="#e63157" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: { flexDirection: "column", gap: verticalScale(8) },

  title: {
    fontFamily: "Poppins-Reguler",
    color: "#1A1A1A",
    fontSize: verticalScale(14),
  },

  inputWrapper: {
    height: verticalScale(48),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: verticalScale(12),
    fontFamily: "Poppins-Reguler",
    fontSize: verticalScale(14),
    color: "#1A1A1A",
  },

  showButton: {
    paddingHorizontal: verticalScale(12),
  },
});
