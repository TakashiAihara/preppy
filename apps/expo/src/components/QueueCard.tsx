import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

import { type RouterOutputs } from "@acme/api";

const QueueCard: React.FC<{
  queue: RouterOutputs["queue"]["all"][number];
  // onDelete: () => void;
  // }> = ({ queue, onDelete }) => {
}> = ({ queue }) => {
  const router = useRouter();
  const { jan, createdAt, quantity, janCode, id } = queue;
  const { candidates } = jan;

  return (
    <TouchableOpacity onPress={() => router.push(`/queue/${id}`)}>
      <View className="flex flex-row border-b-2 border-b-gray-300 bg-opacity-50 p-1">
        <View className="flex flex-row items-center gap-4">
          <FontAwesome name="barcode" size={24} color="black" />
          <Text className="text-xl font-semibold">{janCode}</Text>
          <MaterialCommunityIcons name="camera-plus" size={24} color="black" />
          <Text className="text-gray-900">
            {format(
              utcToZonedTime(createdAt, "Asia/Tokyo"),
              "yyyy-MM-dd HH:mm:ss",
            )}
          </Text>
          <FontAwesome5 name="boxes" size={24} color="black" />
          <Text className="text-gray-900">{`${quantity} 個`}</Text>
          <Text className="text-gray-900">
            {candidates[0]?.title || (
              <View className="h-1 w-1 rounded-full border-4 border-blue-500 border-t-transparent"></View>
            )}
          </Text>
        </View>
        {/* <TouchableOpacity onPress={onDelete}> */}
        <View>
          <TouchableOpacity>
            <Text className="font-bold uppercase text-red-400">Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QueueCard;
