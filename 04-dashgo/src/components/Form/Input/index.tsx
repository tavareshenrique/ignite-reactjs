import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/react';

import { IInputProps } from './@interfaces';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, ...rest },
  ref,
): JSX.Element => {
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
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
