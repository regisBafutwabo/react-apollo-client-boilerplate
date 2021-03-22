import React from "react";
import { HandlerFunction } from "@storybook/addon-actions";
import { Checkbox } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

interface TaskInterfaceProps {
    task: { id: any; title: string; state: any; updatedAt?: Date };
    onArchiveTask: HandlerFunction;
    onPinTask: HandlerFunction;
}

const Task: React.FC<TaskInterfaceProps> = props => {
    const {
        task: { title, state, id },
        onPinTask,
    } = props;

    const showByTaskStatus = () => {
        switch (state) {
            case "TASK_PINNED":
                return (
                    <span
                        onClick={() => onPinTask(id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => onPinTask(id)}>
                        <StarFilled style={{ color: "#ffc300" }} />
                    </span>
                );
            case "TASK_INBOX":
                return (
                    <span
                        onClick={() => onPinTask(id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => onPinTask(id)}>
                        <StarOutlined />
                    </span>
                );
            default:
                return <></>;
        }
    };

    return (
        <div
            className="list-item"
            style={{ display: "flex", justifyContent: "space-between" }}>
            <Checkbox checked={state === "TASK_ARCHIVED"} id={title}>
                {title}
            </Checkbox>
            <div
                role="button"
                tabIndex={0}
                onClick={event => event.stopPropagation()}
                onKeyDown={event => event.stopPropagation()}>
                {showByTaskStatus()}
            </div>
        </div>
    );
};

export default Task;
