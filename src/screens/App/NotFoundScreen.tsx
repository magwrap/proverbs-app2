import Center from "@/components/Center";
import * as React from "react";
import { Button } from "react-native";
import { Text } from "react-native";

interface NotFoundScreenProps {
  navigation: any;
}

const NotFoundScreen: React.FC<NotFoundScreenProps> = ({ navigation }) => {
  return (
    <Center>
      <Text>This screen doesn't exist.</Text>

      <Button
        icon="arrow"
        mode="contained"
        onPress={() => navigation.replace("Root")}>
        Go to home screen!
      </Button>
    </Center>
  );
};

export default NotFoundScreen;
