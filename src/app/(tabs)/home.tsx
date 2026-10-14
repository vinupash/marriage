import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

import Header from "../../../components/header";
import { mockProfiles } from "../../../mocks/profil_data";
import ProfileCard from "../../../components/profilecard";
import Advertising from "../../../components/advertising";

const Home = () => {
  const [containerHeight, setContainerHeight] = useState(0);

  const verticalPadding = verticalScale(15);
  const profileGap = verticalScale(12);
  const profileHeight = Math.max(0, containerHeight - verticalPadding * 2);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Header />
      <Advertising />
      <View
        style={[
          styles.profileImageWrapper,
          { paddingVertical: verticalPadding },
        ]}
        onLayout={(event) => {
          setContainerHeight(event.nativeEvent.layout.height);
        }}
      >
        {profileHeight > 0 && (
          <FlatList
            data={mockProfiles ?? []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProfileCard
                name={item.name}
                image={item.image}
                height={profileHeight}
                age={item.age}
              />
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>No Profiles Found</Text>
                <Text style={styles.emptySubtitle}>
                  There are no profiles available right now. Please check back
                  later.
                </Text>
              </View>
            }
            contentContainerStyle={
              mockProfiles?.length ? undefined : { flexGrow: 1 }
            }
            ItemSeparatorComponent={() => (
              <View style={{ height: profileGap }} />
            )}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            snapToInterval={profileHeight + profileGap}
            snapToAlignment="start"
            decelerationRate="fast"
            disableIntervalMomentum
            getItemLayout={(_, index) => ({
              length: profileHeight + profileGap,
              offset: index * (profileHeight + profileGap),
              index,
            })}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  profileImageWrapper: {
    flex: 1,
    paddingHorizontal: scale(15),
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(20),
  },
  emptyTitle: {
    fontSize: scale(18),
    fontFamily: "Poppins-SemiBold",
    color: "#222222",
    textAlign: "center",
  },
  emptySubtitle: {
    marginTop: verticalScale(8),
    fontSize: scale(13),
    color: "#777777",
    textAlign: "center",
  },
});
