import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react"; 
import { Link } from "react-router-dom";
import { useProductStore } from "../Store/product";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const {products}=useProductStore();
    

    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column", // Stack vertically on small screens
                    sm: "row" // Align horizontally on larger screens
                }}
                py={4} // Add some padding for spacing
            >
                
                <Text
                    bgGradient="linear(to-r, rgb(144, 144, 233), rgb(155, 213, 226))"
                    bgClip="text"
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    textAlign={{ base: "center", sm: "left" }} 
                >
                    <Link to={"/"}>Product Store</Link>
                </Text>

                
                <HStack spacing={2} alignItems={"center"}>
                    
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>

                    {/* Color Mode Button */}
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? "Dark" : "Light"}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;
