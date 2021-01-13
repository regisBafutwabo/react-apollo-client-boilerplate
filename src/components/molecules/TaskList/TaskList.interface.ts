import { HandlerFunction } from "@storybook/addon-actions";

export namespace TaskListProps {
    export interface IProps {
        loading?: boolean;
        empty?: boolean;
        Tasks?: tasksProps[];
    }

    export interface tasksProps {
        task: { id: any; title: string; state: any; updatedAt?: Date };
        onArchiveTask: HandlerFunction;
        onPinTask: HandlerFunction;
    }
}
