import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalSearchParams } from "expo-router";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

import { api } from "~/utils/api";
import { ExpiryDateType } from "~/constants/ui";

const QueueId: React.FC = () => {
  const { id } = useGlobalSearchParams();
  if (!id || typeof id !== "string") throw new Error("unreachable");
  const { data } = api.stock.byId.useQuery({ id });

  const { createdAt, description, group, quantity, sku, updatedAt } =
    data ?? {};
  const { expiryDate, product } = sku ?? {};
  const { day, month, type, year } = expiryDate ?? {};
  const { categories, janCode, productTags, title, image } = product ?? {}; // TODO: Fix how use categories

  return (
    <SafeAreaView>
      <View className="h-full w-full gap-2 text-xl">
        <Text className="text-2xl">{title}</Text>
        <View className="items-center">
          {image && (
            <Image
              className="h-60 w-60"
              alt={`${title} - image`}
              source={{ uri: image ?? "" }}
            />
          )}
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
    </SafeAreaView>
  );
};

export default QueueId;
