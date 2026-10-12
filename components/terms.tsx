import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

interface TermsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const Terms = ({ isLast, icon, title, description }: TermsProps) => {
  return (
    <View
      style={[
        styles.termsWrapper,
        isLast && {
          borderBottomWidth: 0,
          paddingBottom: 0,
        },
      ]}
    >
      <View style={styles.termsIcon}>{icon}</View>

      <View style={styles.termsContentWrapper}>
        <Text style={styles.termsTitle}>{title}</Text>

        <Text style={styles.termsDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  termsWrapper: {
    flexDirection: "row",
    gap: scale(10),
    paddingVertical: scale(10),
    // marginBottom: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    width: "100%",
  },

  termsIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: "#e63157",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },

  termsContentWrapper: {
    flex: 1,
    minWidth: 0,
    gap: verticalScale(3),
  },

  termsTitle: {
    fontSize: verticalScale(14),
    fontFamily: "Poppins-SemiBold",
    color: "#1A1A1A",
  },

  termsDescription: {
    fontSize: verticalScale(12),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
    lineHeight: verticalScale(18),
    flexShrink: 1,
  },
});
