import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        animation: "shift",
        tabBarStyle: {
          height: scale(60),
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 5,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,

          paddingBottom: scale(10),
          paddingTop: scale(10),
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabBarWrapper}>
              <Ionicons
                name="home"
                size={verticalScale(14)}
                color={focused ? "#e63157" : "#999999"}
              />
              <Text
                style={[styles.tabBarTitle, focused && { color: "#e63157" }]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabBarWrapper}>
              <Fontisto
                name="person"
                size={verticalScale(14)}
                color={focused ? "#e63157" : "#999999"}
              />
              <Text
                style={[styles.tabBarTitle, focused && { color: "#e63157" }]}
              >
                My Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabBarWrapper}>
              <FontAwesome5
                name="book"
                size={verticalScale(14)}
                color={focused ? "#e63157" : "#999999"}
              />
              <Text
                style={[styles.tabBarTitle, focused && { color: "#e63157" }]}
              >
                About
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  tabBarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: scale(60),
  },
  tabBarTitle: {
    fontSize: scale(10),
    fontFamily: "Poppins-Regular",
    color: "#999999",
    marginTop: scale(2),
  },
});
