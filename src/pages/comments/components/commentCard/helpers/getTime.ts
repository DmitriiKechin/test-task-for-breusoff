import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const getTime = (time: string): string => {
    dayjs.extend(relativeTime);
    const date = dayjs(time);

    const diff = date.diff(dayjs(), "week");
    if (diff > -1) {
        return dayjs(time).fromNow();
    }

    return dayjs(time).format("DD.MM.YYYY, HH:mm:ss");
};
