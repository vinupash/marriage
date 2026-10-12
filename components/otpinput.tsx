import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { scale } from "react-native-size-matters";

const OTP_LENGTH = 6;

interface OTPInputProps {
  onChange?: (otp: string) => void;
}

const OTPInput = ({ onChange }: OTPInputProps) => {
  const [otp, setOtp] = useState("");

  const inputRef = useRef<TextInput>(null);

  const handleChange = (value: string) => {
    const numbersOnly = value.replace(/[^0-9]/g, "");
    const newOtp = numbersOnly.slice(0, OTP_LENGTH);

    setOtp(newOtp);

    // Send OTP to parent screen
    onChange?.(newOtp);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => inputRef.current?.focus()}
      style={styles.container}
    >
      <View style={styles.otpContainer}>
        {Array.from({ length: OTP_LENGTH }).map((_, index) => (
          <View
            key={index}
            style={[styles.otpBox, index === otp.length && styles.otpBoxActive]}
          >
            <Text style={styles.otpText}>{otp[index] || ""}</Text>
          </View>
        ))}
      </View>

      <TextInput
        ref={inputRef}
        value={otp}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={OTP_LENGTH}
        style={styles.hiddenInput}
        autoFocus
      />
    </TouchableOpacity>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  otpBox: {
    width: scale(45),
    height: scale(50),
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: scale(8),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  otpBoxActive: {
    borderColor: "#e63157",
    borderWidth: 2,
  },

  otpText: {
    fontSize: scale(20),
    fontFamily: "Poppins-SemiBold",
    color: "#1A1A1A",
  },

  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
});
