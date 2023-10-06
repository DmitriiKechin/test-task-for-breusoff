export interface CommentCardProps {
    avatar: string;
    nickname: string;
    likes: number;
    isLiked: boolean;
    createdTime: string;
    message: string;
    isReply: boolean;
    onLikeClick: () => void;
}
