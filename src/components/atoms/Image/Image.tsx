/* eslint-disable no-unused-vars */
import React, { CSSProperties } from "react";
import { Images } from "./styles";

interface IProps {
    image: string;
    alt: string;
    height?: string;
    width?: string;
    styles?: CSSProperties;
}
const Image = (props: IProps) => {
    const { image, alt, height, width, styles } = props;
    return (
        <Images src={image} alt={alt || ""} height={height} width={width} style={styles} />
    );
};

export default Image;
