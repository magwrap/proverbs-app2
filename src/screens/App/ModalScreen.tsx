import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform } from "react-native";
import { Paragraph } from "react-native-paper";

interface ModalScreenProps {
  navigation: any;
}

const ModalScreen: React.FC<ModalScreenProps> = ({ navigation }) => {
  return (
    <Paragraph>
      Modal
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Paragraph>
  );
};

export default ModalScreen;
