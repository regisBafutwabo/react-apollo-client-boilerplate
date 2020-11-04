/* eslint-disable no-unused-vars */
import { InMemoryCache } from "@apollo/client";
import { persistCache, PersistentStorage } from "apollo3-cache-persist";
import { LocalUser, I18n } from "generated/graphql";
import { defaults } from "apollo/state";
import { CLIENT_LANGUAGE } from "apollo/state/i18n/i18n.queries";
import { CLIENT_GET_USER_STATE } from "../state/user/user.queries";

async function initCache(): Promise<InMemoryCache> {
    const cache: InMemoryCache = new InMemoryCache();

    await persistCache({
        cache,
        storage: window.localStorage as PersistentStorage,
    });
    // 예전 로그인 기록이 있는지 확인한다.
    const apolloCachePersist: any = JSON.parse(
        window.localStorage?.["apollo-cache-persist"] ?? "{}",
    );
    // check the persist storage status before resetting
    const localUserId: string = apolloCachePersist.ROOT_QUERY?.["localUser"]?.id;
    const i18nId: string = apolloCachePersist.ROOT_QUERY?.["i18n"]?.id;
    const localUser: LocalUser = apolloCachePersist[localUserId];
    const i18n: I18n = apolloCachePersist[i18nId];

    // 로그인 기록이 없다면 캐쉬 초기화
    // if user is not logged in set the persist storage back to its default state
    // without touching the i18n state
    if (!localUser?.isLoggedIn && i18n) {
        cache.writeQuery({
            query: CLIENT_LANGUAGE,
            data: { ...defaults.i18n, i18n: { __typename: "i18n", lng: i18n.lng } },
        });
    } else if (!localUserId && !i18nId) {
        cache.writeQuery({
            query: CLIENT_LANGUAGE,
            data: { ...defaults.i18n },
        });
        cache.writeQuery({
            query: CLIENT_GET_USER_STATE,
            data: { ...defaults.localUser },
        });
    }
    return cache;
}
export default initCache;
