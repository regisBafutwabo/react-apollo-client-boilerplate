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

    return (
        <div
            className="list-item"
            style={{ display: "flex", justifyContent: "space-between" }}>
            <Checkbox checked={state === "TASK_ARCHIVED"} id={title}>
                {title}
            </Checkbox>
            <div onClick={event => event.stopPropagation()}>
                {state === "TASK_PINNED" ? (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(id)}>
                        <StarFilled style={{ color: "#ffc300" }} />
                    </a>
                ) : state === "TASK_INBOX" ? (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(id)}>
                        <StarOutlined />
                    </a>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Task;
