import {adaptiveSize} from "src/styles/helpers/adaptiveSize";
import styled from "styled-components";

export const Svg = styled.svg`
    ${adaptiveSize("height", 20, 22)}
    ${adaptiveSize("width", 20, 22)}
    cursor: pointer;

    &:hover {
        filter: drop-shadow(0 0 2px #b43333);
    }
`;
