import styled from "styled-components";

export const Container = styled.button`
    background-color: ${props => props.theme.colors.white};
    font-size: 14px;
    padding: 4px 15px;
    margin: auto 8px;
    border-color: ${props => props.theme.colors.border};
    border-radius: 5px;
    padding: 8px 12px;
    font-weight: 600;
    color: ${props => props.theme.colors.secondary};
    :hover {
        background-color: ${props => props.theme.colors.secondary};
        border-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.white};
    }
`;
