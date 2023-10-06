import React, {FC, useEffect, useState} from "react";
import {useAuthors} from "./api/hooks/useAuthor";
import {useAppDispatch, useAppSelector} from "src/hooks/reduxHooks";
import {addPageData, initAuthors} from "src/store/slices/comments";
import {useComments} from "./api/hooks/useComments";
import {Comments} from "./modules/comments";

export const CommentsPage: FC = () => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);

    const totalPages = useAppSelector((state) => state.comments.totalPages);

    const {data: authors, isSuccess: isAuthorsSuccess} = useAuthors();
    const {data: comments, isSuccess: isCommentsSuccess} = useComments(page);

    //при переходе на страницу получаем данны об авторах...
    // и записываем их в state
    useEffect(() => {
        if (isAuthorsSuccess) {
            dispatch(initAuthors(authors));
        }
    }, [authors, dispatch, isAuthorsSuccess]);

    //так как другого способа получить общее количество...
    //лайков и комментариев нет, то поочередно загружаем все страницы и...
    //складываем их в state, при этом отрисовка первой страницы комментариев...
    //произойдет сразу после её загрузки
    useEffect(() => {
        if (!isCommentsSuccess) {
            return;
        }
        dispatch(addPageData(comments));

        if (page < totalPages) {
            setPage((prev) => prev + 1);
        }
    }, [authors, comments, dispatch, isCommentsSuccess, page, totalPages]);

    return <Comments />;
};
