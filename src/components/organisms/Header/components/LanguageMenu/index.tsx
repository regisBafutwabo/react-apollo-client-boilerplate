import React from "react";

import { Menu } from "antd";

import { LanguageMenuProps } from "./LanguageMenu.types";

export const LanguageMenu = ({ languages, changeLanguage }: LanguageMenuProps) => {
    return <Menu onClick={changeLanguage} items={languages} />;
};
