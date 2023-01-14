## IPC

### Interface Definition Language

An interface description language or interface definition language(IDL) is generic term for a language that lets a program or object written in one language communicate with another progrom written in an unkown language.

IDLs describe an interface in a language-independent way, enabling communication between software components that do not share one language, for example, between those written in C++ and those written in Java.

> Note: Using AIDL is important as long as you permit clients from different applications to access your service for IPC and need to handle multithreading in your service. 

### Examples

- AIDL: Java based, for Android, supports local and remote procedure calls, can be accessed from native application by calling through Java Native Interface(JNI)。
- Protocol Buffers: Google's IDL
- Web IDL: can be used to describe interfaces that are intended to be implemented in web browsers

### Terminologies

1. Client: Any code which invokes an operation on a distributed object.
2. Client stub: The remote object reference held by the client pointer to the client stub. This stub is specific to the IDL interface from which it was generated, and it contains the information needed for the client to invoke a method on the object that was defined in the IDL interface.
3. Server: A program that contains the implementations of one or more IDL interaces. For example, a desktop publishing server might implement a `Document` object type, a `ParagraphTag` object type, and other related object types. The server is required to register each implementation with the ORB so that the ORB knows about the servant.
4. Object Request Broker (ORB): The libraries, processes, and other infrasturcture in a distributed environment that enable objects to communicate with each other. The ORB connects objects requesting services to the object providing them.

### Android IPC

![android-binder-ipc](https://lqy-blog.oss-cn-hangzhou.aliyuncs.com/android-binder-ipc.png)

Because the standard IPC mechanisms weren’t flexible or reliable enough, a new IPC mechanism called Binder was developed for Android. Binders are the cornerstone of Android’s architecture. It abstracts the low-level details of IPC from the developer, allowing applications to easily talk to both the System Server and others’ remote service components.


As mentioned earlier, a process cannot access another process’s memory. However, the kernel has control over all processes and therefore can expose an interface that enables IPC. In Binder, this interface is the /dev/binder device, which is implemented by the Binder kernel driver. The Binder driver is the central object of the framework, and all IPC calls go through it.

The Binder driver-managed chunk of memory is read-only to the process, and all writing is performed by the kernel module. When a process sends a message to another process, the kernel allocates some space in the destination process’s memory and copies the message data directly from the sending process.

Higher-level IPC abstractions in Android such as Intents, Messengers and ContentProviders are built on top of Binder. Additionally, service interfaces that need to be exposed to other processes can be defined using the Android Interface Definition Language (AIDL), which enables clients to call remote services as if they were local Java objects.
