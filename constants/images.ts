import WelcomeBG from "@/assets/images/welcome_bg.png";
import SigninBG from "@/assets/images/signin_bg.png";

export const images = {
  WelcomeBG,
  SigninBG,
} as const;

export type ImageName = keyof typeof images;
