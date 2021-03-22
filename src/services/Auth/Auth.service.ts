import { localUserMutations } from "apollo/Operations/Client/Mutations";

export class AuthService {
    public static async login() {
        await localUserMutations.updateLocalUser(true);
    }

    public static async logout() {
        await localUserMutations.updateLocalUser(false);
    }
}
