/* eslint-disable no-console */
import React from "react";

import { Dropdown } from "antd";
import { LanguageMenu } from "components/organisms/Header/components/LanguageMenu";
import { useTranslation } from "react-i18next";
import { I18nService } from "services";

import { DownOutlined, TranslationOutlined } from "@ant-design/icons";

import { LanguageSelectorProps } from "./LanguageSelector.types";

export const LanguageSelector = (props: LanguageSelectorProps) => {
    const { languages } = props;

    const { i18n } = useTranslation();

    const changeLanguage = async (event: any) => {
        const { key } = event;

        try {
            await I18nService.changeLanguage(key);
            i18n.changeLanguage(key);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dropdown
            dropdownRender={() => (
                <LanguageMenu languages={languages} changeLanguage={changeLanguage} />
            )}
            trigger={["click"]}>
            <span>
                <TranslationOutlined /> <DownOutlined />
            </span>
        </Dropdown>
    );
};
