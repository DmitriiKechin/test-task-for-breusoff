import React, {FC} from "react";
import {CommentCardProps} from "./commentCard.types";
import {Avatar} from "src/ui/avatar";
import {Typography} from "src/ui/typography";
import {Like} from "src/ui/like";
import {
    Container,
    Header,
    LikeBox,
    TitleBox,
    Comment,
} from "./commentCard.styles";
import {getTime} from "./helpers/getTime";

export const CommentCard: FC<CommentCardProps> = ({
    avatar,
    createdTime,
    isReply,
    likes,
    message,
    nickname,
    isLiked,
    onLikeClick,
}) => {
    return (
        <Container $isReply={isReply}>
            <Avatar src={avatar} />
            <Comment>
                <Header>
                    <TitleBox>
                        <Typography variant="title" text={nickname} />
                        <time dateTime={createdTime}>
                            <Typography
                                variant="subtext"
                                text={getTime(createdTime)}
                            />{" "}
                        </time>
                    </TitleBox>
                    <LikeBox>
                        <Like isLiked={isLiked} onClick={onLikeClick} />
                        <Typography variant="number" text={likes} />
                    </LikeBox>
                </Header>
                <Typography variant="text" text={message} />
            </Comment>
        </Container>
    );
};
