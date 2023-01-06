import React from "react";
import {RounderBox} from "./primitives";
import {Image, Text, useColorModeValue} from "@chakra-ui/react";

interface Props {
    description: string;
}

const ContentTop: React.FC<Props> = ({description}) => {
    const bg = useColorModeValue("gray.100", "gray.800");
    return (
        <RounderBox
            height="150px"
            bgImage="./header.png"
            bgSize="cover"
            bgRepeat="no-repeat"
            display="flex"
            backgroundColor={bg}
            alignItems="center"
            justifyContent="center"
            flexDir="column"
        >
            <Image
                src="./castalia.png"
            >
            </Image>
            <Text
                fontSize="16px"
                color="#34314c"
            >
                {description}
            </Text>
        </RounderBox>
    );
};

export default ContentTop;
