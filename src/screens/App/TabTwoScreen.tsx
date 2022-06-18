import Center from "@/components/Center";
import * as React from "react";
import { Divider, Title } from "react-native-paper";

interface TabTwoScreenProps {
  navigation: any;
}

const TabTwoScreen: React.FC<TabTwoScreenProps> = ({ navigation }) => {
  return (
    <Center>
      <Title>Tab Two</Title>
      <Divider />
    </Center>
  );
};

export default TabTwoScreen;
