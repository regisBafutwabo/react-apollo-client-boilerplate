/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { HandlerFunction } from "@storybook/addon-actions";
import { Checkbox } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

interface IProps {
    task: { id: any; title: string; state: any; updatedAt?: Date };
    onArchiveTask: HandlerFunction;
    onPinTask: HandlerFunction;
}

const Task: React.FC<IProps> = props => {
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
