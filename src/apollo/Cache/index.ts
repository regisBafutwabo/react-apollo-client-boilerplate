import { InMemoryCache } from "@apollo/client";
import { persistCache, PersistentStorage } from "apollo3-cache-persist";
import { TypePolicy } from "apollo/TypePolicies";

async function initCache(): Promise<InMemoryCache> {
    const cache: InMemoryCache = new InMemoryCache({
        typePolicies: TypePolicy,
    });

    await persistCache({
        cache,
        storage: window.localStorage as PersistentStorage,
        debug: process.env.NODE_ENV === "development",
    });

    return cache;
}
export default initCache;
