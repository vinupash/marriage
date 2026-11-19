import { useEffect, useMemo, useRef } from "react";
import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  useTourGuide,
  useTourPersistence,
} from "@wrack/react-native-tour-guide";
import { notifyTabsTourEnded } from "../../../constants/tourEvents";
import { Colors } from "../../../constants/theme";

const TabsLayout = () => {
  const { startTour } = useTourPersistence();

  const hasStartedTour = useRef(false);

  // Tab references
  const homeRef = useRef<View>(null);
  const profileRef = useRef<View>(null);
  const shortlistprofileRef = useRef<View>(null);
  const aboutRef = useRef<View>(null);

  // Tab tour steps
  const tourSteps = useMemo(
    () => [
      {
        id: "home",
        targetRef: homeRef,
        title: "Home",
        description:
          "Welcome! Explore the latest profiles and find your perfect match here.",
        interactive: true,
        // hideNextButton: false,
        // completed: false,
        targetStyle: styles.primaryBtn,
        // autoAdvance: pace(),
      },
      {
        id: "profile",
        targetRef: profileRef,
        title: "My Profile",
        description:
          "View and manage your personal, family and professional details here.",
      },
      {
        id: "shortlistprofile",
        targetRef: shortlistprofileRef,
        title: "Shortlisted Profiles",
        description:
          "View and manage your personal, family and professional details here.",
      },
      {
        id: "about",
        targetRef: aboutRef,
        title: "About Us",
        description:
          "Learn more about our community and the purpose of this application.",
      },
    ],
    [],
  );

  // Start Tabs tutorial once
  useEffect(() => {
    if (
      !homeRef.current ||
      !profileRef.current ||
      !aboutRef.current ||
      hasStartedTour.current
    ) {
      return;
    }

    hasStartedTour.current = true;

    startTour(tourSteps, {
      tourId: "tabs-onboarding",
      overlayMode: "inline",

      spotlightStyles: {
        overlayColor: "#000000",
        overlayOpacity: 0.35,

        enablePulse: true,
        pulseColor: Colors.primary,
        pulseWidth: 2,
        pulseDuration: 1500,
        pulseMinOpacity: 0.1,
        pulseMaxOpacity: 0.5,
        enableGradient: true,
        gradientColors: [
          "rgba(230,49,87,0.15)",
          "rgba(30,20,40,0.85)",
          "rgba(0,0,0,0.95)",
        ],
      },

      tooltipStyles: {
        backgroundColor: "#FFFFFF",
        borderRadius: scale(10),

        titleColor: "#E63157",
        descriptionColor: "#555555",

        primaryButtonColor: "#E63157", // Next button
        secondaryButtonColor: "#333333", // Back button
        buttonTextColor: "#FFFFFF",
        skipButtonColor: "#E63157",

        titleStyle: {
          fontFamily: "Poppins-SemiBold",
          fontSize: scale(15),
        },

        descriptionStyle: {
          fontFamily: "Poppins-Regular",
          fontSize: scale(10),
          lineHeight: scale(16),
        },
      },

      onTourEnd: () => {
        // Wait until the Tabs tutorial is completely finished
        setTimeout(() => {
          notifyTabsTourEnded();
        }, 500);
      },
    });
  }, [startTour, tourSteps]);

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
      {/* Home */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              ref={homeRef}
              collapsable={false}
              style={styles.tabBarWrapper}
            >
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

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              ref={profileRef}
              collapsable={false}
              style={styles.tabBarWrapper}
            >
              <FontAwesome5
                name="user"
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

      {/* About */}
      <Tabs.Screen
        name="shortlistprofile"
        options={{
          title: "Shortlist Profile",
          tabBarIcon: ({ focused }) => (
            <View
              ref={shortlistprofileRef}
              collapsable={false}
              style={styles.tabBarWrapper}
            >
              <FontAwesome
                name="star"
                size={verticalScale(14)}
                color={focused ? "#e63157" : "#999999"}
              />

              <Text
                style={[styles.tabBarTitle, focused && { color: "#e63157" }]}
              >
                Shortlist Profile
              </Text>
            </View>
          ),
        }}
      />

      {/* About */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ focused }) => (
            <View
              ref={aboutRef}
              collapsable={false}
              style={styles.tabBarWrapper}
            >
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
    height: scale(40),
  },

  tabBarTitle: {
    fontSize: scale(8),
    fontFamily: "Poppins-Regular",
    color: "#999999",
    marginTop: scale(2),
    textAlign: "center",
  },

  chatBubble: {
    flex: 1,
    backgroundColor: "#DCF8C6",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  primaryBtn: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
});
