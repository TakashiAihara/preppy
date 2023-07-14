import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { SplashScreen, Stack, useSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

import { api } from "~/utils/api";
import { ExpiryDateType } from "~/constants/ui";

const QueueId: React.FC = () => {
  const { id } = useSearchParams();
  if (!id || typeof id !== "string") throw new Error("unreachable");
  const { data } = api.stock.byId.useQuery({ id });

  const { createdAt, description, group, quantity, sku, updatedAt } =
    data ?? {};
  const { expiryDate, product } = sku ?? {};
  const { day, month, type, year } = expiryDate ?? {};
  const { categories, janCode, productTags, title, image } = product ?? {}; // TODO: Fix how use categories

  if (!data) return <SplashScreen />;

  return (
    <SafeAreaView className="bg-slate-50">
      <Stack.Screen options={{ title }} />
      <View className="h-full w-full gap-2 text-xl">
        <Text className="text-2xl">{title}</Text>
        <View className="items-center">
          <Image
            className="h-60 w-60"
            alt={`${title} - image`}
            source={{ uri: image ?? "" }}
          />
        </View>
        <Text className="text-xl">{`在庫数: ${quantity} 個`}</Text>
        {description && (
          <Text className="text-xl">{`備考: ${description}`}</Text>
        )}
        <Text className="text-xl">{`JANコード: ${janCode}`}</Text>
        <Text className="text-xl">
          {`追加日時: ${
            createdAt &&
            format(
              utcToZonedTime(createdAt, "Asia/Tokyo"),
              "yyyy/MM/dd HH:mm:ss",
            )
          }`}
        </Text>

        <Text className="text-xl">
          {`更新日時: ${
            updatedAt &&
            format(
              utcToZonedTime(updatedAt, "Asia/Tokyo"),
              "yyyy/MM/dd HH:mm:ss",
            )
          }`}
        </Text>
        <Text className="text-xl">{`${
          ExpiryDateType[type ?? "MANUAL_DATE"]
        }: ${year}/${month}/${day}`}</Text>
        <Text className="text-xl">
          {"カテゴリ: " +
            categories?.map((category) => category.name).join(", ")}
        </Text>
      </View>
      {/* <Stack.Screen name="modal" options={{ presentation: "modal"}} /> */}
    </SafeAreaView>
  );
};

export default QueueId;
