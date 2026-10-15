import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Feather } from "@expo/vector-icons";

interface ScreenNavbarProps {
  screenTitle: string;
  screenSubTitle: string;
  onPress: () => void;
}
const ScreenNavbar = ({
  onPress,
  screenTitle,
  screenSubTitle,
}: ScreenNavbarProps) => {
  return (
    <View style={styles.screenHeaderWrapper}>
      <View
        style={{
          flexDirection: "row",
          gap: scale(10),
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.backIcon}
          onPress={onPress}
        >
          <Feather name="arrow-left" size={scale(20)} color="#e63157" />
        </TouchableOpacity>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.screenTitle}>{screenTitle}</Text>
          <Text style={styles.screenSubTitle}>{screenSubTitle}</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.notificationWrapper}>
        <FontAwesome5 name="power-off" size={scale(12)} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenNavbar;

const styles = StyleSheet.create({
  screenHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(15),
    paddingVertical: scale(8),
    backgroundColor: "#ffffff",
  },
  notificationWrapper: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e63157",
  },
  backIconShadow: {},

  backIcon: {
    borderRadius: scale(20),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    width: scale(40),
    height: scale(40),
    // borderRadius: scale(20),

    // Android shadow
    elevation: 5,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: verticalScale(3),
    },
    shadowOpacity: 0.2,
    shadowRadius: scale(4),
  },
  screenTitle: {
    fontSize: verticalScale(13),
    color: "#1A1A1A",
    fontFamily: "Poppins-SemiBold",
  },
  screenSubTitle: {
    fontSize: verticalScale(9),
    color: "#1A1A1A",
    fontFamily: "Poppins-Regular",
  },
});
