// Import necessary modules from React and Chakra UI
import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";
import "@fontsource/anton";
import "@fontsource/inter";
import Card from "@/components/Card";

// Extend Chakra UI theme with custom fonts and colors
const theme = extendTheme({
  fonts: {
    heading: "Anton",
    body: "Inter",
  },
  colors: {
    brand: {
      blue: "#003049",
      red: "#D62828",
      orange: "#F77F00",
      tan: "#F77F00",
      SKIN: "#EAE2B7",
    },
  },
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
      },
      "#__next": {
        height: "100%",
      },
    },
  },
});

// Main App component
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh" color="black" background="brand.SKIN">
        <Header />

        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

// Example custom header component
const Header = () => (
  <Flex
    as="header"
    justify="space-between"
    align="center"
    p="4"
    bg="brand.orange"
  >
    <Link href="/">
      <Heading fontSize="2xl" cursor="pointer">
        Breadboi
      </Heading>
    </Link>
    <Flex>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/services">Services</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Flex>
  </Flex>
);

// Custom NavLink component
const NavLink = ({ href, children }) => (
  <Link
    href={href}
    px="2"
    py="1"
    rounded="md"
    _hover={{ bg: "gray.200", textDecoration: "none" }}
    ml="2"
  >
    {children}
  </Link>
);
