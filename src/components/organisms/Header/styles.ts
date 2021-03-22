import styled from "styled-components";
import { Dropdown as drpdwn } from "antd";

export const Container = styled.header`
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #0b192e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DropDown = styled(drpdwn)`
    max-width: 150px;
    left: 409px;
    top: 1623px;
`;
