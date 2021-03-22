import { makeVar } from "@apollo/client";
import { UserModel } from "apollo/Models";

export const initialUser = makeVar<UserModel>({
    __typename: "LocalUser",
    isLoggedIn: false,
});
