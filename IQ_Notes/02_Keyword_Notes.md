# JavaScript Keywords — Complete Reference

> **What is a Keyword?**
> A **keyword** is a reserved word in JavaScript that has a special meaning to the language engine. Keywords are part of the language syntax — you **cannot** use them as variable names, function names, or identifiers. Trying to do so will throw a syntax error.

---

## 1. Variable Declaration Keywords

| Keyword | Scope | Reassignable? | Redeclarable? | Hoisting | Temporal Dead Zone? |
|---------|-------|---------------|---------------|----------|---------------------|
| `var` | Function-scoped | ✅ Yes | ✅ Yes | Hoisted (initialized as `undefined`) | ❌ No |
| `let` | Block-scoped `{ }` | ✅ Yes | ❌ No | Hoisted (but **not** initialized) | ✅ Yes |
| `const` | Block-scoped `{ }` | ❌ No (must assign at declaration) | ❌ No | Hoisted (but **not** initialized) | ✅ Yes |

### Examples

```js
var a = 10;      // function-scoped, can be redeclared
let b = 20;      // block-scoped, cannot be redeclared
const c = 30;    // block-scoped, cannot be reassigned
```

---

## 2. Control Flow Keywords

| Keyword | Purpose |
|---------|---------|
| `if` | Executes a block if condition is truthy |
| `else` | Executes a block if the preceding `if` condition is falsy |
| `else if` | Chains another condition after an `if` |
| `switch` | Evaluates an expression and matches it to `case` labels |
| `case` | A specific value match inside a `switch` |
| `default` | Fallback case when no `case` matches |
| `for` | Loops with initializer, condition, and increment |
| `while` | Loops while a condition is truthy |
| `do` | Executes a block once, then loops while condition is truthy |
| `break` | Exits the current loop or `switch` |
| `continue` | Skips the rest of the current loop iteration and moves to the next |
| `return` | Exits a function and optionally returns a value |

---

## 3. Function & Class Keywords

| Keyword | Purpose |
|---------|---------|
| `function` | Declares a function |
| `class` | Declares a class (ES6) |
| `extends` | Makes a class inherit from another class |
| `new` | Creates an instance of a constructor or class |
| `this` | Refers to the current execution context (object) |
| `super` | Calls the parent class constructor or methods |
| `static` | Defines a static method/property on a class |
| `get` | Defines a getter property |
| `set` | Defines a setter property |

---

## 4. Module Keywords (ES6)

| Keyword | Purpose |
|---------|---------|
| `import` | Imports bindings from another module |
| `export` | Exports bindings from the current module |
| `default` | Specifies the default export of a module |
| `from` | Specifies the module path in `import` statements |
| `as` | Renames an imported/exported binding |
| `*` | Imports all exports as a namespace object |

---

## 5. Error Handling Keywords

| Keyword | Purpose |
|---------|---------|
| `try` | Wraps code that might throw an error |
| `catch` | Catches and handles an error thrown in `try` |
| `finally` | Executes a block regardless of `try`/`catch` outcome |
| `throw` | Throws a custom error |

---

## 6. Async & Generator Keywords

| Keyword | Purpose |
|---------|---------|
| `async` | Declares an asynchronous function (returns a Promise) |
| `await` | Pauses execution until a Promise settles (only inside `async`) |
| `yield` | Pauses/resumes a generator function |
| `yield*` | Delegates to another generator or iterable |

---

## 7. Operator / Expression Keywords

| Keyword | Purpose |
|---------|---------|
| `typeof` | Returns a string describing the type of a value |
| `instanceof` | Checks if an object is an instance of a constructor |
| `in` | Checks if a property exists in an object |
| `of` | Used in `for...of` loops to iterate over iterables |
| `delete` | Removes a property from an object |
| `void` | Evaluates an expression and returns `undefined` |

---

## 8. Literal / Value Keywords

| Keyword | Type | Description |
|---------|------|-------------|
| `true` | Boolean | Truthy boolean value |
| `false` | Boolean | Falsy boolean value |
| `null` | Null | Intentional absence of any object value |
| `undefined` | Undefined | Variable declared but not assigned a value |

---

## 9. Miscellaneous Keywords

| Keyword | Purpose |
|---------|---------|
| `debugger` | Invokes the debugger (if available) to pause execution |
| `with` | Extends the scope chain (❌ **deprecated** — avoid using) |

---

## 10. Reserved for Future Use

These are reserved by the language spec for potential future features — **cannot be used as identifiers**:

`enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`

---

## Quick Comparison: `var` vs `let` vs `const`

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block `{ }` | Block `{ }` |
| Redeclarable | ✅ Yes | ❌ No | ❌ No |
| Reassignable | ✅ Yes | ✅ Yes | ❌ No |
| Hoisted | ✅ Yes (value = `undefined`) | ✅ Yes (but TDZ) | ✅ Yes (but TDZ) |
| Temporal Dead Zone | ❌ No | ✅ Yes | ✅ Yes |
| Must initialize | ❌ No | ❌ No | ✅ Yes |
| Browser global property | ✅ Yes (`window.varName`) | ❌ No | ❌ No |
| Use case | Legacy / avoid | Mutable variables | Constants / never-reassign |

---

> **Rule of thumb:** Prefer `const` by default. Use `let` only when you need to reassign. Never use `var` in modern JavaScript.
