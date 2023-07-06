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

## Covariance and Invariance

In Java, an invariant is a type constraint that remains unchanged throughout the inheritance hierarchy. In other words, it preserves the type relationship between classes. Invariance provides stronger type safety guarantees compared to covariance or contravariance, which allow for more flexible type relationships but may introduce potential type-related errors.

In Java, covariance refers to the relationship between types in which a more derived type (subclass) is considered compatible with its base type (superclass). In other words, covariance allows you to use a subtype where a supertype is expected. This concept is primarily related to arrays and generic types.

Covariance with Arrays: In Java, arrays support covariance. 


To illustrate this, let's consider a simple example using a class hierarchy related to animals. We'll define a base class called `Animal` and two subclasses, `Dog` and `Cat`, which extend the `Animal` class.

```java
class Animal {
    // ...
}

class Dog extends Animal {
    // ...
}

class Cat extends Animal {
    // ...
}
```
Now, let's assume we have a container class called Box that can hold an instance of any animal:

```java
class Box<T extends Animal> {
    private T animal;

    public void setAnimal(T animal) {
        this.animal = animal;
    }

    public T getAnimal() {
        return animal;
    }
}
```

With this setup, let's examine the behavior of covariance, and invariance when working with the Box class.

### Covariance
Covariance allows a more flexible relationship between types, such as allowing a `Box<Dog>` to be treated as a `Box<Animal>`. However, it can lead to potential type-related errors. Consider the following code:

```java
Box<Dog> dogBox = new Box<>();
Box<Animal> animalBox = dogBox;  // Covariance
animalBox.setAnimal(new Cat());  // Legal, but problematic
Dog dog = dogBox.getAnimal();    // Runtime error: ClassCastException
```

In this case, we assigned a `Box<Dog>` to a `Box<Animal>` variable using covariance. We then set a `Cat` instance into the `animalBox`, which is allowed because `animalBox` is considered to contain `Animal` instances. However, at runtime, when we try to retrieve the animal as a `Dog` from `dogBox`, a ClassCastException occurs because the actual instance in the `dogBox` is a `Cat`.

### Invariance

Invariance preserves the type relationship as it is and does not allow assignments between different generic types, ensuring stronger type safety. Consider the following code:

```java
Box<Dog> dogBox = new Box<>();
Box<Animal> animalBox = dogBox;  // Compilation error: Type mismatch
```
In this case, we cannot assign a `Box<Dog>` to a `Box<Animal>` variable directly because of Invariance.




