import { Grid, VStack } from "@chakra-ui/react";
import React from "react";
import TopBarComponent from "./TopBarComponent";
import BodyComponent from "./BodyComponent";

const HomeScreen = () => {
  return (
    <VStack padding={"12px"}>
      <TopBarComponent />
      <BodyComponent />
    </VStack>
  );
};

export default HomeScreen;
