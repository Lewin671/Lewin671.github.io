## Android 事件分发机制

简单来说，就是冒泡模型：事件从 activity 开始向下传递到 ViewGroup 、 View，然后从下往上处理事件直到事件被响应。

其中事件传递实现在 `dispatchTouchEvent`，事件处理在 `onTouchEvent`。

> 如果 `dispatchTouchEvent` 返回 true，则表示事件被当前 view 给处理过了，不会再继续传递事件；如果 `onTouchEvent` 返回 true，则表示当前事件被 `view` 处理过了，不会再向上冒泡。

另外，如果一个 View 的事件被父 ViewGroup 拦截了，则会收到一个 cancel 事件，剩余事件会交给拦截的父 ViewGroup 处理。

## 参考文章

1. https://www.jianshu.com/p/35a8309b9597