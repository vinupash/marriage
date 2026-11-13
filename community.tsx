import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale } from "react-native-size-matters";

import ScreenNavbar from "./components/screennavbar";
import { images } from "./constants/images";
import { Colors, Shadows } from "./constants/theme";
import { Image } from "expo-image";

const Community = () => {
  const aboutData = [
    {
      id: "1",
      image: images.WelcomeBG,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "2",
      image: images.WelcomeBG,
      description:
        "नाती जुळवूया, भविष्य घडवूया. आपल्या समाजातील योग्य स्थळांची माहिती मिळवण्यासाठी हे व्यासपीठ तयार केले आहे.",
    },
    {
      id: "3",
      image: images.WelcomeBG,
      description:
        "नाती जुळवूया, भविष्य घडवूया. आपल्या समाजातील योग्य स्थळांची माहिती मिळवण्यासाठी हे व्यासपीठ तयार केले आहे.",
    },
    {
      id: "4",
      image: images.WelcomeBG,
      description:
        "नाती जुळवूया, भविष्य घडवूया. आपल्या समाजातील योग्य स्थळांची माहिती मिळवण्यासाठी हे व्यासपीठ तयार केले आहे. 123",
    },
    {
      id: "5",
      image: images.WelcomeBG,
      description:
        "नाती जुळवूया, भविष्य घडवूया. आपल्या समाजातील योग्य स्थळांची माहिती मिळवण्यासाठी हे व्यासपीठ तयार केले आहे. 1",
    },
  ];

  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof aboutData)[number];
    index: number;
  }) => {
    return (
      <View
        style={[
          styles.card,
          {
            marginBottom:
              index === aboutData.length - 1 ? 0 : verticalScale(20),
          },
        ]}
      >
        <Image
          source={item.image}
          contentFit="cover"
          transition={300}
          style={styles.image}
        />

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScreenNavbar
        screenTitle="About Us"
        screenSubTitle="Building Relationships, Creating Futures"
        onPress={() => router.back()}
      />

      <FlatList
        data={aboutData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={false}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        // ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingHorizontal: verticalScale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
  },

  card: {
    width: "100%",
    borderRadius: verticalScale(10),
    backgroundColor: Colors.white,
    overflow: "hidden",
    ...Shadows.small,
  },

  image: {
    width: "100%",
    height: verticalScale(130),
  },

  descriptionContainer: {
    paddingHorizontal: verticalScale(5),
    paddingVertical: verticalScale(5),
  },

  description: {
    color: Colors.black,
    fontSize: verticalScale(12),
  },
});
