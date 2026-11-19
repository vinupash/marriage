import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

interface TourTooltipProps {
  title: string;
  description: string;
  currentStep?: number;
  totalSteps?: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onSkip?: () => void;
}

const TourTooltip = ({
  title,
  description,
  currentStep = 1,
  totalSteps = 4,
  onNext,
  onPrevious,
  onSkip,
}: TourTooltipProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.counter}>
          {currentStep}/{totalSteps}
        </Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.progress}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index < currentStep && styles.activeDot]}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Pressable onPress={onSkip}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>

        <View style={styles.buttons}>
          {currentStep > 1 && (
            <Pressable style={styles.previousButton} onPress={onPrevious}>
              <Text style={styles.previousText}>Previous</Text>
            </Pressable>
          )}

          <Pressable style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextText}>
              {currentStep === totalSteps ? "Finish" : "Next"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TourTooltip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: scale(16),
    padding: scale(18),
    width: "100%",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  title: {
    fontSize: scale(16),
    fontFamily: "Poppins-SemiBold",
    color: "#e63157",
  },
  counter: {
    fontSize: scale(11),
    fontFamily: "Poppins-Regular",
    color: "#999999",
  },
  description: {
    fontSize: scale(12),
    fontFamily: "Poppins-Regular",
    color: "#555555",
    lineHeight: verticalScale(20),
  },
  progress: {
    flexDirection: "row",
    gap: scale(5),
    marginTop: verticalScale(18),
  },
  dot: {
    flex: 1,
    height: verticalScale(4),
    borderRadius: scale(5),
    backgroundColor: "#EEEEEE",
  },
  activeDot: {
    backgroundColor: "#e63157",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  buttons: {
    flexDirection: "row",
    gap: scale(8),
  },
  skip: {
    fontSize: scale(11),
    fontFamily: "Poppins-Medium",
    color: "#888888",
  },
  previousButton: {
    backgroundColor: "#FCE5EA",
    paddingHorizontal: scale(12),
    paddingVertical: scale(8),
    borderRadius: scale(8),
  },
  previousText: {
    fontSize: scale(10),
    fontFamily: "Poppins-Medium",
    color: "#e63157",
  },
  nextButton: {
    backgroundColor: "#e63157",
    paddingHorizontal: scale(16),
    paddingVertical: scale(8),
    borderRadius: scale(8),
  },
  nextText: {
    fontSize: scale(10),
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
});
