import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Tabs as BottomTabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "~/utils/api";
import { BottomTabsConstants } from "~/constants/ui";

const RootLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <BottomTabs
          backBehavior="order"
          safeAreaInsets={insets}
          screenOptions={{
            lazy: true,
            headerTitle: () => null,
            headerStatusBarHeight: 0,
            headerStyle: { height: 0 },
            tabBarActiveTintColor: "#0000ff",
            tabBarBadge: 3, // defaults? not needed.
            tabBarBadgeStyle: { backgroundColor: "#ff0000" },
            tabBarActiveBackgroundColor: "#ffcc88",
            // tabBarItemStyle: { backgroundColor: "#0000ff" },
            // tabBarStyle: { backgroundColor: "#f472b6" },
            // tabBarIconStyle: { borderStyle: "solid", borderWidth: 1 },
            tabBarLabelStyle: { fontSize: 16 },
          }}
        >
          {BottomTabsConstants.map((tab) => {
            const { name, icon, label } = tab;

            if (icon) {
              return (
                <BottomTabs.Screen
                  name={name}
                  key={name}
                  options={{
                    tabBarIcon: () => icon,
                    tabBarLabel: label,
                    tabBarLabelStyle: {
                      fontWeight: "bold",
                      fontSize: 16,
                    },
                  }}
                />
              );
            } else {
              return (
                <BottomTabs.Screen
                  name={name}
                  key={name}
                  options={{ href: null }}
                />
              );
            }
          })}
        </BottomTabs>
        <StatusBar />
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
