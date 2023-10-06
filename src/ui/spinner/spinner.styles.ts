import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const Container = styled.div`
    position: relative;
    align-self: stretch;

    max-width: 100px;
    max-height: 100px;
    min-width: 22px;
    min-height: 20px;
    height: 100%;
`;

export const Svg = styled.svg`
    animation: ${rotate} 2s linear infinite;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    & circle {
        stroke: #8297ab;
        stroke-linecap: round;
        animation: ${dash} 1.5s ease-in-out infinite;
    }
`;
