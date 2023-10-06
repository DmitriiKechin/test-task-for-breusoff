import {useQuery} from "@tanstack/react-query";
import {commentService} from "../commentsService";
import {Author} from "src/store/slices/comments/types";

export const useAuthors = () => {
    return useQuery<Author[]>({
        queryFn: () => commentService.getAuthors(),
        queryKey: ["authors"],
        staleTime: 1000 * 60 * 5,
    });
};
