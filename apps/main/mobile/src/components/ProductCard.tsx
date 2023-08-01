import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import {
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Pressable,
  Stack,
  Text,
  VStack,
} from "native-base";

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
    <Pressable onPress={() => router.push(`/stock/${id}`)}>
      <Center>
        <Container w="100%" p={2}>
          <HStack space={2} justifyContent={"center"}>
            {image && (
              <Image
                source={{
                  uri: image,
                }}
                h={100}
                w={100}
                rounded="xl"
                alignContent={"center"}
                alt="image"
                width={"25%"}
              />
            )}
            <VStack p="1" space={1} w="full">
              <Stack space={1}>
                <Heading size="sm">{title}</Heading>
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
              </Stack>
            </VStack>
          </HStack>
        </Container>
      </Center>
    </Pressable>
  );
};

export default StockCard;
