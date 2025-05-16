import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useToast
} from "@chakra-ui/react";
import { useProductStore } from "../Store/product";

const ProductCard = ({ product, onEdit }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteProduct } = useProductStore();
  const toast = useToast();
  const usdToInr = 83.5;

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error', // fixed typo: was 'erroe'
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
        ₹{(product.price).toFixed(2)}
        </Text>
        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            onClick={() => onEdit(product)} // Added support for editing callback
            colorScheme="blue"
            aria-label="Edit Product"
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)} // fixed: was product._idt
            colorScheme="red"
            aria-label="Delete Product"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
