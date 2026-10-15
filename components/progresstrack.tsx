import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

interface ProgressTrackProps {
  progress: number;
}
const ProgressTrack = ({ progress }: ProgressTrackProps) => {
  return (
    <View style={styles.progressTrack}>
      <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
    </View>
  );
};

export default ProgressTrack;

const styles = StyleSheet.create({
  progressTrack: {
    width: "100%",
    height: verticalScale(4),
    backgroundColor: "#ffffff",
    borderRadius: scale(10),
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#e63157",
    borderRadius: scale(10),
  },
});
