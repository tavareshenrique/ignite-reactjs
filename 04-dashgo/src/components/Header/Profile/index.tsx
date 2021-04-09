import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { IProfileProps } from './@interfaces';

export function Profile({
  showProfileData = true,
}: IProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Henrique Tavares</Text>
          <Text color="gray.300" fontSize="small">
            ihenrits@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Henrique Tavares"
        src="https://github.com/tavareshenrique.png"
      />
    </Flex>
  );
}
