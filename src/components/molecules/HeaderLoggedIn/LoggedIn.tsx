import React from "react";
import { Button } from "components/atoms";
import { useTranslation } from "react-i18next";
import { LoggedInText } from "./styles";
import { LoggedInProps } from "./LoggedIn.interface";

const LoggedIn: React.FC<LoggedInProps.IProps> = ({ Logout }) => {
    const { t } = useTranslation();
    return (
        <>
            <LoggedInText>{t("Logged In")}</LoggedInText>
            <Button Text={t("Logout")} onClick={Logout} />
        </>
    );
};

export default LoggedIn;
