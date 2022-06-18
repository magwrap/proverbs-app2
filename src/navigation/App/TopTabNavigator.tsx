import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabOneScreen from "@/screens/App/TabOneScreen";
import TabTwoScreen from "@/screens/App/TabTwoScreen";

interface TopTabNavigatorProps {}

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Tab1"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarItemStyle: { height: 80 },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "powderblue" },
      }}>
      <Tab.Screen
        name="Tab1"
        component={TabOneScreen}
        options={{ tabBarLabel: "Tab1" }}
      />
      <Tab.Screen
        name="Tab2"
        component={TabTwoScreen}
        options={{ tabBarLabel: "Tab2" }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;

//dodaj
//https://reactnavigation.org/docs/material-top-tab-navigator
