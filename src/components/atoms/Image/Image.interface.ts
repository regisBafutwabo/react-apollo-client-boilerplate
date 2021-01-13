import { CSSProperties } from "react";

export namespace ImageProps {
    export interface IProps {
        image: string;
        alt: string;
        height?: string;
        width?: string;
        styles?: CSSProperties;
    }
}
