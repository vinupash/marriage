import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";
import ProgressTrack from "./progresstrack";

interface UploadProfileProps {
  onPress: () => void;
}

const UploadProfile = ({ onPress }: UploadProfileProps) => {
  const progress = 0.8;

  return (
    <View style={styles.uploadProfileWrapper}>
      <View style={styles.profileWrapper}>
        <Text style={styles.title}>Complete Your Profile</Text>
        <Text style={styles.progressText}>
          Your profile is {Math.round(progress * 100)}% complete. Upload the
          remaining details to improve your profile and get better matches.
        </Text>

        <ProgressTrack progress={progress} />

        <Text style={styles.progressText}>
          {Math.round(progress * 100)}% completed
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.completeProfileBtn}
          onPress={onPress}
        >
          <Text style={styles.completeProfileText}>Complete Profile</Text>
          <Feather name="arrow-right" size={scale(14)} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadProfile;

const styles = StyleSheet.create({
  uploadProfileWrapper: {
    width: "100%",
    paddingHorizontal: scale(15),
  },
  profileWrapper: {
    width: "100%",
    borderRadius: scale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
    backgroundColor: "#fce8ed",
    gap: verticalScale(4),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: verticalScale(12),
    color: "#1A1A1A",
    fontFamily: "Poppins-SemiBold",
  },
  progressText: {
    fontSize: verticalScale(8),
    color: "#1A1A1A",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  completeProfileBtn: {
    flexDirection: "row",
    gap: scale(5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e63157",
    paddingVertical: scale(5),
    paddingHorizontal: scale(16),
    borderRadius: scale(6),
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
  completeProfileText: {
    fontFamily: "Poppins-Regular",
    fontSize: scale(10),
    lineHeight: scale(14),
    color: "#ffffff",
  },
});
