import { Box, Image } from "@chakra-ui/react";

export default ({ cat }) => {
  return <Image src={cat.img} boxSize="1080px" fit="contain" />;
};
