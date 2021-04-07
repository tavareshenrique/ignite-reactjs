import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

import { Sidebar } from 'components/Sidebar';
import { Pagination } from 'components/Pagination';

export default function UsersList(): JSX.Element {
  return (
    <Box>
      <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar Novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th width="40" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Henrique Tavares</Text>
                    <Text fontSize="sm" color="gray.300">
                      ihenrits@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>07 de Abril, 2021</Td>
                <Td>
                  <Box
                    display="flex"
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
                      <Icon as={RiPencilLine} fontSize="20" />
                    </Button>
                    <Button as="a" size="sm" fontSize="sm" colorScheme="red">
                      <Icon as={RiDeleteBinLine} fontSize="20" />
                    </Button>
                  </Box>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
