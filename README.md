https://app.pluralsight.com/player?course=typescript-getting-started&author=brice-wilson&name=typescript-getting-started-m2&clip=1&mode=live

# Notes
Boolean
Number
String
Array
Enum

Declarations with *let* and *const*

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



