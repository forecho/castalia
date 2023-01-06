import React from "react";
import * as Icons from "react-icons/fa";

/* Your icon name from database data can now be passed as prop */
// @ts-ignore
const DynamicFaIcon = ({ name }) => {
    // @ts-ignore
    const IconComponent = Icons[name];
    if (!IconComponent) { // Return a default one
        return <Icons.FaListUl />;
    }
    return <IconComponent />;
};

export default DynamicFaIcon;