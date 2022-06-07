import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

import { ff } from "fssf";
import Stats from "../components/Stats";
import SEO from "../components/SEO/general";

function getTypeAmount(type, list) {
  let amount = 0;
  list.forEach(data => {
    if (data.slug.indexOf(`${type}_`) === 0) {
      amount++;
    }
  });
  return amount;
}

export async function getStaticProps() {
  const collectionList = await ff.readJson('./cms/data/live/data', 'enabled_collections.json');
  const dataObj = {};
  const statsObj = {
    amount: {
      all: 0
    }
  };
  await Promise.all(collectionList.map(async collection => {
    const data = await ff.readJson(ff.path(`./cms/data/live/data/${collection}_data.json`))
    dataObj[collection] = data.filter(d => d.ext === 'jpg');
    const singleImageList = dataObj[collection];
    statsObj['amount'][collection] = singleImageList.length;
    statsObj['amount'].all += singleImageList.length;
  }));
  statsObj['amount'].port = getTypeAmount('port', dataObj['extras']);
  statsObj['amount'].extras -= statsObj['amount'].port;

  return { props: { statsObj, } };
}

export default function ({ statsObj }) {
  return (
    <>
      <SEO />
      <Box
        mx={4}
        mt={[4, 14, 14, 4]}
      >
        <Stats stats={statsObj} />
      </Box>
      <Box my={30} mx={'auto'} maxW={["90%", "90%", "90%", "50%"]}>
        <Text mb={2}>I got more serious about cycling in 2020 as a way to get exercise and explore the city, and got the idea to ride to every park in the Seattle. I was a little surprised to find there was well over four hundred.</Text>

        <Text mb={2}>Along the way, I learned about the P-Patches, which were often located within the parks, so I also rode my bike to every standalone <Link href={'/collection/p-patch'}><a><Text color={useColorModeValue('green.500', 'green.300')} as='span'>P-Patch</Text></a></Link> as well.</Text>

        <Text mb={2}>Along the way, I learned about the Port of Seattle owned parks, so I rode my bike to every <Link href={'/collection/extras'}><a><Text color={useColorModeValue('green.500', 'green.300')} as='span'>Port of Seattle owned park</Text></a></Link>.</Text>

        <Text mb={2}>Along the way, I learned about the Seattle Public Utilities owned parks, so, can you guess what I did? I rode my bike to every <Link href={'/collection/extras'}><a><Text color={useColorModeValue('green.500', 'green.300')} as='span'>Seattle Public Utilities owned park</Text></a></Link>.</Text>

        <Text mb={2}>I also covered <Link href={'/collection/mercer'}><a><Text color={useColorModeValue('green.500', 'green.300')} as='span'>Mercer Island</Text></a></Link>, and sampled parks from <Link href={'/collection/county'}><a><Text color={useColorModeValue('green.500', 'green.300')} as='span'>King County</Text></a></Link>, and a few other cities.</Text>

        <Text mb={2}>After completing this challenge, I was down three bikes: one sold, one traded, and one stolen. I was also down 30 lbs and felt much closer to being a Seattlelite. This blog is dedicated to the <Link href={'/map'}><a><Text color={useColorModeValue('green.500', 'green.300')} as='span'>journey</Text></a></Link>.</Text>

        <Text fontSize={'xs'} mt={10} pt={5}>This blog is in no way affiliated with any of the organizations representing the places or bicycles pictured</Text>
      </Box>
    </>
  )
}
