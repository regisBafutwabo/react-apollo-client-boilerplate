import React from "react";
import { Button, Loading } from "components/atoms";
import { Alert } from "antd";
import { LoggedIn, LanguageSelector } from "components/molecules";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { HeaderProps } from "./Header.interface";

const Header = (props: HeaderProps.IProps) => {
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
            <LanguageSelector languages={["en", "kr"]} />
            {RenderView()}
        </Container>
    );
};

export default Header;
