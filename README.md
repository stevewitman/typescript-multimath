
https://app.pluralsight.com/player?course=typescript-getting-started&author=brice-wilson&name=typescript-getting-started-m2&clip=1&mode=live
# Notes

### Common Built-in Basic Data Types

* Boolean
* Number
* String
* Array
* Enum
* Void
* Null
* Undefined
* Never
* Any

### Declarations with *let* and *const*

Works because of hoisting, syntactically valid but can be confusing ...

```
console.log(someString)
var someString = "Hello world"
```

Doesn't work. Variables declared with *let* may not be used prior to their declaration.

```
console.log(someString)
let someString = "Hello world"
```

This works.

```
let someString = "Hello world"
console.log(someString)
```

Use *const* when you know a value should never change.

### Type Annotations and Type Inference

let x: string = "I will be a string forever";
x = 42; // gives error!

let y = "I will be a string forever";
x = 42; // still gives error because of type inrefence!

### Template Literals

Template literals were added to ES2015 and adopted by TS.
Use a string surrounded by back-ticks, then include expressions in a string by inserting a dollar-sign in front of curly-braces with the expression inside.

```
function logPlayer(name) {
    console.log(`New game starting for player: ${name}`)
}
```

### Union Types

Declare several possible types that may be assigned to a variable

```
let someValue: number | string;
```

### Using the *--strictNullChecks* Compiler Option 

By default, null and undefined can be assigned to any types. That can be avoided by *--strictNullChecks* which prevents null and undefined unless specifically opted in with a *union type*

```
let basicString: string;
basicString = null; // ERROR!
nullableString = undefined: // ERROR!
```

```
let nullableString: string | null;
nullableString = null; // works!
nullableString = undefined: // ERROR!
```

```
let mysteryString: string | null | undefined;
nullableString = undefined; // works!
```

### Type Assertions

let value: any = 5;

let fixedString: string = (<number>value)

## Function Parameters

* Function parameters are one place where TypeScript can't infer types.  In the following example, the parameters will implicitly be assigned the *any* type.

function dullFunc(val1, val2) {
}

A better way of writing a function ...

function funFunc(score: number, message?: string): string {
}

* The *?* after the second parameter makes it an optional parameter.
* In TypeScript all parameters are considered required unless you specifically flag them as optional.
* Optional parameters must be declared after all required parameters.
* TypeScript gives an error when you call a function with less that the required number of parameters in the function signature.
* TypeScript gives an error when you call a function with more than the function expects.
* Using the *any* type implicitly **or** explicitly effectively turns off the type checking for that variable or parameter.
* Use the *--noImplicitAny* compiler option to avoid accidentally using an implicit *any* type.

## Default-Initialized Parameters

function sendGreeting(greeting: string = 'Good Morning!'): void {
    console.log(greeting);
}

The *= 'Good Morning!'* effectively makes the parameter optional and assigns it the default value if no value is passed to the function.  

Here also we specified void as the return type since this function does not return a value.

