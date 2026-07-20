# Source Code vs Bytecode vs Binary Code

## The One-Line Summary

| Source Code | → | Bytecode | → | Binary Code |
|-------------|---|---|---|---|
| What you write | Parser builds AST | What the VM runs | JIT compiles hot code | What the CPU executes |

---

## Comparison Table

| Aspect | Source Code | Bytecode | Binary Code |
|--------|-------------|----------|-------------|
| **Readable by humans?** | ✅ Yes | ❌ Mostly no | ❌ No |
| **Platform dependent?** | ❌ No | ❌ No | ✅ Yes (CPU-specific) |
| **Who executes it?** | Nobody — text on disk | The VM / Interpreter (V8 Ignition) | The CPU directly |
| **Performance** | N/A | Medium | Fastest |
| **Created by** | Developer writing code | Parser + Compiler (at parse/compile time) | Compiler or JIT (at build or runtime) |
| **File on disk?** | ✅ Yes (`.js`) | ❌ Memory only (in V8) | ❌ Memory only (in V8 JIT) |

---

## Pipeline (Table View)

| Step | Stage | What Happens | Who Does It | Output |
|------|-------|-------------|-------------|--------|
| 1 | **Source Code** | You write `console.log("Hello The Testing Academy!");` | You | `01_Hello world.js` |
| 2 | **Parse** | Source text is tokenized → AST nodes built | V8 Parser | Abstract Syntax Tree |
| 3 | **Bytecode** | AST is compiled to compact VM instructions | V8 Ignition | Bytecode (in memory) |
| 4 | **JIT Compile** | Hot (frequently run) bytecode is compiled to native CPU instructions | V8 TurboFan | Machine code (in memory) |
| 5 | **Binary Execution** | CPU executes the native instructions on silicon | The CPU | Output printed to terminal |

---

## Code Transformation Walkthrough (Side-by-Side)

Using `01_Hello world.js`:

```javascript
console.log("Hello The Testing Academy!");
```

### Stage 1 — Source Code

| Property | Value |
|----------|-------|
| **What it looks like** | `console.log("Hello The Testing Academy!");` |
| **File type** | `.js` (UTF-8 text) |
| **Readable?** | ✅ Yes — `console`, `.log`, `"Hello..."` are meaningful English words |
| **Portable?** | ✅ Yes — same file runs on Windows, Mac, Linux, ARM, x86 |
| **CPU can run this?** | ❌ No — the CPU only understands numbers |

### Stage 2 — Bytecode

| Property | Value |
|----------|-------|
| **What it looks like** | |
| | `0x2fbb  LdaConstant [0]         // Load "Hello The Testing Academy!"` |
| | `0x2fc3  GetProperty [r0, "log"]  // Get console.log` |
| | `0x2fcb  CallProperty [r0, r1]    // Call it` |
| | `0x2fd3  Return                   // Return undefined` |
| **Readable?** | ❌ Mostly no — hex addresses and register names like `r0` |
| **Portable?** | ✅ Yes — same bytecode runs on x64 Intel or ARM Apple Silicon |
| **Who runs it?** | V8 Ignition interpreter (not the CPU) |
| **Speed** | Medium — faster than reparsing source, slower than native |

### Stage 3 — Binary Code (Machine Code)

| Property | Value |
|----------|-------|
| **What it looks like (assembly)** | |
| | `mov   rdi, [r14 + 0x10]      ; Load console object` |
| | `lea   rsi, [rip + 0x1234]    ; Load "Hello..." string` |
| | `mov   rax, [rdi + 0x20]      ; Get log method` |
| | `call  rax                     ; Call it` |
| **What it looks like (raw hex)** | `48 8B 7E 10 48 8D 35 34 12 00 00 48 8B 47 20 FF D0` |
| **Readable?** | ❌ No — unless you're a CPU or a reverse engineer with a disassembler |
| **Portable?** | ❌ No — `48 8B 7E 10` means something else on ARM |
| **Who runs it?** | The CPU directly (no interpreter in the way) |
| **Speed** | Fastest — runs on bare silicon |

---

## Real-World Example: What Happens When You Run `node 01_Hello world.js`

| Time | What's Happening | Code Stage |
|------|-----------------|------------|
| T=0 | Node launches, V8 loads the file | Source code loaded from disk |
| T=1 | V8 Parser scans characters → builds AST tokens | Parsing |
| T=2 | Ignition generates bytecode from the AST | Bytecode created |
| T=3 | Ignition interprets the bytecode (slow path) | Bytecode executed |
| T=4 | TurboFan notices `console.log` is called repeatedly | Profiling |
| T=5 | TurboFan compiles bytecode → x86-64 machine code | Binary code created |
| T=6 | CPU executes native instructions, text appears on screen | Binary code executed |

---

## TL;DR Comparison Table

| | Source Code | Bytecode | Binary Code |
|---|------------|----------|-------------|
| **Form** | Text (`.js`) | VM instructions (registers, ops) | CPU opcodes (hex bytes) |
| **Creator** | You writing code | V8 Ignition (parser step) | V8 TurboFan (JIT step) |
| **Consumer** | Humans read it | VM interprets it | CPU executes it |
| **Portability** | Any OS, any CPU | Any CPU with same VM | One CPU family only |
| **Speed** | N/A | Medium | Fastest |
| **Memory/disk?** | On disk | In memory only | In memory only |
