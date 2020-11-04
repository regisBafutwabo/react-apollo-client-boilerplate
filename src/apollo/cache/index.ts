/* eslint-disable no-unused-vars */
import { InMemoryCache } from "@apollo/client";
import { persistCache, PersistentStorage } from "apollo3-cache-persist";
import { defaults } from "apollo/state";
import { CLIENT_LANGUAGE } from "apollo/state/i18n/i18n.queries";
import { TypePolicy } from "apollo/typePolicies";
import { CLIENT_GET_USER_STATE } from "../state/user/user.queries";

async function initCache(): Promise<InMemoryCache> {
    const inMemoryCache: InMemoryCache = new InMemoryCache({
        typePolicies: TypePolicy,
    });

    await persistCache({
        cache: inMemoryCache,
        storage: window.localStorage as PersistentStorage,
    });

    const apolloCachePersist: any = JSON.parse(
        window.localStorage?.["apollo-cache-persist"] ?? "{}",
    );

    if (Object.keys(apolloCachePersist).length === 0) {
        inMemoryCache.writeQuery({
            query: CLIENT_LANGUAGE,
            data: { ...defaults },
        });
        inMemoryCache.writeQuery({
            query: CLIENT_GET_USER_STATE,
            data: { ...defaults },
        });

        return inMemoryCache;
    }
    return inMemoryCache;
}
export default initCache;
