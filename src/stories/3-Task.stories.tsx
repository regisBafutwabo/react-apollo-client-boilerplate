/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { action } from "@storybook/addon-actions";
import { Card } from "antd";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import Task from "../components/atoms/Task/index";

export default {
    component: Task,
    title: "Task",
    // eslint-disable-next-line prettier/prettier
    decorators: [withKnobs,
        (story: any) => (
            <Card style={{ width: "50%", margin: "auto", marginTop: 200 }}>{story()}</Card>
        ),
    ],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
    onPinTask: action("onPinTask"),
    onArchiveTask: action("onArchiveTask"),
};

export const Default = () => (
    <Task task={object("task", { ...taskData })} {...actionsData} />
);

export const Pinned = () => (
    <Task task={object("task", { ...taskData, state: "TASK_PINNED" })} {...actionsData} />
);

export const Archived = () => (
    <Task task={object("task", { ...taskData, state: "TASK_ARCHIVED" })} {...actionsData} />
);
