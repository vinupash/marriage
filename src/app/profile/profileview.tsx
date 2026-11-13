import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  LayoutChangeEvent,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

import ProfileViewNavbar from "../../../components/profileviewnavbar";
import { router } from "expo-router";
import { Colors } from "../../../constants/theme";

const HEADER_HEIGHT = verticalScale(250);
const STICKY_BAR_HEIGHT = verticalScale(40);
const { width: screenWidth } = Dimensions.get("window");

const tabs = [
  { id: "basic", title: "Basic Details" },
  { id: "family", title: "Family Details" },
  { id: "professional", title: "Professional Details" },
  { id: "contact", title: "Contact Details" },
  { id: "horoscope", title: "Horoscope" },
];

const profileImages = [
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=3023&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1760&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop",
];

const ProfileView = () => {
  const [activeSection, setActiveSection] = useState("basic");
  const [activeImage, setActiveImage] = useState(0);

  const scrollY = useRef(new Animated.Value(0)).current;

  const verticalScrollRef = useRef<ScrollView>(null);
  const horizontalScrollRef = useRef<ScrollView>(null);

  const sectionPositions = useRef<Record<string, number>>({});
  const tabPositions = useRef<Record<string, { x: number; width: number }>>({});

  // Parallax animation
  const imageTranslateY = scrollY.interpolate({
    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.5],
    extrapolateRight: "clamp",
  });

  const imageScale = scrollY.interpolate({
    inputRange: [-HEADER_HEIGHT, 0],
    outputRange: [2, 1],
    extrapolate: "clamp",
  });

  // Save section positions
  const handleSectionLayout = (id: string) => (event: LayoutChangeEvent) => {
    sectionPositions.current[id] = event.nativeEvent.layout.y;
  };

  // Scroll to selected section
  const handleTabPress = (id: string) => {
    const sectionY = sectionPositions.current[id];

    if (sectionY !== undefined) {
      setActiveSection(id);

      verticalScrollRef.current?.scrollTo({
        y: Math.max(0, sectionY - STICKY_BAR_HEIGHT),
        animated: true,
      });
    }
  };

  // Update active tab during vertical scrolling
  const handleVerticalScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    let currentSection = "basic";

    tabs.forEach((tab) => {
      const sectionY = sectionPositions.current[tab.id];

      if (
        sectionY !== undefined &&
        scrollPosition + STICKY_BAR_HEIGHT + 15 >= sectionY
      ) {
        currentSection = tab.id;
      }
    });

    setActiveSection((previous) =>
      previous === currentSection ? previous : currentSection,
    );
  };

  // Automatically move horizontal tabs to active tab
  useEffect(() => {
    const position = tabPositions.current[activeSection];

    if (position) {
      horizontalScrollRef.current?.scrollTo({
        x: Math.max(0, position.x - scale(15)),
        animated: true,
      });
    }
  }, [activeSection]);

  // Section title
  const renderSectionTitle = (title: string) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  // Detail row
  // const renderDetail = (label: string, value: string) => (
  //   <View style={styles.detailRow}>
  //     <Text style={styles.detailLabel}>{label}</Text>
  //     <Text style={styles.detailValue}>{value || "-"}</Text>
  //   </View>
  // );

  const renderDetail = (label: string, value: string) => (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailSeparator}>:</Text>
      <Text style={styles.detailValue}>{value?.trim() || "No Data Found"}</Text>
    </View>
  );

  // Image pagination
  const handleImageScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);

    setActiveImage(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed navbar */}
      <ProfileViewNavbar
        screenTitle="John Doe"
        screenSubTitle="Mumbai"
        onPress={() => router.back()}
      />

      <Animated.ScrollView
        ref={verticalScrollRef as any}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
            listener: handleVerticalScroll,
          },
        )}
      >
        {/* Child 0: Parallax image carousel */}
        <View style={styles.imageContainer}>
          <Animated.ScrollView
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onMomentumScrollEnd={handleImageScroll}
          >
            {profileImages.map((image, index) => (
              <View key={index} style={styles.imageSlide}>
                <Animated.Image
                  source={{ uri: image }}
                  resizeMode="contain"
                  style={[
                    styles.profileImage,
                    {
                      transform: [
                        { translateY: imageTranslateY },
                        { scale: imageScale },
                      ],
                    },
                  ]}
                />
              </View>
            ))}
          </Animated.ScrollView>

          {/* Pagination dots */}
          <View style={styles.pagination}>
            {profileImages.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, activeImage === index && styles.activeDot]}
              />
            ))}
          </View>

          {/* Image counter */}
          <View style={styles.imageCounter}>
            <Text style={styles.imageCounterText}>
              {activeImage + 1}/{profileImages.length}
            </Text>
          </View>
        </View>

        {/* Child 1: Sticky horizontal tabs */}
        <View style={styles.stickyBar}>
          <ScrollView
            ref={horizontalScrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabContainer}
          >
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                onPress={() => handleTabPress(tab.id)}
                onLayout={(event) => {
                  const { x, width } = event.nativeEvent.layout;
                  tabPositions.current[tab.id] = { x, width };
                }}
                style={[
                  styles.tabItem,
                  activeSection === tab.id && styles.activeTabItem,
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeSection === tab.id && styles.activeTabText,
                  ]}
                >
                  {tab.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Basic Information */}
        <View onLayout={handleSectionLayout("basic")} style={styles.section}>
          {renderSectionTitle("Basic Information")}

          {renderDetail("Name", "John Doe")}
          {renderDetail("Date of Birth", "21 Dec 1990")}
          {renderDetail("Age", "35 Years")}
          {renderDetail("Height", "5 ft 7 in")}
          {renderDetail("Marital Status", "Never Married")}
          {renderDetail("Blood Group", "O+")}
          {renderDetail("Place Of Birth (जन्म स्थान)", "Mumbai")}
          {renderDetail("Time Of Birth (जन्म वेळ)", "Mumbai")}
          {renderDetail("Complexion (वर्ण)", "Mumbai")}
          {renderDetail("Mother Toungue (मातृभाषा)", "Mumbai")}
          {renderDetail("Religion (धर्म)", "Mumbai")}
          {renderDetail("Caste (जात)", "Mumbai")}
          {renderDetail("Sub Caste (उपजात)", "Mumbai")}
        </View>

        <View style={styles.separator} />

        {/* Family Information */}
        <View onLayout={handleSectionLayout("family")} style={styles.section}>
          {renderSectionTitle("Family Information")}

          {renderDetail("Father's Name", "-")}
          {renderDetail("Mother's Name", "-")}
          {renderDetail("Native Place", "-")}
        </View>

        <View style={styles.separator} />

        {/* Professional Information */}
        <View
          onLayout={handleSectionLayout("professional")}
          style={styles.section}
        >
          {renderSectionTitle("Professional Details")}

          {renderDetail("Education (शिक्षण)", "-")}
          {renderDetail("Education Details (शिक्षणाची सविस्तर माहिती)", "-")}
          {renderDetail("Occupation (व्यवसाय)", "Software Developer")}
          {renderDetail("Occupation Details (व्यवसायाचा तपशील)", "-")}
        </View>

        <View style={styles.separator} />

        {/* Contact Information */}
        <View
          onLayout={handleSectionLayout("contact")}
          style={[styles.section, styles.lastSection]}
        >
          {renderSectionTitle("Contact Details")}

          {renderDetail("Mobile Number", "-")}
          {renderDetail("Alternate Number", "-")}
          {renderDetail("Email Address", "-")}
          {renderDetail("Address", "-")}
        </View>

        <View style={styles.separator} />

        {/* Horoscope */}
        <View
          onLayout={handleSectionLayout("horoscope")}
          style={[styles.section, styles.lastSection]}
        >
          {renderSectionTitle("Horoscope")}

          {renderDetail("Gothra (गोत्र)", "-")}
          {renderDetail("Star (नक्षत्र)", "-")}
          {renderDetail("Moonsign (चंद्रराशी)", "-")}
          {renderDetail("Yoni (योनी)", "-")}
          {renderDetail("Devak (देवक)", "-")}
          {renderDetail("Gan (गण)", "-")}
          {renderDetail("Nadi (नाडी)", "-")}
          {renderDetail("Horoscope Match? (कुंडली जुळली पाहिजे ?)", "-")}
          {renderDetail("Are You Manglik? (आपण मांगलिक आहात?)", "-")}
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // Image carousel
  imageContainer: {
    width: screenWidth,
    height: HEADER_HEIGHT,
    overflow: "hidden",
    backgroundColor: "#D9D9D9",
  },

  imageSlide: {
    width: screenWidth,
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },

  profileImage: {
    width: screenWidth,
    height: HEADER_HEIGHT,
  },

  // Pagination
  pagination: {
    position: "absolute",
    bottom: verticalScale(12),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },

  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(10),
    backgroundColor: "rgba(255,255,255,0.6)",
  },

  activeDot: {
    width: scale(18),
    backgroundColor: "#e63157",
  },

  // Image counter
  imageCounter: {
    position: "absolute",
    right: scale(12),
    bottom: verticalScale(10),
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(4),
    borderRadius: scale(15),
  },

  imageCounterText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Medium",
    fontSize: scale(10),
  },

  // Sticky tabs
  stickyBar: {
    height: STICKY_BAR_HEIGHT,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    zIndex: 10,
  },

  tabContainer: {
    alignItems: "center",
    paddingHorizontal: verticalScale(10),
  },

  tabItem: {
    height: STICKY_BAR_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: verticalScale(12),
    marginRight: verticalScale(5),
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },

  activeTabItem: {
    borderBottomColor: "#e63157",
  },

  tabText: {
    fontFamily: "Poppins-Medium",
    fontSize: verticalScale(12),
    lineHeight: verticalScale(18),
    color: "#777777",
  },

  activeTabText: {
    color: "#e63157",
    fontFamily: "Poppins-SemiBold",
  },

  // Sections
  section: {
    paddingHorizontal: verticalScale(16),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(15),
  },

  sectionTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: scale(15),
    color: Colors.primary,
    marginBottom: verticalScale(10),
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: verticalScale(7),
  },

  detailLabel: {
    width: "42%",
    fontFamily: "Poppins-Medium",
    fontSize: verticalScale(11),
    color: "#1A1A1A",
  },

  detailSeparator: {
    fontFamily: "Poppins-Medium",
    fontSize: verticalScale(11),
    color: "#999999",
    marginHorizontal: scale(5),
  },

  detailValue: {
    flex: 1,
    fontFamily: "Poppins-Regular",
    fontSize: verticalScale(11),
    color: "#1A1A1A",
  },

  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginHorizontal: verticalScale(16),
  },

  lastSection: {
    paddingBottom: verticalScale(10),
  },
});
