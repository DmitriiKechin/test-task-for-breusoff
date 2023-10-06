import {adaptiveSize} from "src/styles/helpers/adaptiveSize";
import styled, {css} from "styled-components";

export const Container = styled.div<{$isReply: boolean}>`
    display: flex;
    gap: 20px;

    ${(props) =>
        props.$isReply
            ? css`
                  ${adaptiveSize("padding-left", 20, 34)}
              `
            : ""}
`;

export const Comment = styled.div`
    flex: 1 0 0;

    & > *:first-child {
        ${adaptiveSize("margin-bottom", 9.5, 12.5)}
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleBox = styled.div`
    & > *:first-child {
        ${adaptiveSize("margin-bottom", 0, 4)}
    }
`;

export const LikeBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
