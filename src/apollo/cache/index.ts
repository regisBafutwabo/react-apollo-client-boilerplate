import { CLIENT_LANGUAGE } from "apollo/state/i18n/i18n.queries";
import { LocalUser } from "generated/graphql";
/* eslint-disable no-unused-vars */
import { persistCache } from "apollo3-cache-persist";
import { InMemoryCache } from "@apollo/client";
import { TypePolicy } from "apollo/typePolicies";
import { defaults } from "apollo/state";

let cache: InMemoryCache;

async function initCache(): Promise<InMemoryCache> {
    if (cache) return cache;

    const inMemoryCache = new InMemoryCache({
        typePolicies: TypePolicy,
    });

    await persistCache({
        cache: inMemoryCache,
        storage: window.localStorage,
        debug: true,
    });

    // // 예전 로그인 기록이 있는지 확인한다.
    // const apolloCachePersist: any = JSON.parse(
    //     window.localStorage?.["apollo-cache-persist"] ?? "{}",
    // );

    inMemoryCache.writeQuery({
        query: CLIENT_LANGUAGE,
        data: { ...defaults },
    });

    cache = inMemoryCache;

    return inMemoryCache;
}
export default initCache;
