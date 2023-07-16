import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

import { type RouterOutputs } from "@acme/api";

import { ExpiryDateType } from "~/constants/ui";

const StockCard: React.FC<{
  stock: RouterOutputs["stock"]["all"][number];
}> = ({ stock }) => {
  const router = useRouter();

  const { createdAt, quantity, description, sku, id } = stock;
  const { expiryDate, product } = sku;
  const { title, image, categories } = product;
  const { day, month, year, type } = expiryDate ?? {};

  return (
    <TouchableOpacity onPress={() => router.push(`/stock/${id}`)}>
      <View className="w-screen flex-row">
        <View className="h-20 w-20">
          {image && (
            <Image
              alt={`${title} - image`}
              className="h-20 w-20 rounded-xl"
              source={{ uri: image }}
            />
          )}
        </View>
        <View className="w-full flex-col gap-4 px-2">
          <View className="flex-col">
            <View className="flex-row items-center gap-1">
              <MaterialCommunityIcons
                name="camera-plus"
                size={22}
                color="black"
              />
              <Text className="font-bold text-gray-500">{title}</Text>
            </View>
            <View className="flex-row items-center gap-x-4">
              <Text className="text-gray-500">{`${quantity} 個`}</Text>
              <Text className="text-gray-500">{`${
                ExpiryDateType[type ?? "MANUAL_DATE"]
              }: ${year}/${month}/${day}`}</Text>
              <Text className="text-gray-500">
                {`追加日時: ${format(
                  utcToZonedTime(createdAt, "Asia/Tokyo"),
                  "yyyy/MM/dd HH:mm:ss",
                )}`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StockCard;
