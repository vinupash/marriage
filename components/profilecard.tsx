import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { scale, verticalScale } from "react-native-size-matters";
import { Image } from "expo-image";

interface ProfileCardProps {
  name: string;
  image: ImageSourcePropType;
  height: number;
  age: number;
}

const ProfileCard = ({ name, image, height, age }: ProfileCardProps) => {
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
        colors={["transparent", "rgba(0,0,0,0.98)"]}
        locations={[0, 1]}
        style={styles.profileOverlay}
      >
        <View style={styles.profileDetailsWrapper}>
          <View style={styles.profileNameWrapper}>
            <Text style={styles.profileName}>{name},</Text>
            <Text style={styles.profileName}>{age}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: verticalScale(5) }}>
            <Text style={styles.profileText}>Professional:</Text>
            <Text style={styles.profileText}>Professional</Text>
          </View>
          <View style={{ flexDirection: "row", gap: verticalScale(5) }}>
            <Text style={styles.profileText}>Location:</Text>
            <Text style={styles.profileText}>Location</Text>
          </View>
          <View style={{ flexDirection: "row", gap: verticalScale(5) }}>
            <Text style={styles.profileText}>DOB:</Text>
            <Text style={styles.profileText}>DOB</Text>
          </View>
          <View style={{ flexDirection: "row", gap: verticalScale(5) }}>
            <Text style={styles.profileText}>Height:</Text>
            <Text style={styles.profileText}>Height</Text>
          </View>
        </View>
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
    // height: verticalScale(150),
    justifyContent: "flex-end",
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(10),
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: scale(20),
    fontFamily: "Poppins-SemiBold",
  },
  profileNameWrapper: { flexDirection: "row", gap: verticalScale(5) },
  emptyContainer: {
    flex: 1,
    flexDirection: "column",
    gap: verticalScale(10),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(24),
  },
  emptyTitle: {
    fontSize: verticalScale(16),
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
  emptySubtitle: {
    fontSize: verticalScale(12),
    color: "#ffffff",
    textAlign: "center",
    marginTop: 8,
    fontFamily: "Poppins-Regular",
  },
  emptyTitleMarathi: {
    fontSize: verticalScale(16),
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
  emptySubtitleMarathi: {
    fontSize: verticalScale(12),
    color: "#ffffff",
    textAlign: "center",
    marginTop: 8,
    fontFamily: "Poppins-Regular",
  },
  profileDetailsWrapper: {
    flexDirection: "column",
    gap: verticalScale(1),
  },
  profileText: {
    fontFamily: "Poppins-Regular",
    color: "#ffffff",
    fontSize: verticalScale(12),
  },
});
