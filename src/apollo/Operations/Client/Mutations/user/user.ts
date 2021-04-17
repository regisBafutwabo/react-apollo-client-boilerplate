import { getApolloClient } from "apollo";
import { getLocalUser } from "apollo/Operations/Client/Queries";

export const updateLocalUser = async (isLoggedIn: boolean) => {
    try {
        const client = await getApolloClient();
        const current = client.readQuery({ query: getLocalUser });

        const updatedUser = { ...current.localUser, isLoggedIn };

        client.writeQuery({
            query: getLocalUser,
            data: {
                localUser: updatedUser,
            },
        });
    } catch (error) {
        throw new Error(error.message);
    }
};
