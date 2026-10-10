import { Text, View, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: scale(20),
          lineHeight: scale(26),
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
        necessitatibus minus aliquam sunt commodi quidem, distinctio cumque
        dolorum laudantium sit cum provident eum delectus inventore velit fugit
        totam quaerat sequi?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
