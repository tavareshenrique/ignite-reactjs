import { Box, Stack, Text } from '@chakra-ui/react';

import { INavSectionProps } from './@interfaces';

export default function NavSection({
  title,
  children,
}: INavSectionProps): JSX.Element {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
