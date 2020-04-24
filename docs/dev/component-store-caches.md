---
title: 组件存储缓存
---

## 组件存储缓存

组件存储缓存作为 AMS 存储的其中一个模块主要用于存储页面级所有通过 `JSON` 创建的 `组件`。组件存储缓存会随着
页面加载时**缓存所有JSON创建的组件**并在**页面销毁时随之销毁**。 之所以将这么一个模块单独记录成一个文档是因为
这个组件存储缓存机制会直接影响后面章节中的`组件交互`。

** 注意: 理解这个章节有助于后续理解组件交互 **

## 组件存储缓存部分源码

源码部分可能在未来存在更新，如果同步不及时可以提出 `github issue` 或 `github pull request`。

```typescript
export interface ICacheValue {
  registryName: keyof typeof registries;
  componentName: string;
  props: IAnyObject;
  key: string;
  source: IAnyObject;
}

export interface ICache {
  [key: string]: ICacheValue;
}

/**
 * 组件缓存存储对象
 */
class ComponentStoreCaches {
  ...

  /**
   * 通过 key 进行搜索
   * @param {string} key - 缓存中的唯一标识, 也是组件中 key 唯一标识组件
   */
  public searchByKey(key: string): ICacheValue | null {
    const searchResult = this.search({ key });
    return searchResult[0] || null;
  }

  /**
   * 通过短名称进行快速搜索, 组合方式为 "<registryName:componentName>" 例如:
   * searchByShortName('html:a');
   * 其中:
   * registryName: 'html',
   * componentName: 'a'
   *
   * 对于仅需要搜索 registryName 时: searchByShortName('html');
   *
   * 对于仅需要搜索 componentName 时: searchByShortName(':a');
   * @param {string} shortName - 短名
   */
  public searchByShortName(shortName: string): ICacheValue[] {
    if (!shortName) {
      throw new error.UnexpectedError('参数 shortName 不能为空, 常规用法: searchByShortName(\'html:a\')');
    }
    const splits = shortName.split(':');
    const registryName = splits[0] as ICacheValue['registryName'];
    const componentName = splits[1];
    if (registryName && componentName) {
      return this.search({ registryName, componentName });
    }
    if (registryName) {
      return this.search({ registryName });
    }
    return this.search({ componentName });
  }

  /**
   * 高级查询
   * @param {} searchCondition - 查询条件, 可以使用 ICacheValue 中的值进行比对查询
   * 例如:
   * // 找出所有 registryName = 'antd' 的缓存值
   * searchCondition = {
   *   registryName: 'antd'
   * };
   * // 找出所有 componentName = 'a' 的缓存值
   * searchCondition = {
   *   componentName: 'a'
   * };
   */
  public search(searchCondition: Partial<ICacheValue>): ICacheValue[] {
    const { key } = searchCondition;
    if (key) {
      const cacheValue = this.get(key);
      return cacheValue ? [cacheValue] : [];
    }
    const { cache } = this;
    return Object.keys(cache).reduce((founds, cacheKey) => {
      const cacheValue = cache[cacheKey];
      if (this.checkOverlap(searchCondition, cacheValue)) {
        founds.push(cacheValue);
      }
      return founds;
    }, [] as ICacheValue[]);
  }
}
const componentStoreCaches = new ComponentStoreCaches();

/**
 * 仅用于本地测试, 禁止作为其他用途
 */
if (process.env.NODE_ENV === 'development') {
  (window as any).componentStoreCaches = componentStoreCaches;
}

export default componentStoreCaches;
```

## 用法

通过上述源码，我们基本能够了解如下几点：

  1. 在 development 环境时，开发者可以通过 `window.componentStoreCaches` 获取该对象
  2. public 方法为允许外部使用的方法
     - componentStoreCaches.search
     - componentStoreCaches.searchByShortName
     - componentStoreCaches.searchByKey
  3. 其中 `search` 为基础通用搜索，`searchByShortName` 和 `searchByKey` 为基于 `search` 函数的拓展函数

`componentStoreCaches.search` 为高级查询，函数的参数 `search(searchCondition: Partial<ICacheValue>)` 中的 `searchCondition` 搜索条件很容易理解，
搜索条件只要是**所属** `ICacheValue` 值即可搜索出结果，举个例子：

```javascript
// 当前缓存列表存在的缓存值
{
  'auto-1586876874713-2': {key: 'auto-1586876874713-2', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …}
  'auto-1586876874713-3': {key: 'auto-1586876874713-3', source: Proxy, registryName: "antd", componentName: "Card.Meta", props: {…}, lifecycle: undefined, …}
  'auto-1586876874713-4': {key: 'auto-1586876874713-4', source: Proxy, registryName: "antd", componentName: "Card", props: {…}, lifecycle: undefined, …}
  'auto-1586876874713-5': {key: 'auto-1586876874713-5', source: Proxy, registryName: "antd", componentName: "Card.Grid", props: {…}, lifecycle: undefined, …}
  'auto-1586876874713-6': {key: 'auto-1586876874713-6', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …}
  'auto-1586876874713-7': {key: 'auto-1586876874713-7', source: Proxy, registryName: "antd", componentName: "Card.Meta", props: {…}, lifecycle: undefined, …}
  'auto-1586876874713-8': {key: 'auto-1586876874713-8', source: Proxy, registryName: "antd", componentName: "Card", props: {…}, lifecycle: undefined, …}
}
```

这时我们希望搜索出 `key = 'auto-1586876874713-2'` 的一项： 

```javascript
window.componentStoreCaches.search({key: 'auto-1586876874713-2'});
// returns：[ {key: 'auto-1586876874713-2', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …} ]
```

或者可以使用 `searchByKey`, 由于 `key` 是唯一的，所以返回值将直接获得最终的对象结果而非数组：

```javascript
window.componentStoreCaches.searchByKey('auto-1586876874713-2');
// returns：{key: 'auto-1586876874713-2', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …}
```

我们也可以直接使用非 key 的比对搜索，如：

```javascript
window.componentStoreCaches.search({registryName: 'html', componentName: 'div'});
// returns：[ 
//   {key: 'auto-1586876874713-2', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …},
//   {key: 'auto-1586876874713-6', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …}     
// ]
```

为了让使用者有更便捷的体验，我们还提供了 `searchByShortName` 的简便用法, 基本结构如下：

```javascript
window.componentStoreCaches.searchByShortName('<registryName>:<componentName>');
```

`searchByShortName` 的基本用法:
```javascript
window.componentStoreCaches.searchByShortName('html:div');
// returns：[ 
//   {key: 'auto-1586876874713-2', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …},
//   {key: 'auto-1586876874713-6', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …}     
// ]
```

我们也可以只搜索 `registryName`：
```javascript
window.componentStoreCaches.searchByShortName('html');
// returns：[ 
//   {key: 'auto-1586876874713-2', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …},
//   {key: 'auto-1586876874713-6', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …}     
// ]
```

我们也可以只搜索 `componentName`, 需要注意的是，我们需要加上 `:` 用于标识搜索字段为 `componentName`：
```javascript
window.componentStoreCaches.searchByShortName(':div');
// returns：[ 
//   {key: 'auto-1586876874713-2', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …},
//   {key: 'auto-1586876874713-6', source: Proxy, registryName: "html", componentName: "div", props: {…}, lifecycle: {…}, …}     
// ]
```
