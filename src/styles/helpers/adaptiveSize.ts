type Element =
    | "gap"
    | "margin-bottom"
    | "padding"
    | "border-radius"
    | "width"
    | "max-width"
    | "height"
    | "font-size"
    | "padding-left"
    | "padding-top"
    | "padding-bottom"
    | "padding-right"
    | "row-gap"
    | "top";

export const adaptiveSize = (
    element: Element,
    minSize: number,
    maxSize: number,
): string => {
    return `
		${element}: ${maxSize}px;
		@media (min-width: 320px) and (max-width: 610px) {
			${element}: calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${320}px) / (${610} - ${320})));
		}
		@media (max-width: 320px) {
			${element}: ${minSize}px;
		}
		`;
};
