import {
  Box,
  Button,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import logo from "../assets/money-meta-logo.jpeg";

const TopBarComponent = () => {
  return (
    <HStack justifyContent={"space-between"} width="100%">
      <Box borderRadius="full" overflow="hidden" boxSize="90px">
        <Image src={logo} objectFit="cover" boxSize="100%" />
      </Box>
      <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab>Home</Tab>
          <Tab>How it works</Tab>
        </TabList>
      </Tabs>
      <div>
        <Button colorScheme="purple" variant="solid" margin={2}>
          Sign in
        </Button>
        <Button colorScheme="purple" variant="outline">
          Sign up
        </Button>
      </div>
    </HStack>
  );
};

export default TopBarComponent;
