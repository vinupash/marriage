import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

import ScreenNavbar from "../../../components/screennavbar";
import { aboutUsData } from "../../../mocks/aboutus_data";
import AboutWrapper from "../../../components/aboutwrapper";
import { images } from "../../../constants/images";
import AboutFooter from "../../../components/aboutfooter";
{
  /*<View key={key} style={[styles.sectionWrapper]}>
  <Text style={styles.sectionTitle}>{section.title}</Text>

  {"description" in section && (
    <Text style={styles.sectionDescription}>
      {section.description}
    </Text>
  )}

  {"points" in section && (
    <View style={styles.pointsWrapper}>
      {section.points.map((point, index) => (
        <View key={index} style={styles.pointRow}>
          <View
            style={{
              width: scale(5),
              height: scale(5),
              borderRadius: scale(2.5),
              backgroundColor: "#e63157",
              marginTop: scale(5),
            }}
          />
          <Text style={styles.pointText}>{point}</Text>
        </View>
      ))}
    </View>
  )}
</View>*/
}
const About = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScreenNavbar
        screenTitle={"About Us"}
        screenSubTitle={"Building Relationships, Creating Futures"}
        onPress={() => router.back()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
        keyboardDismissMode="on-drag"
      >
        <View style={styles.content}>
          <View
            style={{
              width: "100%",
              height: verticalScale(130),
              // borderRadius: verticalScale(20),
              overflow: "hidden",
            }}
          >
            <ImageBackground
              source={images.AboutBG}
              resizeMode="cover"
              style={styles.background}
            />
          </View>
          <View>
            {Object.entries(aboutUsData).map(([key, section], index, arr) => (
              <AboutWrapper
                key={key}
                section={section}
                isLast={index === arr.length - 1}
              />
            ))}
          </View>
          <AboutFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: verticalScale(2),
  },
  content: {
    flexDirection: "column",
    gap: verticalScale(20),
    backgroundColor: "#FFFFFF",
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(20),
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
