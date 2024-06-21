import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
} from "@chakra-ui/react";

export default function PostCard({ metadata, name }) {
  return (
    <Card>
      <CardHeader>{metadata.title}</CardHeader>
      <CardBody>{metadata.description}</CardBody>
      <CardFooter>
        <Flex>
          <Box>By: {metadata.author}</Box>
          <Box>
            <Link href={`/posts/${name}`}>Read about it here!</Link>
          </Box>
        </Flex>
      </CardFooter>
    </Card>
  );
}
