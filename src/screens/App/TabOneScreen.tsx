import Center from "@/components/Center";
import DarkThemeSwitch from "@/components/DarkThemeSwitch";
import * as React from "react";
import { Button, Divider, Title } from "react-native-paper";

interface TabOneScreenProps {
  navigation: any;
}

const TabOneScreen: React.FC<TabOneScreenProps> = ({ navigation }) => {
  return (
    <Center>
      <Title>Tab One</Title>
      <Button mode="contained">Press Me</Button>
      <Divider />
      <DarkThemeSwitch />
    </Center>
  );
};

export default TabOneScreen;
