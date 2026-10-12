import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

interface TermsProps {
  isLast: boolean;
  title: string;
  descriptions: string[];
}

const Terms = ({ isLast, title, descriptions }: TermsProps) => {
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
      {/*<View style={styles.termsIcon}>{icon}</View>*/}

      <View style={styles.termsContentWrapper}>
        <Text style={styles.termsTitle}>{title}</Text>
        {descriptions.map((description, index) => (
          <View key={index} style={styles.termsDescriptionWrapper}>
            <View
              style={{
                width: scale(5),
                height: scale(5),
                borderRadius: scale(2.5),
                backgroundColor: "#e63157",
                marginTop: scale(5),
              }}
            />

            <Text style={styles.termsDescription}>{description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  termsWrapper: {
    // flexDirection: "row",
    // gap: scale(10),
    paddingBottom: scale(10),
    marginBottom: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    width: "100%",
  },

  termsIcon: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
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
    color: "#e63157",
  },
  termsDescriptionWrapper: {
    flexDirection: "row",
    gap: scale(6),
    paddingVertical: verticalScale(2),
    // marginBottom: scale(10),
    // borderBottomWidth: 1,
    // borderBottomColor: "#E5E7EB",
    width: "100%",
  },
  termsDescription: {
    fontSize: verticalScale(12),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
    lineHeight: verticalScale(18),
    flexShrink: 1,
  },
});
