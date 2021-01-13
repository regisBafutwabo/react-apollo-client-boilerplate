/* eslint-disable camelcase */
import React from "react";
import { Card } from "antd";
import Image from "../components/atoms/Image";
import logo from "../assets/app/logo.svg";

export default {
    title: "Image",
    component: Image,
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

export const ReactLogo_Size_250 = () => <Image image={logo} width="250" alt="logo" />;

export const ReactLogo_Size_500 = () => <Image image={logo} width="500" alt="logo" />;
