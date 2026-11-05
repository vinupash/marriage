import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

interface CustomTextAreaProps {
  title: string;
  placeholder: string;
  value?: string;
  setValue?: (value: string) => void;
  editable?: boolean;
  numberOfLines?: number;
}

const CustomTextArea = ({
  title,
  placeholder,
  value = "",
  setValue,
  editable = true,
  numberOfLines = 4,
}: CustomTextAreaProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={[styles.textArea, !editable && styles.disabled]}
        placeholder={placeholder}
        placeholderTextColor="#999999"
        value={value}
        onChangeText={setValue}
        editable={editable}
        multiline
        numberOfLines={numberOfLines}
        textAlignVertical="top"
      />
    </View>
  );
};

export default CustomTextArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(1),
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    color: "#1A1A1A",
    fontSize: scale(12),
  },
  textArea: {
    minHeight: verticalScale(100),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: verticalScale(10),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(10),
    fontFamily: "Poppins-Regular",
    fontSize: scale(12),
    color: "#1A1A1A",
  },
  disabled: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(10),
  },
});
