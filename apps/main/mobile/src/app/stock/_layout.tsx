import React from "react";
import { Stack } from "expo-router";

const StockLayout = () => {
  return <Stack screenOptions={{ header: () => null, animation: "none" }} />;
};

export default StockLayout;
