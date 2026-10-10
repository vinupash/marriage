import WelcomeBG from "@/assets/images/welcome_bg.png";

export const images = {
  WelcomeBG,
} as const;

export type ImageName = keyof typeof images;
