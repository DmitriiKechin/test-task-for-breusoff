import React, {FC, useEffect} from "react";
import {Cards, Container, SpinnerContainer} from "./comments.styles";
import {Header} from "../../components/header/header";
import {Button} from "src/ui/button";
import {useAppDispatch, useAppSelector} from "src/hooks/reduxHooks";
import {renderPage, toggleIsLiked} from "src/store/slices/comments";
import {CommentCard} from "../../components/commentCard";
import {Spinner} from "src/ui/spinner";

export const Comments: FC = React.memo(() => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.comments.comments);
    const isLastPage = useAppSelector((state) => state.comments.isLastPage);
    const isFirstPageLoaded = useAppSelector(
        (state) => state.comments.isFirstPageLoaded,
    );

    useEffect(() => {
        dispatch(renderPage());
    }, [dispatch, isFirstPageLoaded]);
    return (
        <Container>
            <Header />
            <Cards>
                {isFirstPageLoaded ? (
                    <>
                        {comments.map((comment) => (
                            <CommentCard
                                onLikeClick={() =>
                                    dispatch(toggleIsLiked(comment.id))
                                }
                                key={comment.id}
                                avatar={comment.author.avatar}
                                createdTime={comment.created}
                                isLiked={comment.isLiked}
                                isReply={comment.isReply}
                                likes={comment.likes}
                                message={comment.text}
                                nickname={comment.author.name}
                            />
                        ))}
                    </>
                ) : (
                    <SpinnerContainer>
                        <Spinner />
                    </SpinnerContainer>
                )}
            </Cards>
            <Button
                disabled={isLastPage}
                style={{alignSelf: "center"}}
                onClick={() => {
                    dispatch(renderPage());
                }}
            >
                Загрузить еще
            </Button>
        </Container>
    );
});
