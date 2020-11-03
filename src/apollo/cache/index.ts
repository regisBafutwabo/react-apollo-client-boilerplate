/* eslint-disable no-unused-vars */
import { persistCache } from "apollo3-cache-persist";
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { TypePolicy } from "apollo/typePolicies";
import { i18nModel } from "../models/i18n.model";
import { Todos } from "../models/todo.model";
import { todosInitialValue } from "../state/todo.init";
import { i18nInitialValue } from "../state/i18n.init";

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

    cache = inMemoryCache;

    return inMemoryCache;
}

export default initCache;
