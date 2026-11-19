import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useTourGuide } from "@wrack/react-native-tour-guide";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import BottomSheet from "@gorhom/bottom-sheet";

import Header from "../../../components/header";
import { mockProfiles } from "../../../mocks/profil_data";
import ProfileCard from "../../../components/profilecard";
import FilterButton from "../../../components/filterbutton";
import { Colors } from "../../../constants/theme";

const Home = () => {
  // Profile list
  const [containerHeight, setContainerHeight] = useState(0);

  const verticalPadding = verticalScale(10);
  const profileGap = verticalScale(12);

  const profileHeight = Math.max(0, containerHeight - verticalPadding * 2);

  // Bottom sheet
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["88%"], []);

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Tour guide
  // const { startTour } = useTourGuide();

  // const filterRef = useRef<React.ElementRef<typeof TouchableOpacity>>(null);

  // const [isFilterMounted, setIsFilterMounted] = useState(false);

  // Open filter sheet
  const handleOpenFilter = useCallback(() => {
    sheetRef.current?.snapToIndex(0);
  }, []);

  // Close filter sheet
  const handleCloseFilter = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Header />

      {/* Profile List */}
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
                onPress={() =>
                  router.push({
                    pathname: "/profile/profileview",
                    params: { id: item.id },
                  })
                }
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

      {/* Filter Bottom Sheet */}
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        enableDynamicSizing={false}
        onChange={(index) => {
          setIsSheetOpen(index >= 0);
        }}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.sheetIndicator}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Filter Profiles</Text>

          {/* Add your filter options here */}
        </View>
      </BottomSheet>

      {/* Floating Filter Button  ref={setFilterRef}*/}
      {!isSheetOpen && <FilterButton onPress={handleOpenFilter} />}
    </SafeAreaView>
  );
};

export default Home;

// Styles
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

  sheetBackground: {
    backgroundColor: "#fef7f9",
  },

  sheetIndicator: {
    backgroundColor: Colors.primary,
    width: 45,
  },

  sheetContent: {
    padding: scale(20),
  },

  sheetTitle: {
    fontSize: scale(20),
    fontWeight: "700",
    color: "#222222",
  },
});
