import {adaptiveSize} from "src/styles/helpers/adaptiveSize";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding-bottom: 10px;

    border-bottom: 1px solid #767676;
`;

export const LikeBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Svg = styled.svg`
    ${adaptiveSize("height", 20, 22)}
    ${adaptiveSize("width", 20, 22)}
`;
