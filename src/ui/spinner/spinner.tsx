import React, {FC} from "react";
import {Container, Svg} from "./spinner.styles";

export const Spinner: FC = () => {
    return (
        <Container>
            <Svg viewBox="0 0 50 50">
                <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </Svg>
        </Container>
    );
};
