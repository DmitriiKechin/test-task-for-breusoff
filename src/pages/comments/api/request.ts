// дынный файл должен находится в корневой директории api
// но по условиям задачи ее нельзя модифицировать
import axios from "axios";

interface Options {
    rootApi: string;
    url?: string;
    params?: object;
    errorMessage: string;
}

export const request = async ({
    rootApi,
    url,
    params,
    errorMessage,
}: Options) => {
    const response = await axios.get(`/${rootApi}/${url ? url : ""}`, {
        params,
    });

    if (response.status >= 400) {
        throw new Error(errorMessage);
    }

    return await response.data;
};
