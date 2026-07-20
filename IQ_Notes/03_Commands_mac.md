# VS Code Commands & Shortcuts — macOS

> Common VS Code editor commands and terminal commands used throughout this Playwright course.

---

## 1. VS Code — Essential Shortcuts

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Command Palette** | Open all available commands | `⇧⌘P` | Press then type "Format Document" |
| **Quick Open** | Jump to any file by name | `⌘P` | Press then type `02_let_concept.js` |
| **Open File** | Open a file from the system dialog | `⌘O` | Select a `.js` file to edit |
| **Open Folder** | Open a project folder | `⌘K ⌘O` | Select `Learning Playwright 3x` folder |
| **Close Tab** | Close the current editor tab | `⌘W` | Closes `02_Keyword_Notes.md` |
| **Save** | Save current file | `⌘S` | Saves changes to disk |
| **Save All** | Save all open files | `⌥⌘S` | Saves every unsaved file |
| **Close Window** | Close the entire VS Code window | `⇧⌘W` | Exits the project |

---

## 2. VS Code — Editor & Navigation

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Go to Line** | Jump to a specific line number | `⌃G` | Type `25` to jump to line 25 |
| **Go to File** | Quick Open (same as above) | `⌘P` | Type filename and press Enter |
| **Toggle Sidebar** | Show/hide the file explorer sidebar | `⌘B` | Toggle explorer when editing |
| **Toggle Terminal** | Open/close integrated terminal | `⌃\`` | `⌃` + backtick key |
| **New Terminal** | Create a new terminal instance | `⇧⌃\`` | Opens a second terminal tab |
| **Split Editor** | Split editor into two panes | `⌘\` | View two files side by side |
| **Close Editor Group** | Close current split pane | `⌘W` | Closes only the active pane |
| **Zen Mode** | Full-screen focus mode (no UI) | `⌘K Z` | Press Esc twice to exit |
| **Zoom In** | Increase editor font size | `⌘=` | Larger text |
| **Zoom Out** | Decrease editor font size | `⌘-` | Smaller text |

---

## 3. VS Code — Selection & Editing

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Comment Line** | Toggle line comment (`//`) | `⌘/` | Comment out a line of code |
| **Block Comment** | Toggle block comment (`/* */`) | `⇧⌥A` | Wrap selected text in `/* */` |
| **Indent Right** | Indent selected lines | `⌘]` | Increase indentation level |
| **Indent Left** | Un-indent selected lines | `⌘[` | Decrease indentation level |
| **Move Line Up** | Move line (or selection) up | `⌥↑` | Rearrange code order |
| **Move Line Down** | Move line (or selection) down | `⌥↓` | Rearrange code order |
| **Copy Line Up** | Duplicate line above | `⇧⌥↑` | Copy line upward |
| **Copy Line Down** | Duplicate line below | `⇧⌥↓` | Copy line downward |
| **Multi-Cursor Add** | Add a cursor at each click location | `⌥ + Click` | Edit multiple lines at once |
| **Select All Occurrences** | Select all matches of selected text | `⇧⌘L` | Rename same variable everywhere |
| **Format Document** | Auto-format the entire file | `⇧⌥F` | Fix indentation and spacing |
| **Undo** | Undo last action | `⌘Z` | Revert accidental edit |
| **Redo** | Redo previously undone action | `⇧⌘Z` | Restore undone change |
| **Cut Line** | Cut entire current line | `⌘X` | (with nothing selected) |
| **Copy Line** | Copy entire current line | `⌘C` | (with nothing selected) |
| **Paste** | Paste from clipboard | `⌘V` | Insert copied content |

---

## 4. VS Code — Find & Replace

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Find** | Search within the current file | `⌘F` | Type `let` to find all occurrences |
| **Replace** | Find and replace in current file | `⌥⌘F` | Replace `var` with `let` |
| **Find in Files** | Search across the entire project | `⇧⌘F` | Search all files for `playwright` |
| **Replace in Files** | Find/replace across all files | `⇧⌘H` | Rename an API across the project |
| **Go to Next Match** | Jump to next search result | `↵` or `⌘G` | Cycle through findings |
| **Go to Previous Match** | Jump to previous search result | `⇧⌘G` | Go back to previous finding |

---

## 5. VS Code — Multi-Cursor & Selection (Advanced)

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Add Cursor Above** | Add cursor one line up | `⌥⌘↑` | Edit multiple consecutive lines |
| **Add Cursor Below** | Add cursor one line down | `⌥⌘↓` | Edit multiple consecutive lines |
| **Column Selection** | Select a rectangular block of text | `⇧⌥ + Drag` | Select a column of text |
| **Select Current Line** | Select the entire line | `⌘L` | (press repeatedly to extend selection) |
| **Expand Selection** | Expand selection outward by syntax scope | `⇧⌃⌘→` | Select word → string → block |
| **Shrink Selection** | Shrink selection inward | `⇧⌃⌘←` | Go back one scope level |

---

## 6. Terminal Commands (Integrated Terminal)

| Command | Description | Shortcut to Open Terminal | Example |
|---------|-------------|--------------------------|---------|
| `code .` | Open current folder in VS Code | — | `code .` from terminal opens the project |
| `code -r .` | Open folder in the **current** window | — | Reuses existing window |
| `ls` | List files in current directory | `⌃\`` | Lists `.js`, `.md` files |
| `ls -la` | List all files including hidden ones | — | Shows `.git`, `.commandcode/` |
| `cd <folder>` | Change directory | — | `cd chapter_01_Basics` |
| `mkdir <name>` | Create a new directory | — | `mkdir chapter_05` |
| `touch <file>` | Create an empty file | — | `touch 03_commands_mac.md` |
| `cat <file>` | Display file contents in terminal | — | `cat file.js` (short files) |
| `cp <src> <dest>` | Copy a file | — | `cp old.js new.js` |
| `mv <src> <dest>` | Move or rename a file | — | `mv old.js new.js` |
| `rm <file>` | Delete a file | — | `rm temp.js` |
| `rm -rf <dir>` | Delete a folder and all contents | — | `rm -rf temp/` |
| `clear` | Clear the terminal screen | `⌘K` | Clears scrollback |
| `↑` / `↓` | Navigate command history | — | Press Up to re-run last command |

---

## 7. Git Commands (in Terminal)

| Command | Description | Example |
|---------|-------------|---------|
| `git status` | Check current branch and changed files | `git status` |
| `git add .` | Stage all changed files | `git add .` |
| `git add <file>` | Stage a specific file | `git add IQ_Notes/02_Keyword_Notes.md` |
| `git commit -m "msg"` | Commit staged changes with a message | `git commit -m "Add keyword notes"` |
| `git log --oneline` | View commit history (compact) | `git log --oneline` |
| `git diff` | View unstaged changes | `git diff` |
| `git branch` | List local branches | `git branch` |
| `git checkout -b <name>` | Create and switch to a new branch | `git checkout -b feature/add-tests` |

---

## 8. Node.js & npm Commands

| Command | Description | Example |
|---------|-------------|---------|
| `node <file>` | Run a JavaScript file with Node.js | `node chapter_01_Basics/index.js` |
| `node -v` | Check Node.js version | `node -v` (e.g. `v24.18.0`) |
| `npm init` | Initialize a new Node.js project | `npm init -y` (skip prompts) |
| `npm install <pkg>` | Install a package | `npm install playwright` |
| `npm install -D <pkg>` | Install a dev dependency | `npm install -D @playwright/test` |
| `npm run <script>` | Run a script from `package.json` | `npm run test` |

---

## 9. Playwright-Specific Commands

| Command | Description | Example |
|---------|-------------|---------|
| `npx playwright test` | Run all Playwright tests | `npx playwright test` |
| `npx playwright test --ui` | Run tests in UI mode | `npx playwright test --ui` |
| `npx playwright codegen <url>` | Open Playwright recorder/generator | `npx playwright codegen example.com` |
| `npx playwright show-report` | View the last test report in browser | `npx playwright show-report` |
| `npx playwright install` | Install Playwright browsers | `npx playwright install` |

---

> **Legend:** `⌘` = Command, `⌥` = Option, `⇧` = Shift, `⌃` = Control
>
> 💡 Commands that are **different** between macOS and Windows are marked with a ⚠️ indicator in the Windows version.
