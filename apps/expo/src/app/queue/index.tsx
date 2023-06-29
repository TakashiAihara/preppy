import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { FlashList } from "@shopify/flash-list";

import { api } from "~/utils/api";
import QueueCard from "~/components/QueueCard";
import Scanner from "~/components/Scanner";

const QueueIndex = () => {
  const utils = api.useContext();

  const queueQuery = api.queue.all.useQuery();

  // const deleteQueueMutation = api.queue.delete.useMutation({
  //   onSettled: () => utils.queue.all.invalidate(),
  // });

  return (
    <SafeAreaView className="bg-slate-50">
      <Stack.Screen options={{ title: "Preppy" }} />
      <View className="h-full w-full">
        {/* <TouchableOpacity
          className="w-full bg-amber-300 p-1"
          onPress={() => void utils.queue.all.invalidate()}
        >
          <Text className="text-xl">Refresh Queues</Text>
        </TouchableOpacity> */}

        <FlashList
          data={queueQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="m-0.5" />}
          renderItem={(p) => (
            <QueueCard
              queue={p.item}
              // onDelete={() => deleteQueueMutation.mutate(p.item.id)}
            />
          )}
        />

        <Scanner />
      </View>
    </SafeAreaView>
  );
};

export default QueueIndex;
