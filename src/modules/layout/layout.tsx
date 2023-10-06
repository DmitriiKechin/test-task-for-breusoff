import React, {FC} from "react";
import {LayoutProps} from "./layout.types";
import {BackGround, Container} from "./layout.styles";

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <BackGround>
            <Container>{children}</Container>
        </BackGround>
    );
};
