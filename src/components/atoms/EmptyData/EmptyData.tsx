/* eslint-disable no-unused-vars */
import React, { CSSProperties } from "react";
import { Empty } from "antd";

interface IProps {
    image?: any;
    description?: string;
    imageStyle?: CSSProperties;
}

const EmptyData: React.FC<IProps> = props => {
    const { image, description, imageStyle } = props;
    return (
        <Empty
            image={image || Empty.PRESENTED_IMAGE_SIMPLE}
            description={<span>{description}</span> || <span>No Data</span>}
            imageStyle={imageStyle}
        />
    );
};

export default EmptyData;
