## Error and Exception

Errors and exceptions are sublcass of the Throwable Java class. The Error class represents critical conditions that can not be caught and handled by the code of the program. On the other hand, the Exception class represents concerning conditions raised by the application itself; these can be caught and handled within the code to ensure the application continues to run smoothly.

![Error and Execption](https://lqy-blog.oss-cn-hangzhou.aliyuncs.com/6032805567922176-20221118202048284.svg)


## Error

Errors are usually raised by the environment in which the application is running. For example, an error will occur due to a lack of system resources.

It is not possible to recover from an error.

Errors occur at run-time and are not known by the compiler; hence, they are classified as "unchecked".


"OutOfMemory" and "StackOverflow" are examples of errors.

## Exception

Exceptions are caused by the code of the application itself. The use of `try-catch` blocks can handle exceptions and recover the application from them.

Exceptions can be "checked" or "unchecked", meaning they may or may not be caught by the compiler.

"IndexOutOfBounds" is an example of unchecked exception, while "ClassNotFound" is an example of a checked exception.
