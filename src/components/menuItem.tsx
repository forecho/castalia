import React from "react";
import {Resource} from "src/server";
import {HStack, useColorModeValue} from "@chakra-ui/react";
import {H2} from "src/components/primitives";
import {useRef} from "react";
import DynamicFaIcon from "./icon";

interface Props {
    resource: Resource;
    active: boolean;
}

const MenuItem: React.FC<Props> = ({
    resource,
    active
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const bg = useColorModeValue('gray.100', 'gray.700');
    const activeBg = useColorModeValue('gray.200', 'gray.600');

    const clickHandle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const linkEle = linkRef.current;
        if (linkEle && event.target !== linkEle) {
            linkEle.click();
        }
    };

    return (
        <HStack
            alignItems="center"
            p="8px 20px"
            columnGap="10px"
            onClick={clickHandle}
            bgColor={active ? activeBg : bg}
            cursor="pointer"
            _hover={{
                bgColor: activeBg
            }}
        >
            <DynamicFaIcon name={resource.icon} />
            <H2
                fontWeight="normal"
                fontSize="14px"
            >
                <a ref={linkRef} href={`#${resource.name}`}>
                    {resource.name}
                </a>
            </H2>
        </HStack>
    );
};

export default MenuItem;
