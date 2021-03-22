import React from "react";
import { Spin, Skeleton } from "antd";
import { LoadingProps } from "./Loading.interface";

const Loading: React.FC<LoadingProps.IProps> = ({ LoadingText, type }) => {
    return <>{type === "skeleton" ? <Skeleton active /> : <Spin tip={LoadingText} />}</>;
};

export default Loading;
