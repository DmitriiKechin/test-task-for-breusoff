import {adaptiveSize} from "src/styles/helpers/adaptiveSize";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    height: 100dvh;

    flex-direction: column;
    justify-content: space-between;

    ${adaptiveSize("padding-top", 32, 52)}
    ${adaptiveSize("padding-bottom", 32, 52)}

		& > *:first-child {
        ${adaptiveSize("margin-bottom", 24, 32)}
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1 0 0;

    position: relative;

    ${adaptiveSize("gap", 24, 32)}
    ${adaptiveSize("margin-bottom", 40, 60)};

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const SpinnerContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    width: 50px;
    height: 50px;

    transform: translate(-50%, -50%);
`;
