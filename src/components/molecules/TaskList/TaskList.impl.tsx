import React from "react";
import { tasks } from "./data";
import { EmptyData, Loading } from "../../atoms";
import Task from "../../atoms/Task";
import { TaskListProps } from "./TaskList.interface";

const TaskList: React.FC<TaskListProps.IProps> = props => {
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
                    {newTasks.map((item: TaskListProps.tasksProps, index: number) => {
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
                {newtasks.map((item: TaskListProps.tasksProps, index: number) => {
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
