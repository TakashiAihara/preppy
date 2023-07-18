import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio } from "expo-av";
import { type Sound } from "expo-av/build/Audio";
import {
  BarCodeScanner,
  type BarCodeScannerResult,
} from "expo-barcode-scanner";
import { FlashList } from "@shopify/flash-list";
import {
  CheckIcon,
  HStack,
  Radio,
  Select,
  Stack,
  Text,
  VStack,
} from "native-base";

import { api } from "~/utils/api";
import Scanner from "~/components/Scanner";
import StockCard from "~/components/StockCard";
import { ExpiryDateType } from "~/constants/ui";

const StockIndex = () => {
  const utils = api.useContext();
  const [sound, setSound] = useState<Sound>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [canScan, setCanScan] = useState<boolean>(false);
  const [expiryDateType, setExpiryDateType] =
    useState<keyof typeof ExpiryDateType>("BEST_BEFORE_DATE");
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [date, setDate] = useState<number>(new Date().getDate());

  const { mutate, error } = api.stock.createOrAddQuantity.useMutation({
    async onSuccess() {
      await utils.stock.all.invalidate();
    },
  });

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/decision29.mp3"),
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
    setCanScan(false);
    alert(`Scanned ${data}`);
    await playSound();
    mutate({
      janCode: data,
      quantity: 1,
      expiryDate: {
        type: expiryDateType,
        year,
        month,
        day: date,
      },
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleStringNumberValueChange = (setter: React.SetStateAction<any>) => {
    return (itemValue: string) => {
      setter(Number(itemValue));
    };
  };

  return (
    <SafeAreaView>
      <VStack>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          className="h-5/6 w-full bg-slate-950"
        />
        <HStack p={5}>
          <Select
            selectedValue={expiryDateType}
            minWidth="100"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setExpiryDateType(itemValue)}
          >
            {Object.keys(ExpiryDateType).map((item) => (
              <Select.Item label={ExpiryDateType[item]} value={item} />
            ))}
          </Select>
          <Select
            selectedValue={String(year)}
            minWidth="100"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={handleStringNumberValueChange(setYear)}
          >
            {Array.from(
              { length: 41 },
              (_, i) => new Date().getFullYear() - 20 + i,
            ).map((i) => (
              <Select.Item label={`${i + 1}`} value={`${i + 1}`} />
            ))}
          </Select>
          <Select
            selectedValue={String(month)}
            minWidth="100"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={handleStringNumberValueChange(setMonth)}
          >
            {[...Array(12)].map((_, i) => (
              <Select.Item label={`${i + 1}`} value={`${i + 1}`} />
            ))}
          </Select>
          <Select
            selectedValue={String(date)}
            minWidth="100"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={handleStringNumberValueChange(setDate)}
          >
            {[...Array(31)].map((_, i) => (
              <Select.Item label={`${i + 1}`} value={`${i + 1}`} />
            ))}
          </Select>
        </HStack>
        {/* <Button
        onPress={() => setScanned(false)}
        title="Tap to Scan"
        color={"#f472b6"}
      /> */}
      </VStack>
    </SafeAreaView>
  );
};

export default StockIndex;
