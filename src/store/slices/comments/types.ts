export interface CommentData {
    id: 1;
    created: string;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
}

export interface CommentsPage {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
    data: CommentData[];
}

export interface Comment {
    id: number;
    created: string;
    text: string;
    author: Author;
    likes: number;
    isLiked: boolean;
    isReply: boolean;
    // children: null | Comment[];
}

export interface Author {
    id: number;
    name: string;
    avatar: string;
}

export interface CommentsState {
    authors: Author[];
    pagesData: CommentsPage[];
    comments: Comment[];
    isLastPage: boolean;
    currentPage: number;
    totalPages: number;
    isComplete: boolean;
    loadedPageCounter: number;
    isFirstPageLoaded: boolean;
    totalLikes: number;
    totalComments: number;
}
