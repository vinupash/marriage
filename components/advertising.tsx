import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import { images } from "../constants/images";
const Advertising = () => {
  return (
    <View
      style={{
        width: "100%",
        // paddingVertical: verticalScale(10),
        paddingTop: verticalScale(10),
        paddingHorizontal: scale(15),
      }}
    >
      <View
        style={{
          padding: verticalScale(10),
          borderRadius: verticalScale(10),
          backgroundColor: "#e9fbf0",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: scale(10),
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: scale(5),
          }}
        >
          {/*<View
            style={{
              width: scale(40),
              height: scale(40),
              borderWidth: 1,
            }}
          ></View>*/}
          <Image
            source={images.ProfileImage}
            style={{
              width: scale(40),
              height: scale(40),
              borderWidth: 1,
              borderRadius: scale(20),
            }}
          />
          <View>
            <Text>cool</Text>
            <Text>cool</Text>
          </View>
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
