import React, {PropsWithChildren} from "react";
import {Resource, ResourceItem} from "src/server";
import {Box, Grid, Image, useColorModeValue} from "@chakra-ui/react";
import {H2, RounderBox} from "./primitives";
import ResourceCard from "./resourceCard";
import { FaInbox } from "react-icons/fa";

interface Props {
    resource: Resource;
    hasCollectBtn: boolean;
    hasDeleteBtn: boolean;
    myCollection: ResourceItem[];

    empty?: React.ReactNode;
}

const ResourcePanel: React.FC<PropsWithChildren<Props>> = ({
    resource,
    hasCollectBtn,
    hasDeleteBtn,
    empty,
    myCollection
}) => {
    const emptyNode = empty ?? (
        <RounderBox
            display="flex"
            justifyContent="center"
            backgroundColor={useColorModeValue("gray.100", "gray.800")}
        >
             <FaInbox size="130px" color="#dce0e6" />
        </RounderBox>
    );

    return (
        <Box>
            <H2
                fontSize="16px"
                mb="15px"
                id={resource.name}
            >
                {resource.name}
            </H2>
            <Grid
                rowGap="15px"
                columnGap="15px"
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]}
            >
                {
                    resource.site.map((site) => (
                        <ResourceCard
                            key={site.name}
                            site={site}
                            hasDeleteBtn={hasDeleteBtn}
                            hasCollectBtn={hasCollectBtn}
                            checked={myCollection.findIndex((item) => item.name === site.name) !== -1}
                        />
                    ))
                }
                {resource.site.length === 0 ? emptyNode : <></>}
            </Grid>
        </Box>
    );
};

export default ResourcePanel;
