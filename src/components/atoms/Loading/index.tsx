import React from "react";

import { Skeleton, Spin } from "antd";

import { LoadingProps } from "./Loading.types";

const Loading: React.FC<LoadingProps> = ({ LoadingText, type }) => {
    return <>{type === "skeleton" ? <Skeleton active /> : <Spin tip={LoadingText} />}</>;
};

export default Loading;
