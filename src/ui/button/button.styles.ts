import styled from "styled-components";
import {adaptiveSize} from "src/styles/helpers/adaptiveSize";

export const ButtonElement = styled.button`
    padding: 8px 31px;
    border-radius: 4px;
    background: #313439;

    font-family: "Lato", sans-serif;
    ${adaptiveSize("font-size", 14, 16)}
    color:#ffffff;
    font-weight: 400;

    cursor: pointer;

    &:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
    }

    &:disabled {
        color: #8297ab;
    }
`;
