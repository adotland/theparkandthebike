import Head from 'next/head';

import { Box } from '@chakra-ui/layout'

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
      </Head>
      <Box maxWidth='1500px' m='auto' style={{ position: 'relative', minHeight: '100vh' }}>
        <header>
          <Navbar />
        </header>
        <main style={{ paddingTop: "88px", paddingBottom: '6rem' }}>
          {children}
        </main>
        <footer style={{position: 'absolute', bottom: 0, width: '100%', height: '6rem'}}>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
