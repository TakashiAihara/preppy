// import { Asset, useAssets } from "expo-asset";
// import { Audio, AVPlaybackSource } from "expo-av";
import { api } from "~/utils/api";
import {
  BarCodeScanner,
  type BarCodeScannerResult,
} from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

// import { api } from "~/utils/api";

// import * as a from "../../assets/decision29.mp3";

// const [assets, error] = useAssets([require('path/to/asset.jpg'), require('path/to/other.png')]);

// await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

const Scanner: React.FC = () => {
  const utils = api.useContext();

  const { mutate, error } = api.queue.createOrAdd.useMutation({
    async onSuccess() {
      await utils.queue.all.invalidate();
    },
  });

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [canScan, setCanScan] = useState<boolean>(false);
  // const [sound, setSound] = useState();

  // const { sound } = await Audio.Sound.createAsync(
  //   "~/decision29.mp3"
  // );

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
  const handleBarCodeScanned = ({ data }: BarCodeScannerResult) => {
    if (!canScan) {
      return;
    }
    alert(`Scanned ${data}`);
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
