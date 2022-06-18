import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import TabOneScreen from "@/screens/App/TabOneScreen";
import TabTwoScreen from "@/screens/App/TabTwoScreen";

const Tab = createMaterialBottomTabNavigator();

interface BottomTabNavigatorProps {}

const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({}) => {
  return (
    <Tab.Navigator initialRouteName="Tab1">
      <Tab.Screen
        name="Tab1"
        component={TabOneScreen}
        options={{
          tabBarLabel: "Tab1",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={TabTwoScreen}
        options={{
          tabBarLabel: "Tab2",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
