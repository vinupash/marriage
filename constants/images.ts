import WelcomeBG from "@/assets/images/welcome_bg.png";
import SigninBG from "@/assets/images/signin_bg.png";
import ProfileImage from "@/assets/images/profile_image.jpg";
import Profile_1 from "@/assets/images/profile_1.jpg";
import Profile_2 from "@/assets/images/profile_2.jpg";
import Profile_3 from "@/assets/images/profile_3.jpg";
import Profile_4 from "@/assets/images/profile_4.jpg";

export const images = {
  WelcomeBG,
  SigninBG,
  ProfileImage,
  Profile_1,
  Profile_2,
  Profile_3,
  Profile_4,
} as const;

export type ImageName = keyof typeof images;
