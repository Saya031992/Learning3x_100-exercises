# Identifier Rules in JavaScript

## What is an Identifier?

An **identifier** is the name you give to a variable, function, class, property, or parameter in JavaScript. It's how you refer to that entity in your code.

```js
const userName = "Alice";   // userName is an identifier
function greet() {}          // greet is an identifier
class UserAccount {}         // UserAccount is an identifier
```

---

## Rules for Naming Identifiers

| # | Rule | Valid Example | Invalid Example |
|---|------|---------------|-----------------|
| 1 | Must start with a letter, `_`, or `$` | `name`, `_temp`, `$id` | `1name` (`1name`) |
| 2 | Can contain letters, digits, `_`, or `$` | `userName1`, `data_2` | `user-name` (hyphen `-`) |
| 3 | Cannot use a **reserved keyword** | `playerScore` | `let` (keyword) |
| 4 | Case-sensitive | `name` and `Name` are different | Not applicable |
| 5 | Unicode letters allowed (ES6+) | `café`, `π`, `straße` | ` ` (space) |

### The 4 Legal Starting Characters

| Start With | Example | Use Case |
|------------|---------|----------|
| Letter (a–z, A–Z) | `count`, `Person` | Most common — variables, functions |
| `_` (underscore) | `_private`, `__proto__` | Convention for "private" in older JS |
| `$` (dollar) | `$element`, `$` | Common in jQuery, DOM references |
| Unicode letter | `π`, `café` | Math symbols, non-English variables |

---

## Valid vs Invalid Identifier Examples

### ✅ Valid Identifiers

```js
let name;
let _privateVar;
let $element;
let userName123;
let camelCaseExample;
let _;
let $;
let π;             // Unicode — valid in ES6+
let straße;        // Unicode — valid
let myVariable;
let _tempValue;
let $button;
let data2;
```

### ❌ Invalid Identifiers

```js
let 1name;          // Starts with a digit
let my-variable;    // Hyphen is not allowed
let let;            // Reserved keyword
let class;          // Reserved keyword
let my variable;    // Space is not allowed
let true;           // Reserved keyword (literal)
let function;       // Reserved keyword
let default;        // Reserved keyword
```

---

## Reserved Keywords vs Identifiers

### What Are Reserved Keywords?

Reserved keywords are words that JavaScript uses for its own syntax. You **cannot** use them as identifiers.

| Category | Keywords |
|----------|----------|
| **Variable Declarations** | `var`, `let`, `const` |
| **Control Flow** | `if`, `else`, `switch`, `case`, `default`, `break`, `continue`, `for`, `while`, `do`, `return` |
| **Function & Class** | `function`, `class`, `extends`, `new`, `this`, `super`, `static`, `get`, `set` |
| **Error Handling** | `try`, `catch`, `finally`, `throw` |
| **Async** | `async`, `await`, `yield` |
| **Operators** | `typeof`, `instanceof`, `in`, `of`, `delete`, `void` |
| **Literals** | `true`, `false`, `null`, `undefined` |
| **Modules** | `import`, `export`, `from`, `as` |
| **Misc** | `debugger`, `with` |
| **Future Reserved** | `enum`, `implements`, `interface`, `package`, `private`, `protected`, `public` |

> **Rule of thumb:** If the word appears blue/purple in VS Code (syntax-highlighted as a keyword), you can't use it as an identifier.

### Keywords That Are NOT Reserved (Contextual)

These work as identifiers in most contexts but have special meaning in specific syntax:

```js
let undefined = 5;     // Works but confusing — avoid!
let NaN = 10;          // Works but overrides the global NaN
let name = "hello";    // Not reserved — OK to use
```

---

## Naming Conventions

JavaScript itself doesn't enforce naming conventions, but the community follows these:

| Convention | Pattern | Example | Where to Use |
|------------|---------|---------|-------------|
| **camelCase** | Starts lowercase, each new word capitalized | `userName`, `getUserData`, `isActive` | Variables, functions, parameters, methods |
| **PascalCase** | Every word starts with uppercase | `UserAccount`, `HttpClient`, `AppConfig` | Classes, constructor functions, React components |
| **snake_case** | Words separated by underscores | `user_name`, `get_user_data` | Rare in JS — sometimes used for database fields or Python interoperability |
| **UPPER_CASE** | All caps with underscores | `MAX_LIMIT`, `API_KEY`, `PI` | Constants (values that never change), environment variables |
| **kebab-case** | Words separated by hyphens | `my-component` | ❌ **Not valid** in JavaScript — hyphens are minus operators |

### Examples by Convention

```js
// camelCase — variables & functions
const userName = "Alice";
let isLoggedIn = false;
function fetchUserData() {}

// PascalCase — classes & constructors
class UserProfile {}
class ApiService {}

// UPPER_CASE — constants
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";

// _ prefix — convention for "private" (not truly private)
class Account {
  constructor() {
    this._balance = 0;
  }
}
```

---

## Best Practices

| Practice | Why |
|----------|-----|
| **Use camelCase for variables & functions** | Standard JS convention — all libraries follow this |
| **Use PascalCase for classes** | Distinguishes constructors from regular functions |
| **Use UPPER_CASE for true constants** | Makes immutable values easily identifiable |
| **Use descriptive names** | `let totalPrice` → clear; `let tp` → unclear |
| **Avoid single-letter names** (except loops) | `i`, `j`, `k` are fine inside `for` loops only |
| **Avoid abbreviations** unless very common | `btn` OK as common; `usrNm` → write `userName` |
| **Boolean variables should sound like yes/no** | `isActive`, `hasPermission`, `canEdit` |
| **Functions should start with a verb** | `getUser()`, `setName()`, `validateInput()` |
| **Don't override built-in globals** | Avoid `name`, `status`, `length` as variable names |
| **Be consistent** | Pick one convention and stick with it across the project |

### ✅ Good

```js
const userAge = 25;
let isSubscribed = false;
function calculateTotal(items) {}
class OrderService {}
const TAX_RATE = 0.08;
```

### ❌ Bad

```js
const x = 25;                    // Unclear — what is x?
let f = false;                   // Unclear
function calc(i) {}              // Unclear
class os {}                      // Too short, unclear
let user_age = 25;               // Inconsistent — use camelCase
function GetUser() {}            // Functions should start lowercase
let Name = "Alice";              // Overrides global window.Name
```

---

## Common Interview Questions

### Q1: Can I use `$` and `_` to start identifiers?

**Yes.** Both are valid. `$` was popularized by jQuery (`$('#id')`), and `_` is used by lodash/underscore. Some frameworks use `$` for special properties (e.g. Vue's `$data`, Svelte's `$:`).

### Q2: What happens if I try to use a reserved keyword?

You get a **SyntaxError**:

```js
let let = 5;     // ❌ SyntaxError: let is a reserved identifier
```

### Q3: Is JavaScript case-sensitive?

**Yes.** These are 4 different variables:

```js
let name = "Alice";
let Name = "Bob";
let NAME = "Charlie";
let naMe = "Diana";
```

### Q4: Can I use Unicode characters in identifiers?

**Yes (ES6+).** But avoid it unless there's a good reason — it can cause encoding issues on some systems:

```js
let π = 3.14159;      // Valid
let 你好 = "hello";     // Valid but unconventional
```

### Q5: What's the difference between `undefined` as a keyword and a value?

`undefined` is both a value **and** a global variable. While you can technically assign to it (`undefined = 5`), you should never do this — it's confusing and can be prevented with strict mode.

---

## Summary

```
IDENTIFIER RULES (in 30 seconds):
┌──────────────────────────────────────────────┐
│  ✅ Start with: a-z, A-Z, _ , $              │
│  ✅ Follow with: letters, digits, _ , $       │
│  ❌ No reserved keywords                      │
│  ❌ No spaces, hyphens, or special characters │
│  ⚠️  Case-sensitive                           │
│  ⚡ Convention: camelCase (vars)              │
│                PascalCase (classes)           │
│                UPPER_CASE (constants)         │
└──────────────────────────────────────────────┘
```

| Aspect | Rule |
|--------|------|
| **First character** | Letter, `_`, or `$` only |
| **Other characters** | Letters, digits, `_`, `$` only |
| **Reserved words** | Cannot use keywords or future keywords |
| **Case sensitivity** | `name` ≠ `Name` ≠ `NAME` |
| **Convention (variables)** | camelCase |
| **Convention (classes)** | PascalCase |
| **Convention (constants)** | UPPER_CASE |
