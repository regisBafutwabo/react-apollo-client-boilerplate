import { CSSProperties } from "react";

export type ImageProps = {
    image: string;
    alt: string;
    height?: string;
    width?: string;
    styles?: CSSProperties;
};
