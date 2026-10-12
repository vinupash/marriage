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
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { router } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";

import { images } from "../../../constants/images";
import CustomButton from "../../../components/custombutton";
import CustomInput from "../../../components/custominput";
import Terms from "../../../components/terms";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BackIcon from "../../../components/backicon";

const TermsCondition = () => {
  const [checked, setChecked] = useState(false);

  const termsData = [
    {
      id: 1,
      title: "ॲपचा उद्देश",
      terms: [
        {
          id: 1,
          terms_1:
            "हे ॲप सुतार समाजातील विवाहयोग्य व्यक्तींना योग्य जीवनसाथी शोधण्यासाठी आणि विवाहासंबंधित प्रोफाइल पाहण्यासाठी व्यासपीठ उपलब्ध करून देते.",
        },
      ],
    },
    {
      id: 2,
      title: "पात्रता आणि माहिती",
      terms: [
        {
          id: 1,
          terms_1:
            "ॲप वापरण्यासाठी वापरकर्त्याचे वय भारतातील लागू कायद्यानुसार विवाहासाठी पात्र असणे आवश्यक आहे.",
        },
        {
          id: 2,
          terms_1:
            "वापरकर्त्याने स्वतःची माहिती आणि फोटो योग्य, खरे व अद्ययावत ठेवावेत.",
        },
        {
          id: 3,
          terms_1:
            "खोटी माहिती, बनावट फोटो किंवा दुसऱ्या व्यक्तीची ओळख वापरण्यास मनाई आहे.",
        },
      ],
    },
    {
      id: 3,
      title: "प्रोफाइल माहिती, फसवणूक आणि ॲप प्रशासनाची जबाबदारी",
      terms: [
        {
          id: 1,
          terms_1:
            "हे ॲप विवाहासाठी इच्छुक वधू आणि वर यांची प्रोफाइल माहिती उपलब्ध करून देणारे व्यासपीठ आहे. ॲपचा उद्देश वापरकर्त्यांना विवाहासाठी योग्य स्थळ शोधण्यास मदत करणे हा आहे.",
        },
        {
          id: 2,
          terms_1:
            "ॲपवर प्रदर्शित होणारी प्रोफाइल माहिती, फोटो आणि इतर तपशील संबंधित वापरकर्त्यांनी किंवा त्यांच्या वतीने माहिती भरणाऱ्या व्यक्तींनी दिलेले असतात.",
        },
        {
          id: 3,
          terms_1:
            "ॲप प्रशासन प्रत्येक प्रोफाइलमधील माहिती, व्यक्तीची ओळख, वैवाहिक स्थिती, शिक्षण, नोकरी, उत्पन्न किंवा इतर वैयक्तिक तपशील यांची सत्यता आणि अचूकता यांची हमी देत नाही, जोपर्यंत संबंधित माहितीची पडताळणी स्पष्टपणे करण्यात आलेली नाही.",
        },
        {
          id: 4,
          terms_1:
            "एखाद्या वापरकर्त्याने खोटी माहिती दिली, बनावट ओळख किंवा फोटो वापरले, फसवणूक केली किंवा इतर वापरकर्त्यांची दिशाभूल केली, तर त्या कृतीची जबाबदारी संबंधित व्यक्तीची असेल. केवळ व्यासपीठ उपलब्ध करून दिल्यामुळे अशा प्रत्येक कृतीची जबाबदारी ॲप प्रशासनावर येणार नाही. हे लागू कायद्यांनुसार असलेल्या जबाबदाऱ्यांच्या अधीन राहील.",
        },
        {
          id: 5,
          terms_1:
            "कोणत्याही व्यक्तीशी विवाहासंबंधी चर्चा करण्यापूर्वी किंवा आर्थिक व्यवहार करण्यापूर्वी वापरकर्त्यांनी त्या व्यक्तीची ओळख, वैयक्तिक माहिती आणि संबंधित तपशील स्वतः पडताळून पाहावेत.",
        },
        {
          id: 6,
          terms_1:
            "वापरकर्त्यांनी अनोळखी व्यक्तींना पैसे, OTP, बँक तपशील किंवा इतर गोपनीय माहिती देऊ नये. कोणत्याही संशयास्पद कृतीची माहिती ॲप प्रशासनाला द्यावी.",
        },
        {
          id: 7,
          terms_1:
            "वापरकर्त्यांनी एकमेकांशी केलेल्या संवादाची, भेटींची, आर्थिक व्यवहारांची किंवा विवाहासंबंधी घेतलेल्या निर्णयांची जबाबदारी संबंधित वापरकर्त्यांची असेल. ॲप कोणत्याही स्थळाची सत्यता, विवाह जुळण्याची किंवा विवाह यशस्वी होण्याची हमी देत नाही.",
        },
        {
          id: 8,
          terms_1:
            "बनावट प्रोफाइल, फसवणूक किंवा नियमांचे उल्लंघन आढळल्यास ॲप प्रशासनाला तक्रारीची दखल घेऊन लागू कायदे आणि धोरणांनुसार प्रोफाइल हटवणे, माहिती काढून टाकणे किंवा खाते निलंबित करणे यासारखी आवश्यक कारवाई करण्याचा अधिकार राहील.",
        },
        {
          id: 9,
          terms_1:
            "या अटींचा उद्देश ॲप प्रशासनाची भूमिका स्पष्ट करणे हा आहे. या अटींमुळे लागू कायद्यांनुसार ॲप प्रशासनावर असलेल्या अनिवार्य जबाबदाऱ्या किंवा वापरकर्त्यांचे कायदेशीर अधिकार रद्द किंवा मर्यादित होणार नाहीत.",
        },
      ],
    },
    {
      id: 4,
      title: "वापरकर्त्यांचे वर्तन",
      terms: [
        {
          id: 1,
          terms_1:
            "इतर वापरकर्त्यांना त्रास देणे, धमकावणे, फसवणूक करणे किंवा अनुचित संदेश पाठवणे निषिद्ध आहे.",
        },
        {
          id: 2,
          terms_1:
            "इतर वापरकर्त्यांची वैयक्तिक माहिती किंवा फोटो परवानगीशिवाय गैरवापरासाठी वापरू नयेत.",
        },
      ],
    },
    {
      id: 5,
      title: "गोपनीयता",
      terms: [
        {
          id: 1,
          terms_1:
            "वापरकर्त्यांची वैयक्तिक माहिती ॲपच्या Privacy Policy नुसार हाताळली जाईल.",
        },
        {
          id: 2,
          terms_1:
            "वापरकर्त्यांनी आपला पासवर्ड, OTP आणि इतर गोपनीय माहिती कोणाशीही शेअर करू नये.",
        },
      ],
    },
    {
      id: 6,
      title: "खाते निलंबित करणे किंवा हटवणे",
      terms: [
        {
          id: 1,
          terms_1:
            "वापरकर्ते उपलब्ध सुविधांनुसार खाते हटवण्याची विनंती करू शकतात.",
        },
        {
          id: 2,
          terms_1:
            "नियमांचे उल्लंघन, खोटी माहिती किंवा फसवणूक आढळल्यास ॲप प्रशासन लागू कायदे आणि धोरणांनुसार खाते निलंबित करू शकते.",
        },
      ],
    },
    {
      id: 7,
      title: "जबाबदारी आणि लागू कायदा",
      terms: [
        {
          id: 1,
          terms_1:
            "ॲप जीवनसाथी शोधण्यासाठी व्यासपीठ उपलब्ध करून देते; कोणत्याही स्थळाची सत्यता किंवा विवाह यशस्वी होण्याची हमी देत नाही.",
        },
        {
          id: 2,
          terms_1: "या अटी भारतातील लागू कायद्यांच्या अधीन असतील.",
        },
      ],
    },
    {
      id: 8,
      title: "अटींमधील बदल",
      terms: [
        {
          id: 1,
          terms_1:
            "ॲप प्रशासन वेळोवेळी या अटींमध्ये बदल करू शकते. सुधारित अटी ॲपमध्ये प्रकाशित केल्या जातील.",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
          keyboardDismissMode="on-drag"
        >
          <View style={styles.imageContainer}>
            <BackIcon style={styles.backIcon} onPress={() => router.back()} />
            <ImageBackground
              source={images.SigninBG}
              resizeMode="cover"
              style={styles.background}
            />
          </View>

          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.highlight}>
                अटी व शर्ती (Terms & Conditions)
              </Text>
              <Text style={styles.title}>
                सुतार समाज विवाह मंच या ॲपमध्ये आपले स्वागत आहे. या ॲपचा वापर
                करण्यापूर्वी कृपया खालील अटी व शर्ती काळजीपूर्वक वाचा. या ॲपचा
                वापर करून किंवा खाते तयार करून आपण या अटींशी सहमत असल्याचे मान्य
                करता.
              </Text>
            </View>

            <View>
              {termsData.map((term, index) => (
                <Terms
                  key={term.id}
                  title={term.title}
                  descriptions={term.terms.map((item) => item.terms_1)}
                  isLast={index === termsData.length - 1}
                />
              ))}
            </View>

            <CustomButton
              title="Sign Up"
              // style={styles.footerButton}
              styleGradient={{ borderRadius: verticalScale(10) }}
              onPress={() => router.back()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TermsCondition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: verticalScale(30),
  },
  imageContainer: {
    width: "100%",
    height: verticalScale(250),
    position: "relative",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backIcon: {
    position: "absolute",
    top: verticalScale(40),
    left: verticalScale(20),
    zIndex: 1,
  },
  content: {
    flexDirection: "column",
    gap: verticalScale(20),
    marginTop: -verticalScale(10),
    borderTopLeftRadius: verticalScale(15),
    borderTopRightRadius: verticalScale(15),
    backgroundColor: "#FFFFFF",
    padding: verticalScale(20),
  },
  textContainer: {
    flexDirection: "column",
    gap: verticalScale(5),
  },
  title: {
    fontSize: verticalScale(12),
    lineHeight: verticalScale(18),
    fontFamily: "Poppins-Regular",
    color: "#1A1A1A",
  },
  highlight: {
    fontSize: verticalScale(16),
    lineHeight: verticalScale(22),
    fontFamily: "Poppins-SemiBold",
    color: "#e63157",
  },
});
