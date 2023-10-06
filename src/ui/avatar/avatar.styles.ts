import {adaptiveSize} from "src/styles/helpers/adaptiveSize";
import styled from "styled-components";

export const Image = styled.img`
    ${adaptiveSize("width", 40, 68)}
    ${adaptiveSize("height", 40, 68)}
		border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
`;
