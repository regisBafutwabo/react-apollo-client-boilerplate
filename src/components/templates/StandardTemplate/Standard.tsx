import React from "react";
import { Header } from "components/organisms";
import { Container, Body } from "./styles";

const StandardTemplate: React.FC = (props: any) => {
    const { children } = props;

    return (
        <Container>
            <Header />
            <Body>{children}</Body>
        </Container>
    );
};

export default StandardTemplate;
