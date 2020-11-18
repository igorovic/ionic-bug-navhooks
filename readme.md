# Bug Report

**Ionic version:**
[ ] **4.x**
[x] **5.x**

**Current behavior:**
ion-route properties `beforeEnter` and `beforeLeave` are removed in function [matchesPath](https://github.com/ionic-team/ionic-framework/blob/33768e1d0ce5be2b9f6cb49faab6fbaa636e94a3/core/src/components/router/utils/matching.ts#L74)

**snippet**
```ts
return chain.map((route, i) => ({
      id: route.id,
      path: route.path,
      params: mergeParams(route.params, allparams![i])
    }));
```

**should be something like this**
```ts
return chain.map((route, i) => ({
      id: route.id,
      path: route.path,
      params: mergeParams(route.params, allparams[i]),
      beforeEnter: route.beforeEnter,
      beforeLeave: route.beforeLeave
    }));
```

Because then the navigation hooks are used in [router.tsx](https://github.com/ionic-team/ionic-framework/blob/77464ef21aaaa5afa7a02e5417f3ec295b240601/core/src/components/router/router.tsx#L283)

**snippet**
```ts
const beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
const beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;
```

**_But since those properties where previously removed they are always undefined._**



