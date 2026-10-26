import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

interface AboutSection {
  title: string;
  description?: string;
  points?: string[];
}

interface AboutWrapperProps {
  section: AboutSection;
  isLast: boolean;
}

const AboutWrapper = ({ section, isLast }: AboutWrapperProps) => {
  return (
    <View
      style={[
        styles.sectionWrapper,
        isLast && {
          borderBottomWidth: 0,
          paddingBottom: 0,
        },
      ]}
    >
      <Text style={styles.sectionTitle}>{section.title}</Text>

      {section.description && (
        <Text style={styles.sectionDescription}>{section.description}</Text>
      )}

      {section.points && (
        <View style={styles.pointsWrapper}>
          {section.points.map((point, index) => (
            <View key={index} style={styles.pointRow}>
              <View style={styles.bullet} />
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default AboutWrapper;

const styles = StyleSheet.create({
  sectionWrapper: {
    paddingBottom: scale(10),
    marginBottom: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  sectionTitle: {
    fontSize: verticalScale(14),
    fontFamily: "Poppins-SemiBold",
    color: "#e63157",
    marginBottom: scale(5),
  },

  sectionDescription: {
    fontSize: verticalScale(12),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
    lineHeight: verticalScale(18),
  },

  pointsWrapper: {
    gap: scale(8),
  },

  pointRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: scale(8),
  },

  bullet: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(2.5),
    backgroundColor: "#e63157",
    marginTop: verticalScale(6),
  },

  pointText: {
    flex: 1,
    fontSize: verticalScale(12),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
    lineHeight: verticalScale(18),
  },
});
