import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Button,
  Pressable,
} from "react-native";

import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Header from "../../../components/header";
import BackIcon from "../../../components/backicon";
import ScreenNavbar from "../../../components/screennavbar";
import CustomInput from "../../../components/custominput";
import { CommonStyles } from "../../../constants/theme";

type Gender = "Male" | "Female";

const Profile = () => {
  const [gender, setGender] = useState<Gender>("Male");
  const [dob, setDob] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  // Calculate latest eligible date of birth
  const getMaximumDOB = () => {
    const today = new Date();
    const minimumAge = gender === "Male" ? 21 : 18;

    return new Date(
      today.getFullYear() - minimumAge,
      today.getMonth(),
      today.getDate(),
    );
  };

  const maximumDOB = getMaximumDOB();

  // Format date without time
  const formatDate = (value: Date) =>
    value.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  // Format time without seconds
  const formatTime = (value: Date) =>
    value.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  // Update gender and validate existing DOB
  const handleGenderChange = (selectedGender: Gender) => {
    setGender(selectedGender);

    if (dob) {
      const today = new Date();
      const minimumAge = selectedGender === "Male" ? 21 : 18;

      const maxDate = new Date(
        today.getFullYear() - minimumAge,
        today.getMonth(),
        today.getDate(),
      );

      if (dob > maxDate) {
        setDob(null);
      }
    }
  };

  // console.log("gender dateils->", gender);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScreenNavbar
        screenTitle={"My Profile"}
        screenSubTitle={
          "View and manage your personal and matrimonial details."
        }
        onPress={() => router.back()}
      />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
          keyboardDismissMode="on-drag"
        >
          <View style={styles.content}></View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: verticalScale(2),
  },
  content: {
    flexDirection: "column",
    gap: verticalScale(20),
    backgroundColor: "#FFFFFF",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
  },
  label: {
    fontSize: scale(13),
    color: "#333",
    marginBottom: verticalScale(6),
  },
  input: {
    height: verticalScale(48),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: verticalScale(10),
    paddingHorizontal: scale(12),
    justifyContent: "center",
  },
  text: {
    fontSize: scale(14),
    color: "#333",
  },
  placeholder: {
    color: "#999999",
  },
  title: {
    ...CommonStyles.sectionTitle,
  },
});
