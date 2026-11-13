import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Image } from "react-native";

interface ProfileData {
  id: string;
  name: string;
  age: number;
  location: string;
  image: any;
  dob: string;
  height: string;
  education: string;
}

export const downloadProfilePDF = async (profile: ProfileData) => {
  try {
    let imageBase64 = "";

    // Convert local image asset to base64 for PDF
    if (profile.image) {
      const imageAsset = Image.resolveAssetSource(profile.image);

      if (imageAsset?.uri) {
        const response = await fetch(imageAsset.uri);
        const blob = await response.blob();

        imageBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onloadend = () => {
            const result = reader.result as string;
            resolve(result);
          };

          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      }
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            font-family: Arial, sans-serif;
            padding: 25px;
            color: #333333;
            background: #ffffff;
          }

          .header {
            background: #e63157;
            color: white;
            padding: 25px;
            text-align: center;
            border-radius: 12px;
          }

          .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid white;
            margin-bottom: 12px;
          }

          .name {
            font-size: 24px;
            font-weight: bold;
          }

          .subtitle {
            font-size: 13px;
            margin-top: 6px;
          }

          .section {
            margin-top: 25px;
          }

          .section-title {
            font-size: 17px;
            color: #e63157;
            border-bottom: 2px solid #e63157;
            padding-bottom: 8px;
          }

          .detail {
            display: flex;
            padding: 11px 5px;
            border-bottom: 1px solid #eeeeee;
            font-size: 13px;
          }

          .label {
            width: 40%;
            color: #777777;
          }

          .value {
            width: 60%;
            font-weight: bold;
          }

          .footer {
            margin-top: 35px;
            text-align: center;
            color: #888888;
            font-size: 11px;
            border-top: 1px solid #eeeeee;
            padding-top: 15px;
          }
        </style>
      </head>

      <body>

        <div class="header">
          ${
            imageBase64
              ? `<img class="profile-image" src="${imageBase64}" />`
              : ""
          }

          <div class="name">${profile.name}</div>
          <div class="subtitle">Matrimonial Profile</div>
          <div class="subtitle">Sutar Samaj</div>
        </div>

        <div class="section">
          <div class="section-title">Basic Information</div>

          <div class="detail">
            <div class="label">Full Name</div>
            <div class="value">${profile.name}</div>
          </div>

          <div class="detail">
            <div class="label">Age</div>
            <div class="value">${profile.age} Years</div>
          </div>

          <div class="detail">
            <div class="label">Date of Birth</div>
            <div class="value">${profile.dob}</div>
          </div>

          <div class="detail">
            <div class="label">Height</div>
            <div class="value">${profile.height}</div>
          </div>

          <div class="detail">
            <div class="label">Education</div>
            <div class="value">${profile.education}</div>
          </div>

          <div class="detail">
            <div class="label">Location</div>
            <div class="value">${profile.location}</div>
          </div>
        </div>

        <div class="footer">
          Sutar Samaj Matrimony<br />
          Profile information provided by the user.
        </div>

      </body>
      </html>
    `;

    const result = await Print.printToFileAsync({ html });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(result.uri, {
        mimeType: "application/pdf",
        dialogTitle: "Share Matrimonial Profile",
        UTI: "com.adobe.pdf",
      });
    } else {
      await Print.printAsync({ html });
    }

    return result.uri;
  } catch (error) {
    console.error("PDF generation failed:", error);
    throw error;
  }
};
