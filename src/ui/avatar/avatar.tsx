import React, {FC} from "react";
import {AvatarProps} from "./avatar.types";
import {Image} from "./avatar.styles";

export const Avatar: FC<AvatarProps> = ({src}) => {
    return <Image src={src} alt="user avatar" />;
};
