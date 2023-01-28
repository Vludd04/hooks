import React from "react";
import withFunctions from "./withFunctions";
import SimpleComponent from "./simpleComponent";

const HOCHomework = () => {
    const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <>
            <ComponentWithHoc />
        </>
    );
};

export default HOCHomework;
