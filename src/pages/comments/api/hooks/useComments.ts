import {useQuery} from "@tanstack/react-query";
import {commentService} from "../commentsService";
import {CommentsPage} from "src/store/slices/comments/types";

export const useComments = (page: number) => {
    return useQuery<CommentsPage>({
        queryFn: () => commentService.getCommentsPage(page),
        queryKey: ["comments", page],
        staleTime: 1000 * 60 * 5,
    });
};
