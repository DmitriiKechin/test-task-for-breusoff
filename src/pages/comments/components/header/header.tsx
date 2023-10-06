import {FC} from "react";
import {Typography} from "src/ui/typography";
import {Container, LikeBox, Svg} from "./header.styles";
import {useAppSelector} from "src/hooks/reduxHooks";
import {Spinner} from "src/ui/spinner";

export const Header: FC = () => {
    const totalComments = useAppSelector(
        (state) => state.comments.totalComments,
    );
    const totalLikes = useAppSelector((state) => state.comments.totalLikes);
    const isComplete = useAppSelector((state) => state.comments.isComplete);

    return (
        <Container>
            {isComplete ? (
                <Typography
                    variant="title"
                    text={`${totalComments} комментариев`}
                />
            ) : (
                <div
                    style={{display: "flex", gap: "4px", alignItems: "center"}}
                >
                    <Spinner />
                    <Typography variant="title" text={` комментариев`} />
                </div>
            )}
            <LikeBox>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <g opacity="0.4">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.34687 13.7924C3.69988 12.0549 2.38293 10.896 1.95794 9.06314C1.64189 7.70016 1.73576 5.20846 3.59115 4.04797C7.68236 1.48877 9.9748 5.41581 9.9748 5.41581H10.0252C10.0252 5.41581 12.3176 1.48877 16.4088 4.04797C18.2642 5.20846 18.3581 7.70016 18.042 9.06314C17.6171 10.896 16.3001 12.0549 14.6531 13.7924C9.99999 18.1818 10.0026 18.1862 9.99999 18.1818C9.99999 18.1818 9.99999 18.1818 5.34687 13.7924Z"
                            stroke="url(#paint1_linear_1_301)"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.34687 13.7924C3.69988 12.0549 2.38293 10.896 1.95794 9.06314C1.64189 7.70016 1.73576 5.20846 3.59115 4.04797C7.68236 1.48877 9.9748 5.41581 9.9748 5.41581H10.0252C10.0252 5.41581 12.3176 1.48877 16.4088 4.04797C18.2642 5.20846 18.3581 7.70016 18.042 9.06314C17.6171 10.896 16.3001 12.0549 14.6531 13.7924C9.99999 18.1818 10.0026 18.1862 9.99999 18.1818C9.99999 18.1818 9.99999 18.1818 5.34687 13.7924Z"
                            stroke="#8297AB"
                        />
                    </g>
                    <defs>
                        <linearGradient
                            id="paint1_linear_1_301"
                            x1="8.44033"
                            y1="-4.41205"
                            x2="22.6144"
                            y2="4.46655"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#D44F4F" />
                            <stop offset="1" stopColor="#B43333" />
                        </linearGradient>
                    </defs>
                </Svg>

                {isComplete ? (
                    <Typography variant="number" text={totalLikes} />
                ) : (
                    <Spinner />
                )}
            </LikeBox>
        </Container>
    );
};
