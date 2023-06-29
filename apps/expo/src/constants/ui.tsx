import React, { type ReactElement } from "react";
import {
  FontAwesome,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export type BottomTabType = {
  name: string;
  icon?: ReactElement;
  label?: string;
};

export const BottomTabsConstants: BottomTabType[] = [
  {
    name: "index",
  },
  {
    name: "queue/index",
    icon: <MaterialIcons name="queue" size={26} />,
    label: "Queue",
  },
  {
    name: "queue/[id]",
  },
  {
    name: "product/index",
  },
  {
    name: "product/[id]",
  },
  {
    name: "stock/index",
    icon: <FontAwesome5 name="boxes" size={26} />,
    label: "Stock",
  },
  {
    name: "stock/[id]",
  },
  {
    name: "sku/index",
  },
  {
    name: "sku/[id]",
  },
  {
    name: "expiryDate/index",
  },
  {
    name: "expiryDate/[id]",
  },
  {
    name: "jan/index",
  },
  {
    name: "jan/[code]",
  },
  {
    name: "group/index",
    icon: <MaterialCommunityIcons name="file-tree" size={26} />,
    label: "Group",
  },
  {
    name: "group/[id]",
  },
  {
    name: "task/index",
  },
  {
    name: "task/[id]",
  },
  {
    name: "tag/index",
    icon: <FontAwesome name="tags" size={26} />,
    label: "Tag",
  },
  {
    name: "tag/[id]",
  },
  {
    name: "ranking/index",
    icon: <MaterialCommunityIcons name="podium" size={26} />,
    label: "Ranking",
  },
  {
    name: "mypage/index",
    icon: <Fontisto name="person" size={26} />,
    label: "My Page",
  },
  {
    name: "mypage/account",
  },
  {
    name: "mypage/settings",
  },
  {
    name: "mypage/help",
  },
  {
    name: "mypage/contact",
  },
  {
    name: "mypage/about",
  },
  {
    name: "mypage/donation",
  },
];