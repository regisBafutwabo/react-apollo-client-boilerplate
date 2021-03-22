import { action } from "@storybook/addon-actions";

export const tasks = [
    {
        task: { id: "0", title: "code", state: "TASK_PINNED", updatedAt: new Date() },
        onPinTask: action("onPinTask"),
        onArchiveTask: action("onArchiveTask"),
    },
    {
        task: { id: "0", title: "eat", state: "TASK_ARCHIVED", updatedAt: new Date() },
        onPinTask: action("onPinTask"),
        onArchiveTask: action("onArchiveTask"),
    },
    {
        task: { id: "0", title: "sleep", state: "TASK_INBOX", updatedAt: new Date() },
        onPinTask: action("onPinTask"),
        onArchiveTask: action("onArchiveTask"),
    },
];
