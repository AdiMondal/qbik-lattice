import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () =>{
    return (
    <Container>
      <Box borderRadius="lg" bg="orange" p={3} mb={6} align="center">
        Hello, We are a Website Dev and Design Agency based in India :D
      </Box>
      <Box display={{md:"flex"}}>
        <Box flexGrow={1}>
            <Heading as="h2" variant={Page}>
               Qbik Lattice
            </Heading>
            <p>Experience the artistry of digital craftsmanship with Qbik Lattice – where coding mastery meets visionary design.</p>
        </Box>
      </Box>
    </Container>
    )
}
export default Page;
