import { Box, Heading, Text, Image, VStack, Divider, Button, Icon } from "@chakra-ui/react";
import { FaPlay, FaPause, FaMusic, FaPaintBrush, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      {/* Music Content Template */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading size="md" my={2}>
          <Icon as={FaMusic} /> Music
        </Heading>
        <Text mt={4}>Artist: The Weekend</Text>
        <Text>Song: Blinding Lights</Text>
        <audio controls>
          <source src="song_url.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Button mt={2} leftIcon={<FaPlay />}>
          Play
        </Button>
        <Button mt={2} leftIcon={<FaPause />}>
          Pause
        </Button>
      </Box>

      {/* Art Content Template */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading size="md" my={2}>
          <Icon as={FaPaintBrush} /> Art
        </Heading>
        <Text mt={4}>Category: Modernism</Text>
        <Text>Artist: Vincent van Gogh</Text>
        <Text>Piece: Starry Night</Text>
        <Image src="https://images.unsplash.com/photo-1682944600817-e95b34e43be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTdGFycnklMjBOaWdodCUyMFZpbmNlbnQlMjB2YW4lMjBHb2dofGVufDB8fHx8MTcxNDcyNDcwM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Starry Night" />
      </Box>

      {/* AI/LLM Content Template */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading size="md" my={2}>
          <Icon as={FaRobot} /> AI/LLM
        </Heading>
        <Text mt={4}>Topic: Natural Language Processing</Text>
        <Text>Model: GPT-3</Text>
        <Text>Use Case: Text Generation</Text>
        <Box p={3} borderWidth="1px" borderRadius="lg" mt={2}>
          <Text as="kbd">Input:</Text> <Text as="samp">"Write a poem about the sea."</Text>
          <Divider my={2} />
          <Text as="kbd">Output:</Text> <Text as="samp">"The vast ocean waves, speak in hushed tones, of depths untold."</Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;
