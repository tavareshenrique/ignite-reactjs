import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/react';

import { IInputProps } from './@interfaces';

export function Input({ name, label, ...rest }: IInputProps): JSX.Element {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
