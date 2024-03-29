import Head from 'next/head';
import {Box, Container} from '@chakra-ui/react'

// eslint-disable-next-line no-unused-vars
const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head> <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Qbik Lattice - Homepage</title>
            </Head>
            <Container maxW={Container.md} pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main