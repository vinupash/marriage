import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { scale, verticalScale } from "react-native-size-matters";
import { Image } from "expo-image";

interface ProfileCardProps {
  name: string;
  image: ImageSourcePropType;
  height: number;
}

const ProfileCard = ({ name, image, height }: ProfileCardProps) => {
  return (
    <View style={[styles.profileCard, { height }]}>
      {image ? (
        <Image
          source={image}
          contentFit="cover"
          transition={300}
          style={styles.profileImage}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <View>
            <Text style={styles.emptyTitleMarathi}>
              कोणताही फोटो आढळला नाही
            </Text>

            <Text style={styles.emptySubtitleMarathi}>
              सध्या कोणताही फोटो उपलब्ध नाही. कृपया पुन्हा प्रयत्न करा.
            </Text>
          </View>
          <View>
            <Text style={styles.emptyTitle}>No Image Found</Text>

            <Text style={styles.emptySubtitle}>
              No image is available at the moment. Please try again later.
            </Text>
          </View>
        </View>
      )}

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        locations={[0, 1]}
        style={styles.profileOverlay}
      >
        <Text style={styles.profileName}>{name}</Text>
      </LinearGradient>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  profileCard: {
    width: "100%",
    borderRadius: verticalScale(12),
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#e63157",
    backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  profileOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: verticalScale(150),
    justifyContent: "flex-end",
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(20),
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: scale(24),
    fontFamily: "Poppins-SemiBold",
  },
  emptyContainer: {
    flex: 1,
    flexDirection: "column",
    gap: verticalScale(20),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(24),
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 8,
  },
  emptyTitleMarathi: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  },
  emptySubtitleMarathi: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 8,
  },
});
