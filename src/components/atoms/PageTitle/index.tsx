import React from "react";

import { Helmet } from "react-helmet";

const PageTitle = (props: { Title: string }) => {
    const { Title } = props;
    return (
        <Helmet>
            <title>{Title}</title>
        </Helmet>
    );
};

export default PageTitle;
