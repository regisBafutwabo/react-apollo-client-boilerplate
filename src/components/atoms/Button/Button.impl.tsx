import React from "react";
import { Loading } from "../index";
import { ButtonProps } from "./Button.interface";
import { Container } from "./styles";

const Button: React.FC<ButtonProps.IProps> = props => {
    const { Text, styles, onClick, loading } = props;

    return (
        <Container style={styles} onClick={onClick}>
            {loading ? <Loading /> : Text}
        </Container>
    );
};

export default Button;
