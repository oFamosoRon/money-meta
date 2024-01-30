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
import Logo from "./Logo";

const TopBarComponent = () => {
  return (
    <HStack justifyContent={"space-between"} width="100%">
      <Logo />
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
