import { Box, HStack, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";
import PreviewItem from "./PreviewItem";

const PreviewSampleComponent = () => {
  return (
    <Box w={"60%"} bg={"#2D3748"} padding={6} borderRadius="lg">
      <PreviewItem name="Trip to Brazil" progress={64} />
      <PreviewItem name="Buy a car" progress={9} />
      <PreviewItem name="Get a new computer" progress={89} />
    </Box>
  );
};

export default PreviewSampleComponent;
