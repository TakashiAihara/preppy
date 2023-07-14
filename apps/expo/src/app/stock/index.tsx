import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { FlashList } from "@shopify/flash-list";

import { api } from "~/utils/api";
import Scanner from "~/components/Scanner";
import StockCard from "~/components/StockCard";

const StockIndex = () => {
  const utils = api.useContext();

  const stockQuery = api.stock.all.useQuery();

  // const deleteStockMutation = api.stock.delete.useMutation({
  //   onSettled: () => utils.stock.all.invalidate(),
  // });
  const { data } = stockQuery;

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Preppy" }} />
      <View className="h-full w-full overflow-y-scroll">
        {/* <TouchableOpacity
          className="w-full bg-amber-300 p-1"
          onPress={() => void utils.stock.all.invalidate()}
        >
          <Text className="text-xl">Refresh Stocks</Text>
        </TouchableOpacity> */}

        <FlashList
          data={data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => (
            <View className="m-1 border-b-2 border-b-gray-200" />
          )}
          renderItem={(p) => (
            <StockCard
              stock={p.item}
              // onDelete={() => deleteStockMutation.mutate(p.item.id)}
            />
          )}
        />

        <Scanner />
      </View>
    </SafeAreaView>
  );
};

export default StockIndex;
