import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { FlashList } from "@shopify/flash-list";

import { api, type RouterOutputs } from "~/utils/api";

const QueueCard: React.FC<{
  queue: RouterOutputs["queue"]["all"][number];
  // onDelete: () => void;
  // }> = ({ queue, onDelete }) => {
}> = ({ queue }) => {
  const router = useRouter();

  return (
    <View className="flex flex-row rounded-lg bg-white/10 p-4">
      <View className="flex-grow">
        <TouchableOpacity onPress={() => router.push(`/queue/${queue.id}`)}>
          <Text className="text-xl font-semibold text-pink-400">
            {queue.janCode}
          </Text>
          <Text className="mt-2 text-white">
            {queue.createdAt.toLocaleDateString()}
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

  const { mutate, error } = api.queue.create.useMutation({
    async onSuccess() {
      setTitle("");
      setContent("");
      await utils.queue.all.invalidate();
    },
  });

  return (
    <View className="mt-4">
      <TextInput
        className="mb-2 rounded bg-white/10 p-2 text-white"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      {error?.data?.zodError?.fieldErrors.title && (
        <Text className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.title}
        </Text>
      )}
      <TextInput
        className="mb-2 rounded bg-white/10 p-2 text-white"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={content}
        onChangeText={setContent}
        placeholder="Content"
      />
      {error?.data?.zodError?.fieldErrors.content && (
        <Text className="mb-2 text-red-500">
          {error.data.zodError.fieldErrors.content}
        </Text>
      )}
      <TouchableOpacity
        className="rounded bg-pink-400 p-2"
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

const Index = () => {
  const utils = api.useContext();

  const queueQuery = api.queue.all.useQuery();

  // const deleteQueueMutation = api.queue.delete.useMutation({
  //   onSettled: () => utils.queue.all.invalidate(),
  // });

  return (
    <SafeAreaView className="bg-[#1F104A]">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-pink-400">T3</Text> Turbo
        </Text>

        <Button
          onPress={() => void utils.queue.all.invalidate()}
          title="Refresh queues"
          color={"#f472b6"}
        />

        <View className="py-2">
          <Text className="font-semibold italic text-white">
            Press on a queue
          </Text>
        </View>

        <FlashList
          data={queueQuery.data}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <QueueCard
              queue={p.item}
              // onDelete={() => deleteQueueMutation.mutate(p.item.id)}
            />
          )}
        />

        {/* <CreateQueue /> */}
      </View>
    </SafeAreaView>
  );
};

export default Index;
