import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { Audio } from "expo-av";
import { type Sound } from "expo-av/build/Audio";
import {
  BarCodeScanner,
  type BarCodeScannerResult,
} from "expo-barcode-scanner";

import { api } from "~/utils/api";

// import * as a from "../../assets/decision29.mp3";
// import a from "../../assets/decision29.mp3";

// await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

const Scanner: React.FC = () => {
  const utils = api.useContext();
  const [sound, setSound] = useState<Sound>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [canScan, setCanScan] = useState<boolean>(false);

  const { mutate, error } = api.queue.createOrAdd.useMutation({
    async onSuccess() {
      await utils.queue.all.invalidate();
    },
  });

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/decision29.mp3"),
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCanScan(true), 1500);
    return () => clearInterval(id);
  }, [canScan]);

  // TODO: Reject unsupported type
  const handleBarCodeScanned = async ({ data }: BarCodeScannerResult) => {
    if (!canScan) {
      return;
    }
    alert(`Scanned ${data}`);
    await playSound();
    mutate({ code: data, quantity: 1 });
    setCanScan(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View className="mt-1">
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        className="h-48 w-full bg-slate-950"
      />
      {/* <Button
        onPress={() => setScanned(false)}
        title="Tap to Scan"
        color={"#f472b6"}
      /> */}
    </View>
  );
};

export default Scanner;
