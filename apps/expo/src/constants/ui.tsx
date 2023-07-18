import React, { type ReactElement } from "react";
import {
  FontAwesome,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { api, type RouterOutputs } from "~/utils/api";

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
  },
  {
    name: "queue/[id]",
  },
  {
    name: "product",
    icon: <MaterialCommunityIcons name="text-box" size={24} color="black" />,
    label: "Product",
  },
  {
    name: "stock",
    icon: (
      <MaterialCommunityIcons
        name="text-box-multiple"
        size={24}
        color="black"
      />
    ),
    label: "Stock",
  },
  {
    name: "create/stock",
    icon: <MaterialCommunityIcons name="camera-plus" size={24} color="black" />,

    label: "Scan",
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
  },
  {
    name: "tag/[id]",
  },
  {
    name: "ranking/index",
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

export const ExpiryDateType = {
  EXPIRATION_DATE: "消費期限",
  BEST_BEFORE_DATE: "賞味期限",
  MANUAL_DATE: "期限",
};
