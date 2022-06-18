import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabOneScreen from "@/screens/App/TabOneScreen";
import TabTwoScreen from "@/screens/App/TabTwoScreen";

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {}

const DrawerNavigator: React.FC<DrawerNavigatorProps> = ({}) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab1" component={TabOneScreen} />
      <Drawer.Screen name="Tab2" component={TabTwoScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
