import React from "react";
import { Empty } from "antd";
import { EmptyDataProps } from "./EmptyData.interface";

const EmptyData: React.FC<EmptyDataProps.IProps> = props => {
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
