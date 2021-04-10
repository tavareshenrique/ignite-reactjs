import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';

import { RiMenuLine } from 'react-icons/ri';
import { Logo } from './Logo';
import { SearchBox } from './SearchBox';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';

export function Header(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
