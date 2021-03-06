import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function RelatedImages({ dataList }) {
  const borderColor = useColorModeValue("white", "black");

  return (
    <Box
      w={["100%", "100%"]}
      textAlign={["center", "center", "center", "left"]}
      pt={15}
      mb={5}
      mr={["auto"]}
      pl={[0, "auto", "auto", "8"]}
      // flexDir={'row'}
      // flexWrap={'wrap'}
    >
      <Box mb={2} ml={4}>
        <Heading as={"h3"} fontSize={"large"} mt={5}>
          Related Images
        </Heading>
      </Box>
      <Flex
        overflowY={"hidden"}
        overflowX={["scroll", "hidden"]}
        justifyContent={["flex-start", "center", "center", "flex-start"]}
      >
        {dataList.map((data, index) => (
          <Link href={`/park/${data.slug}`} key={index}>
            <a>
              <Box
                minW="20%"
                m={2}
                display="inline-block"
                rounded={"lg"}
                height={100}
                overflow={"hidden"}
                border={`1px solid ${borderColor}`}
                _hover={{ border: `1px solid #777` }}
              >
                <Image
                  key={index}
                  src={`https://${process.env.NEXT_PUBLIC_IMG_HOST_DOMAIN}/${data.imageName}`}
                  alt={data.parkName || "image"}
                  layout={"fixed"}
                  width={150}
                  height={100}
                  objectFit={"cover"}
                />
              </Box>
            </a>
          </Link>
        ))}
      </Flex>
    </Box>
  );
}
