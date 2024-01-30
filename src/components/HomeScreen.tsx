import { Grid, VStack } from "@chakra-ui/react";
import React from "react";
import TopBarComponent from "./TopBarComponent";

const HomeScreen = () => {
  return (
    <VStack padding={"12px"}>
      <TopBarComponent />
      <h2>Body</h2>
    </VStack>
  );
};

export default HomeScreen;
