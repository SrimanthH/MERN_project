import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../Store/product';
import ProductCard from '../Components/ProductCard'; // Ensure default export is used here

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient="linear(to-r, rgb(56, 207, 83), rgb(107, 213, 237))"
          bgClip="text"
          fontSize="30"
          fontWeight="bold"
          textTransform="uppercase"
          textAlign={{ base: "center", sm: "left" }}
        >
          <Link to="/">Product Store</Link>
        </Text>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w="full"
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500">
            No Products found{" "}
            <Link to="/create">
              <Text as="span" color="blue.500" _hover={{ textDecoration: "underline" }}>
                Add a new Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
