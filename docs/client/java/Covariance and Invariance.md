## Covariance and Invariance

An ArrayStoreException is a runtime exception in Java that occurs when an attempt is made to store the incorrect type of object into an array of objects. For example, if an Integer object is attempted to be stored in an String array, a “java.lang.ArrayStoreException: java.lang.Integer” is thrown.

```java
import java.util.Arrays;

public class ArrayStoreExceptionExample {
    public static void main(String[] args) {
        Object[] array = new String[2];
        array[0] = 5;
        array[1] = "abc";
        Arrays.stream(array).forEach(System.out::println);
    }
}
```

Running the above code produces the following output:

```
Exception in thread "main" java.lang.ArrayStoreException: java.lang.Integer
	at ArrayStoreExceptionExample.main(ArrayStoreExceptionExample.java:6)
```

However, it won't throw exception if you new an `Object` array.

```java
import java.util.Arrays;

public class ArrayStoreExceptionExample {
    public static void main(String[] args) {
        Object[] array = new Object[2];
        array[0] = 5;
        array[1] = "abc";
        Arrays.stream(array).forEach(System.out::println);
    }
}
```

## why

Because arrays in Java are covariant, generic types are invariant instead.

## Covariance, Contravariance and Invariance

### Covariance

协变（Covariance）是一种类型系统的特性，指的是子类型的关系与其父类型之间的兼容性。在协变中，可以将子类型的实例赋值给父类型的引用，而不需要进行类型转换。简单来说，协变允许使用更具体的类型替代较为一般的类型。

在编程语言中，协变通常与继承、泛型和函数返回类型有关。下面以几个例子来说明协变的概念：

1. 继承关系中的协变：假设有一个类 A 和它的子类 B，如果可以将 B 类型的实例赋值给 A 类型的引用，那么就可以说在这个继承关系中存在协变。

2. 数组的协变：在某些编程语言中，数组是协变的。例如，在 Java 中，如果 B 是 A 的子类型，那么 B[] 类型的数组可以赋值给 A[] 类型的数组引用。

3. 泛型的协变：在支持泛型的语言中，可以使用协变来确保泛型类型参数的一致性。例如（Java 的范型不支持协变），如果 B 是 A 的子类型，那么 `List<B>`可以赋值给 `List<A>`，这样就允许使用更具体的类型。

4. 函数返回类型的协变：在某些编程语言中，函数的返回类型可以是其返回类型的子类型。例如，在 Java 中，如果一个父类的方法返回类型是 A，而子类中重写该方法时返回类型是 B，那么就存在协变。

协变提供了更灵活和方便的编程方式，可以在不引入类型转换的情况下处理多态和继承关系。它使得代码更易读、更易扩展，并提供了更好的类型安全性。然而，协变也需要小心使用，因为类型的兼容性需要在语言的类型系统中得到支持，而且需要遵循特定的规则和语法。

### Controvariance

逆变（Contravariance）是一种类型系统的特性，与协变相反。在逆变中，可以将父类型的实例赋值给子类型的引用，而不需要进行类型转换。简单来说，逆变允许使用更一般的类型替代较为具体的类型。

逆变通常与函数参数类型和方法参数类型有关。下面通过几个例子来说明逆变的概念：

1. 继承关系中的逆变：假设有一个类 A 和它的子类 B，如果可以将 A 类型的实例赋值给 B 类型的引用，那么就可以说在这个继承关系中存在逆变。

2. 函数参数类型的逆变：在某些编程语言中，函数的参数类型可以是其参数类型的超类型。例如，在 Java 的函数式接口中，如果一个函数接口 `Function<B, R>`中的参数类型是 B，而另一个函数接口 `Consumer<A>`中的参数类型是 A，那么 `Function<B, R>`可以赋值给 `Consumer<A>`，这样就允许使用更一般的类型。

3. 方法参数类型的逆变：在一些语言中，方法的参数类型也可以是其参数类型的超类型。这允许子类方法接受比父类方法更一般的类型。这在一些回调或事件处理的场景中很常见。

逆变提供了一种更灵活和通用的编程方式，可以在不引入类型转换的情况下处理多态和继承关系。它可以使代码更具扩展性和复用性，并提供更好的类型安全性。然而，逆变需要在语言的类型系统中得到支持，并需要遵循特定的规则和语法。不同编程语言对逆变的支持程度和语法可能有所不同。

### Invariance

不变（Invariance）是一种类型系统的特性，与协变和逆变相对。在不变中，类型之间没有任何子类型或父类型的关系，类型之间不可互相赋值，除非进行类型转换。

在不变的情况下，无法将一个类型的实例直接赋值给另一个类型的引用，即使它们之间存在继承或关联关系。必须使用显式的类型转换来实现类型之间的转换。

不变性在保证类型安全性方面提供了一定的保障，因为它限制了类型之间的赋值操作，可以避免一些潜在的类型不兼容的错误。然而，不变性也可能导致一些使用上的不便，因为在需要进行类型转换时需要显式地编写转换代码。

许多编程语言中的类和对象通常是不变的，例如 Java 中的普通类和对象。这意味着无法将一个对象直接赋值给另一个类或对象的引用，除非进行类型转换。

需要注意的是，有些编程语言中提供了一些特殊的语法或机制来实现某种形式的类型变化，例如 C#中的协变和逆变修饰符（in 和 out 关键字）。这些机制可以在特定的上下文中实现类型之间的一定程度的转换，但仍然需要遵循语言规范和类型系统的限制。

### Java 中的 Covariance, Contravariance 和 Invariance

在 Java 中，以下是一些常见的类型和场景，它们支持协变、逆变或不变的特性：

协变（Covariant）：

1. 数组：Java 中的数组是协变的，即可以将子类型的数组赋值给父类型的数组引用。
2. 通配符上界：通过使用通配符（? extends T）作为泛型的上界，可以实现协变。这允许将具体类型的集合赋值给其父类型的引用。
3. 返回类型：在方法的重写中，子类方法可以返回比父类方法更具体的类型。

> 注意：虽然通配符上界的范型支持协变，但对于该范型来说，无法进行写操作（添加或修改集合元素），因为具体类型是未知的。因此，通配符上界主要用于读取集合中的元素，以获取父类型的数据。这也就解释了，为什么通配符上界支持协变：因为无法修改元素的类型。


逆变（Contravariant）：

1. 通配符下界：通过使用通配符（? super T）作为泛型的下界，可以实现逆变。这允许将具体类型的集合赋值给其子类型的引用。
2. 方法参数类型：在方法重载中，可以使用逆变来实现更一般的方法参数类型。

不变（Invariant）：

1. 类和对象：Java 中的类和对象是不变的，即一个类的实例不能直接赋值给另一个类的引用，除非进行类型转换。
2. 泛型类和接口：Java 中的泛型类和接口默认是不变的。即使一个类 B 是类 A 的子类型，`Box<B>`和 `Box<A>`之间也没有任何继承关系。
   需要注意的是，尽管在某些场景中支持协变和逆变，但在使用时需要小心谨慎。不当的使用可能导致类型安全性问题或运行时错误。因此，在使用协变和逆变时，应遵循语言规范和类型系统的限制，并确保类型之间的兼容性。
