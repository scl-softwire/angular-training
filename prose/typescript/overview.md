# TypeScript Overview

<!-- TOC -->

- [TypeScript Overview](#typescript-overview)
    - [What is TypeScript?](#what-is-typescript)
    - [How does TypeScript use types?](#how-does-typescript-use-types)
    - [A word of warning about types](#a-word-of-warning-about-types)

<!-- /TOC -->

## What is TypeScript?

In technical terms, TypeScript is a strongly-typed, object-oriented compiled language. It is very similar to JavaScript - in fact, all valid JavaScript code is also valid TypeScript - so you can think of it as JavaScript with strict typing, and extra object-oriented features. 

TypeScript compiles to JavaScript, so by the time you come to actually running your code, all the information about type annotations has been stripped away. TypeScript doesn't add any extra safety at runtime!

A lot of JavaScript's more modern features that aren't yet supported by browsers are supported by the TypeScript compiler, making TypeScript somewhat more pleasant to write in at times.

## How does TypeScript use types?

Here's an example of a simple Javascript function:

```
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
```

In plain JavaScript, code that uses this could in theory pass any values it liked into the function. It is perfectly valid to call `fullName(1, 2)` - and the result would be `3`. It's even possible in JavaScript to pass in arguments that mean the function won't run at all - it will just cause an error at runtime.

TypeScript prevents this by allowing you to declare the types of the parameters and the return value:

```
function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}
```

Now, if we try to write `fullName(1, 2)`, the compiler emits an error: `Argument of type '1' is not assignable to parameter of type 'string'.`

TypeScript's type system is very sophisticated - this is just a simple example - and it allows us to be more confident that the code we write is correct and will work as expected.

## A word of warning about types

Types in TypeScript code are optional - you don't need to annotate them everywhere. Sometimes, the compiler will be able to work out the type of a variable based on how it is declared or how it is used. This is mostly useful for local variables that only live for a short time. It's good practice in TypeScript to always annotate the types of:

  - Class member variables
  - Interface members
  - Function parameters and return values

If you don't annotate any types at all, then the compiler probably won't be able to detect any type errors you've made. If it doesn't know what types to expect, it can't tell you if you're using them wrongly!