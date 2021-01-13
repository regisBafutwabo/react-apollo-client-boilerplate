import { RouteComponentProps } from "react-router-dom";

export namespace ErrorPageProps {
    export interface IProps extends RouteComponentProps {
        type?: "403" | "404" | "500";
    }
}
