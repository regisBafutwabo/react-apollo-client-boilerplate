import React from "react";
import { Button } from "components/atoms";
import { useTranslation } from "react-i18next";
import { LoggedInText } from "./styles";

interface IProps {
    Logout: any;
}

const LoggedIn: React.FC<IProps> = ({ Logout }) => {
    const { t } = useTranslation();
    return (
        <>
            <LoggedInText>{t("Logged In")}</LoggedInText>
            <Button Text={t("Logout")} onClick={Logout} />
        </>
    );
};

export default LoggedIn;
