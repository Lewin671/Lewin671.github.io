## Implicit intents


### Introduction

A more flexible use of an intent is the implicit intenet. You don't specify the exact activity(or other component) to run - instead, you include just enough information in the intent about the task you want to perform. Android system matches the information in your request intent with any acitivty abvailable on the device that can perform that task. If there's only one activity matches the intent, the activity is launched. If more than one activity matches the intent, the user is presented with an app chooser and picks which app they would like to perform the task.

![ Intent requests matched with apps](https://lqy-blog.oss-cn-hangzhou.aliyuncs.com/implicit-intent.png)


For example, you have an app that lists availabe snippets of video. If the user touches an item in the list, you want to play that video snippet. Rather than implementing an entire video player in your own app, you can launch an Intent that specifies the task as "play an object of type video". The android system then matches your request with an activity that has registered itself to play objects of type video.


An Activity registers itself with system as being able to handle an implicit intent with intent filters, declared n the `AndroidManifest.xml`  file.

### Intent actions, categories and data

- The intent action, which is the generic action the receiving activity should perform. The available intent actions are defined as constants in the Intent class and begin with the word `ACTION_`. A common intent action is `ACTION_VIEW`, which you use when you have some information that an activity can show to the user, such as a phto to view in a gallery app, or an address to view in a map app. You can specify the action for an intent in the intent constructor, or with the `setAction` method.
- An intent category, which provides additional information about the category of component that should handle the intent. Intent category are optional, and you can add more than one category to an intent. Intent categories are also defined as constants in the intent class and begin with the word `CATEGORY_`. You can add categories the the intent with the `addCategory` method.
- The data type, which indicates the MIME type of data the activity should operate on. Usually, the data type is inferred from the URI in the intent data field, but you can also explicitly define the data type with `setType` method.

### Resolve the Activity before starting it

When you define an implicit Intent with a specific action and/or category, there is a possibility that there won't be any Activity on the device that can handle your request. **If you just send the Intent and there is no appropriate match, your app will crash.**


To verify that an Activity or other component is available to receive your Intent, use the resolveActivity() method with the system package manager like this:

```java
if (sendIntent.resolveActivity(getPackageManager()) != null) {
    startActivity(chooser);
}
```

If the result of resolveActivity() is not null, then there is at least one app available that can handle the Intent, and it's safe to call startActivity(). Do not send the Intent if the result is null.

### Show the app chooser

To find an Activity or other component that can handle your Intent requests, the Android system matches your implicit Intent with an Activity whose Intent filters indicate that they can perform that action. If there are multiple apps installed that match, the user is presented with an app chooser that lets them select which app they want to use to handle that Intent.



![ Android App Chooser](https://lqy-blog.oss-cn-hangzhou.aliyuncs.com/pv_intent-chooser.png)

To show the chooser, you create a wrapper Intent for your implicit Intent with the createChooser() method, and then resolve and call startActivity() with that wrapper Intent. The createChooser() method also requires a string argument for the title that appears on the chooser. You can specify the title with a string resource as you would any other string.

For example:

```java
// The implicit Intent object
Intent sendIntent = new Intent(Intent.ACTION_SEND);
// Always use string resources for UI text.
String title = getResources().getString(R.string.chooser_title);
// Create the wrapper intent to show the chooser dialog.
Intent chooser = Intent.createChooser(sendIntent, title);
// Resolve the intent before starting the activity
if (sendIntent.resolveActivity(getPackageManager()) != null) {
    startActivity(chooser);
}
```

### Intent filters

Define Intent filters with one or more `<intent-filter> elements in the `AndroidManifest.xml` file, nested in the corresponding `<activity>` element. Inside `<intent-filter>`, specify the type of intent your activity can handle. The Android system matches an implicit intent with an activity or other app component only if the fields in the Intent object match the Intent filters for that component.

An Intent filter may contain the following elements, which correspond to the fields in the Intent object described above:

- `<action>`: The Intent action that the activity accepts.
- `<data>`: The type of data accepted, including the MIME type or other attributes of the data URI (such as scheme, host, port, and path).
- `<category>`: The Intent category.

For example, the main Activity for your app includes this `<intent-filter>` element, which you saw in an earlier chapter:

```xml
<intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
```

This Intent filter has the action MAIN and the category LAUNCHER. The `<action>` element specifies that this is the app's "main" entry point. The `<category>` element specifies that this activity should be listed in the system's app launcher (to allow users to launch the activity). Only the main activity for your app should have this Intent filter.


**The Android system tests an implicit Intent against an Intent filter by comparing the parts of that Intent to each of the three Intent filter elements (action, category, and data). The Intent must pass all three tests or the Android system won't deliver the Intent to the component. However, because a component may have multiple Intent filters, an Intent that does not pass through one of a component's filters might make it through on another filter.**


#### Actions

An Intent filter can declare zero or more `<action>` elements for the Intent action. The action is defined in the name attribute, and consists of the string "android.intent.action." plus the name of the Intent action, minus the ACTION_ prefix. So, for example, an implicit Intent with the action ACTION_VIEW matches an Intent filter whose action is android.intent.action.VIEW.

For example, this Intent filter matches either ACTION_EDIT and ACTION_VIEW:

```xml
<intent-filter>
    <action android:name="android.intent.action.EDIT" />
    <action android:name="android.intent.action.VIEW" />
</intent-filter>
```

To get through this filter, the action specified in the incoming Intent object must match at least one of the actions. You must include at least one Intent action for an incoming implicit Intent to match.


#### Categories

An Intent filter can declare zero or more `<category>` elements for Intent categories. The category is defined in the name attribute, and consists of the string "android.intent.category." plus the name of the Intent category, minus the CATEGORY prefix.

For example, this Intent filter matches either CATEGORY_DEFAULT and CATEGORY_BROWSABLE:

```xml
<intent-filter>
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
</intent-filter>
```
**Note that any Activity that you want to accept an implicit Intent must include the android.intent.category.DEFAULT Intent filter. This category is applied to all implicit Intent objects by the Android system.**


#### Data

An Intent filter can declare zero or more `<data>` elements for the URI contained in the Intent data. As the Intent data consists of a URI and (optionally) a MIME type, you can create an Intent filter for various aspects of that data, including:

- URI Scheme
- URI Host
- URI Path
- Mime type

For example, this Intent filter matches any data Intent with a URI scheme of http and a MIME type of either "video/mpeg" or "audio/mpeg".

```xml
<intent-filter>
    <data android:mimeType="video/mpeg" android:scheme="http" />
    <data android:mimeType="audio/mpeg" android:scheme="http" />
</intent-filter>
```