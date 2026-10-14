import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const Advertising = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingTop: verticalScale(5),
        paddingHorizontal: scale(15),
      }}
    >
      <View
        style={{
          padding: verticalScale(5),
          borderRadius: verticalScale(5),
          backgroundColor: "#e9fbf0",
          flexDirection: "row",
        }}
      >
        <View>
          <Text>cool</Text>
          <Text>cool</Text>
        </View>
        <View style={styles.whatsappIcon}>
          <FontAwesome name="whatsapp" size={scale(15)} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
};

export default Advertising;

const styles = StyleSheet.create({
  whatsappIcon: {
    width: scale(30),
    height: scale(30),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#22c35d",
    borderRadius: scale(15),
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
});
