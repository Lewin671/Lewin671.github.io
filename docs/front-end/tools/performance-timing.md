## performance timing

1. overview document: https://w3c.github.io/perf-timing-primer/#overview
2. 常用测性能 js 脚本:

```js
var {
    navigationStart,
    unloadEventStart,
    unloadEventEnd,
    redirectStart,
    redirectEnd,
    fetchStart,
    domainLookupStart,
    domainLookupEnd,
    connectStart,
    connectEnd,
    secureConnectionStart,
    requestStart,
    responseStart,
    responseEnd,
    domLoading,
    domInteractive,
    domContentLoadedEventStart,
    domContentLoadedEventEnd,
    domComplete,
    loadEventStart,
    loadEventEnd
} = window.performance.timing;

// you can adjust the startTime as you want
const startTime = navigationStart;
console.log(`navigationStart: ${navigationStart - startTime}`);

if (unloadEventStart != 0)
    console.log(`unloadEventStart: ${unloadEventStart - startTime}`);
if (unloadEventEnd != 0)
    console.log(`unloadEventEnd: ${unloadEventEnd - startTime}`);
if (redirectStart != 0)
    console.log(`redirectStart: ${redirectStart - startTime}`);
if (redirectEnd != 0)
    console.log(`redirectEnd: ${redirectEnd - startTime}`);

console.log(`fetchStart: ${fetchStart - startTime}`);
console.log(`domainLookupStart: ${domainLookupStart - startTime}`);
console.log(`domainLookupEnd: ${domainLookupEnd - startTime}`);
console.log(`connectStart: ${connectStart - startTime}`);
console.log(`connectEnd: ${connectEnd - startTime}`);
console.log(`secureConnectionStart: ${secureConnectionStart - startTime}`);
console.log(`requestStart: ${requestStart - startTime}`);
console.log(`responseStart: ${responseStart - startTime}`);
console.log(`responseEnd: ${responseEnd - startTime}`);
console.log(`domLoading: ${domLoading - startTime}`);
console.log(`domInteractive: ${domInteractive - startTime}`);
console.log(`domContentLoadedEventStart: ${domContentLoadedEventStart - startTime}`);
console.log(`domContentLoadedEventEnd: ${domContentLoadedEventEnd - startTime}`);
console.log(`domComplete: ${domComplete - startTime}`);
console.log(`loadEventStart: ${loadEventStart - startTime}`);
console.log(`loadEventEnd: ${loadEventEnd - startTime}`);
```