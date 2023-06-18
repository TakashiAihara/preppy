import { SafeAreaView, Text, View } from "react-native";
import { SplashScreen, Stack, usePathname, useSearchParams } from "expo-router";

import { api } from "~/utils/api";

const Queue: React.FC = () => {
  const { id } = useSearchParams();
  if (!id || typeof id !== "string") throw new Error("unreachable");
  const { data } = api.queue.byId.useQuery({ id });

  if (!data) return <SplashScreen />;

  return (
    <SafeAreaView className="bg-[#1F104A]">
      <Stack.Screen options={{ title: data.janCode }} />
      <View className="h-full w-full p-4">
        <Text className="py-2 text-3xl font-bold text-white">
          {data.janCode}
        </Text>
        <Text className="py-4 text-white">
          {data.createdAt.toLocaleDateString()}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Queue;
