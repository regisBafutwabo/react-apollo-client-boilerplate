import styled from "styled-components";
import Exception from "ant-design-pro/lib/Exception";
import { deviceMin } from "styles";

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100vh;
    color: ${props => props.theme.colors.black};
    @media ${deviceMin.mobileXs} {
        padding: 5px 2% !important;
    }
    @media ${deviceMin.laptop} {
        padding: 0px 5% !important;
    }
    @media ${deviceMin.laptopL} {
        padding: 0px !important;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const Result = styled(Exception)`
    .antd-pro-exception-content {
        h1 {
            color: ${props => props.theme.colors.black};
        }
        .antd-pro-exception-desc {
            color: ${props => props.theme.colors.text};
        }
    }
`;
