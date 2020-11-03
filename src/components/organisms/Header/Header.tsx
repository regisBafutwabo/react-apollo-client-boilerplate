/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from "react";
import { LanguageSelector } from "components/molecules";
import { Container } from "./styles";

const Header = () => {
    return (
        <Container>
            <LanguageSelector languages={["en", "kr"]} />
        </Container>
    );
};

export default Header;
