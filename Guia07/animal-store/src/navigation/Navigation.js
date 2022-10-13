import React from "react";
import { Dogs } from "../screens/Dogs";
import { Cats } from "../screens/Cats";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Store"
      screenOptions={{ tabBarActiveTintColor: "#43c7e0" }}
    >
      <Tab.Screen
        name="Dogs"
        component={Dogs}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            height: 60,
          },
          tabBarIcon: ({ color, size }) => (
            <>
              <FontAwesome5 color={color} size={size} name="dog" />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Cats"
        component={Cats}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            height: 60,
          },
          tabBarIcon: ({ color, size }) => (
            <>
              <FontAwesome5 color={color} size={size} name="cat" />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
