/* eslint-disable no-unused-vars */
import React, { CSSProperties } from "react";
import { Loading } from "../index";
import { Container } from "./styles";

interface IProps {
    Text: any;
    styles?: CSSProperties;
    onClick?: any;
    loading?: boolean;
}

const Button: React.FC<IProps> = props => {
    const { Text, styles, onClick, loading } = props;
    return (
        <Container style={styles} onClick={onClick}>
            {loading ? <Loading /> : Text}
        </Container>
    );
};

export default Button;
