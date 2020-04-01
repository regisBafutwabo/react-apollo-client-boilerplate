/* eslint-disable no-unused-vars */
import React from "react";
import { Spin, Skeleton } from "antd";

enum Type {
    Spinner = "spinner",
    ActiveSkeleton = "skeleton",
}
interface IProps {
    LoadingText?: string;
    type?: "spinner" | "skeleton";
}

const Loading: React.FC<IProps> = ({ LoadingText, type }) => {
    return (
        <>
            {type === Type.ActiveSkeleton ? <Skeleton active /> : <Spin tip={LoadingText} />}
        </>
    );
};

export default Loading;
