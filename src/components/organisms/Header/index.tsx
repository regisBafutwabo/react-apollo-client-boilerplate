import React from "react";

import { Alert } from "antd";
import { Button, Loading } from "components/atoms";
import { LoggedIn } from "components/molecules";
import { useTranslation } from "react-i18next";

import { LanguageSelector } from "./components/LanguageSelector";
import { HeaderProps } from "./Header.types";
import { Container } from "./styles";

const Header = (props: HeaderProps) => {
    const { t } = useTranslation();
    const { Login, loading, error, data, Logout } = props;

    const RenderView = () => {
        if (loading) {
            return <Loading LoadingText="Loading..." />;
        }

        if (error) {
            return <Alert message={error.message} type="error" showIcon />;
        }

        if (data && data.localUser.isLoggedIn) {
            return <LoggedIn Logout={Logout} />;
        }

        return (
            <Button styles={{ alignSelf: "flex-end" }} Text={t("Login")} onClick={Login} />
        );
    };

    return (
        <Container>
            <LanguageSelector
                languages={[
                    { key: "en", label: "EN" },
                    { key: "ko", label: "KR" },
                ]}
            />
            {RenderView()}
        </Container>
    );
};

export default Header;
