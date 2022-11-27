import React from "react";

import { Button } from "components/atoms";
import { useTranslation } from "react-i18next";

import { LoggedInProps } from "./LoggedIn.types";
import { LoggedInText } from "./styles";

const LoggedIn: React.FC<LoggedInProps> = ({ Logout }) => {
    const { t } = useTranslation();

    return (
        <>
            <LoggedInText>{t("Logged In")}</LoggedInText>
            <Button Text={t("Logout")} onClick={Logout} />
        </>
    );
};

export default LoggedIn;
