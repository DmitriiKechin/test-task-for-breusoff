import {request} from "./request";

const ROOT_API = "api";

export const commentService = {
    getAuthors: () =>
        request({
            rootApi: ROOT_API,
            url: "authors",
            errorMessage: "Ошибка получения списка авторов",
        }),

    getCommentsPage: (page: number) =>
        request({
            rootApi: ROOT_API,
            url: "comments",
            errorMessage: `Ошибка получения ${page} страницы комментариев`,
            params: {page},
        }),
};
