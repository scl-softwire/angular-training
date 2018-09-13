# TypeScript Cheatsheet

Here's a handy reference for most of the common patterns you will have to use when writing TypeScript code. Don't be afraid to refer to this regularly!

<!-- TOC -->

- [TypeScript Cheatsheet](#typescript-cheatsheet)
    - [Basic types](#basic-types)
        - [Boolean](#boolean)
        - [Number](#number)
        - [String](#string)
        - [Array](#array)
        - [Tuple](#tuple)
        - [Void](#void)
        - [Null and Undefined](#null-and-undefined)
    - [Variable declarations](#variable-declarations)
        - [Overview](#overview)
        - [Let](#let)
        - [Const](#const)
        - [Destructuring assignments](#destructuring-assignments)
    - [Functions](#functions)
        - [Defining functions](#defining-functions)
        - [Optional/Defult Parameters](#optionaldefult-parameters)
        - [Arrow functions](#arrow-functions)
    - [Classes](#classes)
        - [A simple example](#a-simple-example)
        - [Public vs. Private](#public-vs-private)
        - [Shorthand constructors](#shorthand-constructors)
        - [Inheritance](#inheritance)
    - [Interfaces](#interfaces)
        - [A simple example](#a-simple-example-1)
        - [Optional properties](#optional-properties)
        - [Indexable types](#indexable-types)
        - [Inheritance](#inheritance-1)

<!-- /TOC -->

## Basic types

### Boolean

A value of type `boolean` holds a simple true/false value:

```typescript
let understandsBooleans: boolean = true;
```

### Number

All numbers in TypeScript are floating point values. These get the type `number`:

```typescript
let six: number = 6;
let pi: number = 3.14159;
```

### String

Text in TypeScript is represented by the type `string`. Literals of this type can be surrounded with either single `'` or double `"` quotes.

```typescript
let singleQuote: string = 'single';
let doubleQuote: string = "double";
```

You can also use template literals, which can have embedded expressions. These use `` ` `` backticks rather than single or double quotes.

```typescript
let age: number = 24;
let sentence: string = `I'll be ${age + 1} next year`;
```

### Array

A TypeScript array consists of elements all of the same type, and they are created using square brackets. Array access is also done using square brackets.

```typescript
let heegnerNumbers: number[] = [1, 2, 3, 7, 11, 19, 43, 67, 163];
let one: number = heegnerNumbers[0];
let oneSixThree: number = heegnerNumbers[heegnerNumbers.length - 1];
```

### Tuple

Tuple types allow you to express an array-like variable where the number of elements is known, but their types may be different:

```typescript
let valjean: [number, string] = [24601, 'Jean'];
```

### Void

The `void` type is used to declare the absence of a value. It is commonly used as the return type of a function that doesn't return a value.

```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

### Null and Undefined

In TypeScript, the values `null` and `undefined` have their own types, called, unsurprisingly: `null` and `undefined`.

```typescript
let n: null = null;
let u: undefined = undefined;
```

## Variable declarations

### Overview

In TypeScript, there are three keywords used to declare a variable: `var`, `let` and `const`. The latter two are a more modern addition to JavaScript/TypeScript, whereas `var` has existed since JavaScript began. Becuse of this, the rules about how `var` behaves versus how `let` and `const` behave are very complicated, and can be quite subtle.

Luckily, in almost all TypeScript code, you don't need to worry about `var` and can use `let` and `const` for everything. This is what we'll be doing.

### Let

The first way to declare a variable is using the `let` keyword. The variable can be declared with an initial value, or without - in which case its value will be `undefined`.

```typescript
let x: number = 10;
let y: number;
```

Variables declared with `let` are only accessible within the scope they are declared in:

```typescript
function scopingRules(val: number, add: boolean) {
    if (add) {
        let result = number + 1;
    } else {
        let result = number - 1;
    }
    return result; // Error! result is not accessible here.
}
```

Variables declared with `let` can be modified and have their value changed after they are declared:

```typescript
let x: number;
x = 10; // This is fine
x = 20; // This is also fine
```

### Const

The `const` keyword behaves very similarly to the `let` keyword, except variables delared with `const` can not have their values changed after they are declared.

```typescript
const x: number = 10;
x = 20; // This isn't allowed!
```

### Destructuring assignments

TypeScript allows you to assign elements of arrays and properties of objects to different variables in a single assignment:

```typescript
let arr: number[] = [1, 2, 3];
let [one, two, three] = arr;

let obj: {[s:string]: number} = {
    uno: 1,
    dos: 2,
    tres: 3
};
// These next two lines are equivalent
let { uno: one, dos: two } = obj;
let one = obj.uno; let two = obj.dos;
```

## Functions

### Defining functions

In TypeScript, functions are declared using the `function` keyword. The types of the parameters and the return type of the function can both be specified:

```typescript
function multiply(x: number, y: number): number {
    return x * y;
}

let ten: number = multiply(2, 5);
```

### Optional/Defult Parameters

Some parameters to a function can be made optional, which means they don't have to be given when you call the function. Such parameters can also have a default value:

```typescript
function fullName1(firstName: string, lastName?: string): string {
    return lastName
        ? firstName + ' ' + lastName
        : firstName;
}

function fullName2(firstName: string, lastName: string = 'Smith'): string {
    return firstName + ' ' + lastName;   
}

fullName1('Joe'); // Joe
fullName1('Joe', 'Bloggs'); // Joe Bloggs
fullName2('Joe'); // Joe Smith
fullName2('Joe', 'Bloggs'); // Joe Bloggs
```

### Arrow functions

Functions can also be defined using what is known as arrow syntax - this is often convenient when defining a function in-line with other code.

```typescript
let multiply = (x: number, y: number): number => x * y;

let fullName = (firstName: string, lastName?: string): string => {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
} 
```

## Classes

Support for classes and object-oriented programming in JavaScript is a bit murky, with only the most modern versions supporting classical object-oriented programming. By contrast, TypeScript has a rich set of object-oriented features that you can use without needing to worry about how they become JavaScript behind-the-scenes.

### A simple example

The simplest example of a TypeScript class looks something like this:

```typescript
class Greeter {

    // Member variables
    name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Methods
    getGreeting(): string {
        return `Hello, ${this.name}`;
    }
}
```

This class contains a member variable `name` of type `string`, a constructor, and a single public method. It can be used like this:

```typescript
let greeter: Greeter = new Greeter('Sam');
let greeting = greeter.getGreeting();
```

### Public vs. Private

Classes in TypeScript can have both `public` and `private` members and methods. Public access means that the members and methods of your object can be accessed from anywhere, while private access restricts direct usage to code that is written within the class definition. 

Public is the default, but members or methods can be made private by prefixing them with the `private` keyword:

```typescript
class Greeter {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getGreeting(): string {
        return `Hello, ${this.name}`;
    }
}

let greeter = new Greeter('Sam');
let greeting = greeter.getGreeting(); // Okay, since getGreeting is public
let name = greeter.name; // Not allowed, name is private
```

### Shorthand constructors

Often our class constructor will simply take the arguments that were passed in, and assign them to member variables. TypeScript has a shorthand for achieving this - if you prefix a constructor parameter with either `public` or `private` it will automatically become a member variable. This class is exactly the same as the last version:

```typescript
class Greeter {

    constructor(private name: string) { }

    getGreeting(): string {
        return `Hello, ${this.name}`;
    }
}
```

### Inheritance

TypeScript classes also support inheritance. Inheritance is used in object-oriented programming to define a set of base members and methods that all objects of a certain type should have, while leaving open the possibility of extending specific instances with extra functionality. This is easiest to understand through an example:

```typescript
class Cake {

    constructor(protected flavour: string) { }

    bake(): void {
        // ...
    }
}

class BirthdayCake extends Cake {
    
    constructor(flavour: string, private age: number) {
        super(flavour);
    }

    putCandlesOnCake(): void {
        // ...
    }
}
```

Here we define a base class, `Cake`, with a member `flavour` and a method `bake` that apply to all cakes. We then extend the `Cake` class to define `BirthdayCake`, which retains all the functionality of a `Cake`, but also allows us to put candles on it. There are a few points to notice:

  - The `protected` keyword is used instead of `private` for the `flavour` member. This keyword means that `flavour` will still be accessible from within classes that extend `Cake`.

  - The call to `super` in the constructor of `BirthdayCake`. This is a requirement in constructors of derived classes, and it refers to the constructor of the parent class - in this case `Cake`.

## Interfaces

Interfaces are a core feature of TypeScript. They allow you to make assertions about the "shape" that a particular value should have without worrying about its exact type.

### A simple example

```typescript
interface HasAge {
    age: number;
}

class Person {
    constructor (public firstName: string, 
                 public lastName: string, 
                 public age: number) { }
}

class Dog {
    constructor (public breed: string,
                 public age: number) { }
}

function logAge(x: HasAge): void {
    console.log(x.age);
}

// These function calls are all valid
logAge({age: 10});
logAge(new Person('Bob', 'Smith', 40));
logAge(new Dog('Chihuahua', 4));
```

Here, the `HasAge` interface matches any type that allows you to access a number via the `age` property, which is true of all three of the function calls we made.

### Optional properties

Interfaces can have optional properties, which then match types even if those properties are not present.

```typescript
interface OptionalExample {
    requiredString: string;
    optionalNumber?: number;
}

// These are both valid
let x: OptionalExample = { requiredString: 'string' };
let y: OptionalExample = { requiredString: 'string', optionalNumber: 1 };
```

### Indexable types

You can also use interfaces to describe types that we can "index into":

```typescript
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['foo', 'bar', 'baz'];

interface StringMap {
    [s: string]: string;
}

let obj: StringMap = { 'one': 'uno', 'two': 'dos' };
```

The only supported types for use as an index are `string` and `number` - but there is no restriction on the types that can be the result of an indexing operation.

### Inheritance

Like classes, interfaces can extend other interfaces:

```typescript
interface Shape {
    colour: string;
}

interface Square extends Shape {
    sideLength: number;
}

let redUnitSquare: Square = { colour: 'red', sideLength: 1 };
```

Unlike classes, interfaces can extend multiple other inerfaces at once.