import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";

import { api, type RouterOutputs } from "../utils/api";

const QueueCard: React.FC<{
  queue: RouterOutputs["queue"]["all"][number];
  onPress: () => void;
  //   onDelete: () => void;
  // }> = ({ queue, onPress, onDelete }) => {
}> = ({ queue, onPress }) => {
  return (
    <View className="flex flex-row rounded-lg bg-white/10 p-4">
      <View className="flex-grow">
        <TouchableOpacity onPress={onPress}>
          <Text
            className={`text-xl font-semibold text-[#cc66ff] ${
              !queue.janCode ? "italic" : ""
            }`}
          >
            {queue.janCode || "Untitled"}
          </Text>
          <Text
            className={`mt-2 text-white ${!queue.createdAt ? "italic" : ""}`}
          >
            {queue.createdAt.toLocaleDateString() || "No content"}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={onDelete}>
        <Text className="font-bold uppercase text-pink-400">Delete</Text>
      </TouchableOpacity> */}
    </View>
  );
};

/*
const CreateQueue: React.FC = () => {
  const utils = api.useContext();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const { mutate } = api.queue.create.useMutation({
    async onSuccess() {
      setTitle("");
      setContent("");
      await utils.queue.all.invalidate();
    },
  });

  return (
    <View className="flex flex-col p-4">
      <TextInput
        className="mb-2 rounded bg-white/10 p-2 text-white"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        className="mb-2 rounded bg-white/10 p-2 text-white"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={content}
        onChangeText={setContent}
        placeholder="Content"
      />
      <TouchableOpacity
        className="rounded bg-[#cc66ff] p-2"
        onPress={() => {
          mutate({
            title,
            content,
          });
        }}
      >
        <Text className="font-semibold text-white">Publish queue</Text>
      </TouchableOpacity>
    </View>
  );
};

*/

export const HomeScreen = () => {
  const queueQuery = api.queue.all.useQuery();
  const [showQueue, setShowQueue] = React.useState<string | null>(null);

  // const deleteQueueMutation = api.queue.delete.useMutation({
  //   onSettled: () => queueQuery.refetch(),
  // });

  return (
    <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-[#cc66ff]">T3</Text> Turbo
        </Text>

        <Button
          onPress={() => void queueQuery.refetch()}
          title="Refresh queues"
          color={"#cc66ff"}
        />

        <View className="py-2">
          {showQueue ? (
            <Text className="text-white">
              <Text className="font-semibold">Selected queue: </Text>
              {showQueue}
            </Text>
          ) : (
            <Text className="font-semibold italic text-white">
              Press on a queue
            </Text>
          )}
        </View>

        <FlashList
          data={queueQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <QueueCard
              queue={p.item}
              onPress={() => setShowQueue(p.item.id)}
              // onDelete={() => deleteQueueMutation.mutate(p.item.id)}
            />
          )}
        />

        {/* <CreateQueue /> */}
      </View>
    </SafeAreaView>
  );
};
