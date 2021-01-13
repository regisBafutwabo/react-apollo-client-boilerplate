import { CSSProperties } from "react";

export namespace ButtonProps {
    export interface IProps {
        Text: any;
        styles?: CSSProperties;
        onClick?: any;
        loading?: boolean;
    }
}
