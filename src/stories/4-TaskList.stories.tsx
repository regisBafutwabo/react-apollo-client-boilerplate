/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Card } from "antd";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import TaskList from "../components/molecules/TaskList";
import { tasks } from "../components/molecules/TaskList/data";

export default {
    title: "Task List",
    component: TaskList,
    decorators: [
        withKnobs,
        (story: any) => (
            <Card style={{ width: "50%", margin: "auto", marginTop: 200 }}>{story()}</Card>
        ),
    ],
};

export const WithPinnedTasks = () => <TaskList Tasks={object("tasks", tasks)} />;

export const Loading = () => <TaskList loading />;

export const Empty = () => <TaskList empty />;
