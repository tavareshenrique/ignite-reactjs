import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';

import { SideBarNav } from './SideBarNav';

export function Sidebar(): JSX.Element {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { isOpen, onClose } = useSidebarDrawer();

  return (
    <>
      {isDrawerSidebar ? (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
              <DrawerCloseButton mt="6" />
              <DrawerHeader>Navegação</DrawerHeader>

              <DrawerBody>
                <SideBarNav />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      ) : (
        <Box as="aside" w="64" mr="8">
          <SideBarNav />
        </Box>
      )}
    </>
  );
}
