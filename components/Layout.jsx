import Head from 'next/head';

import { Box } from '@chakra-ui/layout'

import Footer from './Footer';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const padding = router.pathname.indexOf('/map') === -1 ? "88px" : "0px"; // TODO
  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
      </Head>
      <Box style={{ position: 'relative', minHeight: '100vh' }}>
        <Box maxWidth='1500px' m='auto'>
          <header>
            <Navbar />
          </header>
          <main style={{ paddingTop: padding, paddingBottom: '6rem' }}>
            {children}
          </main>
        </Box>
        <footer style={{ position: 'absolute', bottom: 0, width: '100%', height: '6rem' }}>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
