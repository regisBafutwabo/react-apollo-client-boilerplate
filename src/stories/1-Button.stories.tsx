/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { action } from "@storybook/addon-actions";
import { Card } from "antd";
import Button from "../components/atoms/Button";

export default {
    title: "Button",
    component: Button,
    decorators: [
        (story: any) => (
            <Card
                style={{
                    width: "50%",
                    textAlign: "center",
                    marginTop: 100,
                    margin: "auto",
                }}>
                {story()}
            </Card>
        ),
    ],
};

export const Text = () => <Button onClick={action("clicked")} Text="Hello World" />;

export const Emoji = () => (
    <Button
        onClick={action(" emoji clicked")}
        Text={
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        }
    />
);

export const Loading = () => (
    <Button onClick={action(" emoji clicked")} Text="button" loading />
);
