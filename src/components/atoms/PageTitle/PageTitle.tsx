import React from "react";
import { Helmet } from "react-helmet";

interface IProps {
    Title: string;
}

const PageTitle: React.FC<IProps> = props => {
    const { Title } = props;
    return (
        <Helmet>
            <title>{Title}</title>
        </Helmet>
    );
};

export default PageTitle;
