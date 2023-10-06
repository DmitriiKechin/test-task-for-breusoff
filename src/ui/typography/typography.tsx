import React, {FC} from "react";
import {TypographyProps} from "./typography.types";
import {Text} from "./typography.styles";

export const Typography: FC<TypographyProps> = ({text, variant}) => {
    return <Text variant={variant}>{text}</Text>;
};
