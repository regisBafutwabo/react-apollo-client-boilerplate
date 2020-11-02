/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined, TranslationOutlined } from "@ant-design/icons";
import { useI18nUpdateLanguageMutation } from "generated/graphql";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { CLIENT_UPDATE_LANGUAGE } from "apollo/state/i18n";

interface IProps {
    languages: string[];
}

const LanguageSelector = (props: IProps) => {
    const { languages } = props;

    const [updateLanguage] = useMutation(CLIENT_UPDATE_LANGUAGE);
    const { i18n } = useTranslation();

    const [visible, setVisible] = useState(false);

    const handleVisibleChange = () => {
        setVisible(!visible);
    };

    const changeLanguage = async (e: any) => {
        const { key } = e;
        if (key === "0") {
            await updateLanguage({ variables: { language: "en" } });
            i18n.changeLanguage("en");
        } else if (key === "1") {
            await updateLanguage({ variables: { language: "ko" } });
            i18n.changeLanguage("ko");
        }
    };

    const showMenu = (
        <Menu onClick={changeLanguage}>
            {languages.map((lng: string, index: number) => (
                <Menu.Item key={index}>
                    <span>{lng}</span>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={showMenu} onVisibleChange={handleVisibleChange} visible={visible}>
            <span>
                <TranslationOutlined /> <DownOutlined />
            </span>
        </Dropdown>
    );
};

export default LanguageSelector;
