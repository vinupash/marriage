import { Platform } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

export const Colors = {
  primary: "#e63157",
  secondary: "#208AEF",
  background: "#FFFFFF",
  text: "#333333",
  placeholder: "#999999",
  border: "#D9D9D9",
  white: "#FFFFFF",
  black: "#000000",
  success: "#28A745",
  error: "#DC3545",
  borderColor: "",
};

export const Fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
};

export const Shadows = {
  small: {
    // iOS
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: scale(5),
    },
    shadowOpacity: 0.2,
    shadowRadius: scale(4),

    // Android
    elevation: 5,
  },
};

export const CommonStyles = {
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: verticalScale(14),
    lineHeight: verticalScale(20),
    fontFamily: "Poppins-SemiBold",
    color: Colors.primary,
  },
  descriptionContent: {
    fontSize: verticalScale(12),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
    lineHeight: verticalScale(18),
    flexShrink: 1,
  },
  imageContainer: {
    // width: "100%",
    height: verticalScale(250),
    position: "relative",
  },
  selectGender: {
    height: verticalScale(48),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: verticalScale(10),
    paddingHorizontal: scale(12),
    justifyContent: "center",
  },
};
