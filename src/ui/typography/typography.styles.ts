import styled, {css} from "styled-components";
import {Variant} from "./typography.types";
import {adaptiveSize} from "src/styles/helpers/adaptiveSize";

export const Text = styled.p<{variant: Variant}>`
    font-family: "Lato", sans-serif;

    ${(props) => {
        switch (props.variant) {
            case "number":
                return css`
                    ${adaptiveSize("font-size", 14, 15)}
                    color:#ffffff;
                    font-weight: 700;
                `;

            case "subtext":
                return css`
                    ${adaptiveSize("font-size", 14, 16)}
                    color:#8297ab;
                    font-weight: 400;
                `;

            case "title":
                return css`
                    ${adaptiveSize("font-size", 14, 16)}
                    color:#ffffff;
                    font-weight: 700;
                `;
            case "text":
            default:
                return css`
                    ${adaptiveSize("font-size", 14, 16)}
                    color:#ffffff;
                    font-weight: 400;
                `;
        }
    }}
`;
