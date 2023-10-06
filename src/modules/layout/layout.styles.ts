import styled from "styled-components";
import background from "../../assets/Background.png";
import {adaptiveSize} from "../../styles/helpers/adaptiveSize";

export const BackGround = styled.div`
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    background: url(${background}) rgba(12, 13, 15, 0.3);
    background-size: cover;
    background-position: center top;
`;

export const Container = styled.div`
    max-width: 610px;
    padding-left: 24px;
    padding-right: 24px;
    margin: 0 auto;
`;
