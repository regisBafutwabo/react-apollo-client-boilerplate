/* eslint-disable no-unused-vars */
import React from "react";
import { ImageProps } from "./Image.interface";
import { Images } from "./styles";

const Image = (props: ImageProps.IProps) => {
    const { image, alt, height, width, styles } = props;

    return (
        <Images src={image} alt={alt || ""} height={height} width={width} style={styles} />
    );
};

export default Image;
