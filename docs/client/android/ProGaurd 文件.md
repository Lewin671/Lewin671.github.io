## progaurd-rules

ProGaurd is a tool to help minify, obfuscate, and optimize your code. It's not only especially useful for reducing the overall size of your Android application as well as removing unused class and methods that contribute towards the [intrinsic 64K method limit](https://developer.android.com/studio/build/multidex#avoid) of Android application.

ProGaurd can be enabled by using the `minifyEnabled` option for any build type.

```gradle
android {
   buildTypes {
      dev {
          minifyEnabled true  // enables ProGuard
          proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
      }
}
```

The Android SDK comes with ProGaurd included as well as default setting file, which are speicified as [proguard-android.txt](https://android.googlesource.com/platform/sdk/+/master/files/proguard-android.txt)

It is important to include this file since it explicitly includes configuration settings such as explicitly stating that all View getter and setter methods should not be removed. The proguard-rules.pro file is the file that you will use to configure.


## 注意事项

由于 dev 和 production 环境的不同，可能会有不一样的 proguard rules，可能会导致在 dev 环境下代码没有被裁剪，而在 production 环境下，代码被裁剪了。 典型的例子就是通过 `@JavascriptInterface` 注解的方法，如果没有显式调用，编译时该方法可能会被移除。