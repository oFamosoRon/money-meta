import { Grid, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import TopBarComponent from "./TopBarComponent";
import BodyComponent from "./BodyComponent";

const HomeScreen = () => {
  const [isHome, setHome] = useState(true);

  return (
    <VStack padding={"12px"}>
      <TopBarComponent setCurrentTab={setHome} />
      {isHome ? <BodyComponent /> : <h1>body</h1>}
    </VStack>
  );
};

export default HomeScreen;
