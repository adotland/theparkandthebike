import { Box, Flex } from "@chakra-ui/layout";
import { useColorModeValue, Link } from "@chakra-ui/react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const isHomepage = router.pathname === "/";
  const bgGradientColor = useColorModeValue(
    "linear(to-t, #cad2d3, transparent)",
    "linear(to-t, blackAlpha.300, transparent)"
  );
  const bgSolidColor = useColorModeValue(
    "linear(to-t, whiteAlpha.200, whiteAlpha.200)",
    "linear(to-t, blackAlpha.300, blackAlpha.300)"
  );
  return (
    <Box
      color={useColorModeValue("gray.900", "gray.300")}
      bgGradient={isHomepage ? bgSolidColor : bgGradientColor }
    >
      <Flex
        pt={isHomepage ? 0 : 5}
        px={10}
        justifyContent={"space-between"}
        height={"6rem"}
        alignItems={"center"}
        maxWidth="1492px"
        m="auto"
      >
        &copy; {new Date().getFullYear()} TheParkAndTheBike
        <Flex justifyContent={"flex-end"}>
          <Box ml={5}>
            <Link
              href="https://twitter.com/TheParkAndTheB1"
              target={"_blank"}
              title="twitter"
            >
              <BsTwitter />
            </Link>
          </Box>
          <Box ml={5}>
            <Link
              href="https://github.com/adotland"
              target={"_blank"}
              title="github"
            >
              <BsGithub />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
