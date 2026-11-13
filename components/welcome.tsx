import { View, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../constants/theme";

const Welcome = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: scale(15),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: verticalScale(10),
          alignItems: "center",
          backgroundColor: Colors.background,
          paddingVertical: verticalScale(5),
          paddingHorizontal: verticalScale(10),
        }}
      >
        <View
          style={{
            width: verticalScale(40),
            height: verticalScale(40),
            borderWidth: 1,
            borderRadius: verticalScale(20),
          }}
        />
        <Text>Cool</Text>
      </View>
    </View>
  );
};

export default Welcome;
