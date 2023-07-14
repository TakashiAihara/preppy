import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "expo",
  slug: "expo",
  scheme: "expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
    package: "com.t.preppy",
    versionCode: 1,
  },
  extra: {
    eas: {
      projectId: "e32b71b3-3008-4c5a-b8f7-61602b59ea5d",
    },
  },
  plugins: [
    "./expo-plugins/with-modify-gradle.js",
    [
      "expo-barcode-scanner",
      {
        cameraPermission: "Allow $(PRODUCT_NAME) to access camera.",
      },
    ],
  ],
});

export default defineConfig;
