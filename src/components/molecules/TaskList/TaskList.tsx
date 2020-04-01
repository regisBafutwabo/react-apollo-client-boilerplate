/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { HandlerFunction } from "@storybook/addon-actions";
import { tasks } from "./data";
import { EmptyData, Loading } from "../../atoms";
import Task from "../../atoms/Task";

interface IProps {
    loading?: boolean;
    empty?: boolean;
    Tasks?: tasksProps[];
}

interface tasksProps {
    task: { id: any; title: string; state: any; updatedAt?: Date };
    onArchiveTask: HandlerFunction;
    onPinTask: HandlerFunction;
}

const TaskList: React.FC<IProps> = props => {
    const { loading, empty, Tasks } = props;

    const newTasks = Tasks
        ? [
              ...Tasks.filter(item => item.task.state === "TASK_ARCHIVED"),
              ...Tasks.filter(item => item.task.state !== "TASK_ARCHIVED"),
          ]
        : [];

    const newtasks = [
        ...tasks.filter(item => item.task.state === "TASK_ARCHIVED"),
        ...tasks.filter(item => item.task.state !== "TASK_ARCHIVED"),
    ];

    const showData = () => {
        if (empty) {
            return <EmptyData description="Yay You Have no Tasks!! Sit back and relax" />;
        }
        if (loading) {
            return <Loading type="skeleton" />;
        }
        if (Tasks) {
            return (
                <>
                    {newTasks.map((item: tasksProps, index: number) => {
                        return (
                            <Task
                                key={index}
                                task={item.task}
                                onArchiveTask={item.onArchiveTask}
                                onPinTask={item.onPinTask}
                            />
                        );
                    })}
                </>
            );
        }

        return (
            <>
                {newtasks.map((item: tasksProps, index: number) => {
                    return (
                        <Task
                            key={index}
                            task={item.task}
                            onArchiveTask={item.onArchiveTask}
                            onPinTask={item.onPinTask}
                        />
                    );
                })}
            </>
        );
    };

    return <div>{showData()}</div>;
};

export default TaskList;
