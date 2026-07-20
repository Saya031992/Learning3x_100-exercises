# JavaScript `let` Keyword — Breakdown

## 1. Breakdown Table — `var` vs `let` vs `const`

| Feature               | `var`                     | `let`                     | `const`                   |
|-----------------------|---------------------------|---------------------------|---------------------------|
| **Scope**             | Function-scoped           | Block-scoped `{ }`        | Block-scoped `{ }`        |
| **Hoisting**          | Hoisted, initialized as `undefined` | Hoisted, **not initialized** (TDZ) | Hoisted, **not initialized** (TDZ) |
| **Reassignment**      | ✅ Allowed                | ✅ Allowed                | ❌ Not allowed            |
| **Redeclaration**     | ✅ Allowed in same scope  | ❌ SyntaxError            | ❌ SyntaxError            |
| **Temporal Dead Zone**| ❌ No                     | ✅ Yes (error if accessed before declaration) | ✅ Yes |
| **Global Object**     | Becomes `window.varName`  | Does **not** become `window` property | Does **not** become `window` property |
| **Use Case**          | Legacy code (avoid)       | Mutable variables in limited blocks | Constants / immutable bindings |

---

## 2. Example Walkthrough — `02_let_concept.js`

```javascript
let x = 10;
console.log(a);          // ❌ ReferenceError: a is not defined (TDZ)

for (let a = 0; a < 100000; a++) {
    console.log(a);
    badcodeFn();
}

function badcodeFn() {
    console.log("Hello");
}
```

### Step-by-step

| Step | Code               | What happens                                                                 |
|------|---------------------|------------------------------------------------------------------------------|
| 1    | `let x = 10`        | `x` is declared in block scope (the script's global). Initialised to `10`.   |
| 2    | `console.log(a)`    | **ReferenceError** — `a` exists in the **TDZ** because it's declared later inside the `for` with `let`. Accessing it before the `let` statement throws. |
| 3    | `for (let a = 0...` | A new `a` is created **per iteration** (block-scoped to the loop body). Each iteration gets its own binding. |
| 4    | `console.log(a)`    | Logs `0, 1, 2, ... 99999` — each iteration's private `a`.                    |
| 5    | `badcodeFn()`       | Calls the function 100,000 times — demonstrates accidental **O(n²)** or unnecessary work inside a loop. |
| 6    | `function badcodeFn()` | Hoisted to the top of its enclosing scope (function-scoped). Accessible from anywhere. |

### Key insight

`console.log(a)` on line 2 crashes **before the loop ever runs** because `let` places `a` in the Temporal Dead Zone until the `for` statement is reached. With `var`, line 2 would log `undefined` instead of throwing.

---

## 3. Pipeline Diagram — How `let` Is Processed

```
 Source Code                     Parser                         Execution
 ┌──────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
 │  let x = 10   │ ──▶  │ 1. Tokenise          │ ──▶  │ 1. Hoist `x` to      │
 │               │      │ 2. Build AST          │      │    block scope       │
 │              │      │ 3. Detect `let` node   │      │    (uninitialised)   │
 │              │      │ 4. Register in scope   │      │ 2. Enter TDZ for `x` │
 │              │      │    (block scope)       │      │    from top of block │
 │              │      │                      │      │ 3. Execute `let x=10` │
 │              │      │                      │      │    → TDZ ends        │
 │              │      │                      │      │ 4. Assign `10` to `x`│
 └──────────────┘      └──────────────────────┘      └──────────────────────┘
```

```
 TDZ Timeline for `let a` in the for-loop:
 ┌──────────────────────────────────────────────────────────┐
 │  Block start                         `let a = 0`         │
 │       │                                    │             │
 │       ▼                                    ▼             │
 │  ┌──────────┐   Accessing `a` here    ┌──────────┐       │
 │  │   TDZ    │ ──▶ throws ReferenceError │  Initialised  │       │
 │  │ (uninit) │                          │  = 0     │       │
 │  └──────────┘                          └──────────┘       │
 └──────────────────────────────────────────────────────────┘
```

---

## 4. TL;DR

- **`let` is block-scoped** — lives inside `{ }`, not the whole function like `var`.
- **TDZ (Temporal Dead Zone)** — accessing a `let` variable before its declaration throws a `ReferenceError`. This prevents bugs from using variables before they're ready.
- **Per-iteration binding** — in `for (let a ...)`, each loop iteration gets its **own copy** of `a`. Great for closures inside loops.
- **No redeclaration** — `let` in the same scope twice = `SyntaxError`.
- **Use `let` by default** — reserve `const` for values that shouldn't change, avoid `var` entirely in modern JavaScript.
