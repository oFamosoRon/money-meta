import {
  Box,
  Button,
  HStack,
  Image,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import Logo from "./Logo";

interface Props {
  setCurrentTab: (isHome: boolean) => void;
}

const TopBarComponent = ({ setCurrentTab }: Props) => {
  return (
    <HStack justifyContent={"space-between"} width="100%">
      <Logo />
      <Tabs
        variant="soft-rounded"
        colorScheme="purple"
        onChange={(event: number) => {
          if (event === 0) return setCurrentTab(true);
          return setCurrentTab(false);
        }}
      >
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
