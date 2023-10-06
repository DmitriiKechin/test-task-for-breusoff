import React, {FC} from "react";
import {ButtonElement} from "./button.styles";

export const Button: FC<React.ComponentProps<typeof ButtonElement>> = (
    props,
) => {
    return <ButtonElement {...props}>{props.children}</ButtonElement>;
};
