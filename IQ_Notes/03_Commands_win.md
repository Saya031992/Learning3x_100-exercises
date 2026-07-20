# VS Code Commands & Shortcuts — Windows

> Common VS Code editor commands and terminal commands used throughout this Playwright course.

---

## 1. VS Code — Essential Shortcuts

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Command Palette** | Open all available commands | `Ctrl+Shift+P` | Press then type "Format Document" |
| **Quick Open** | Jump to any file by name | `Ctrl+P` | Press then type `02_let_concept.js` |
| **Open File** | Open a file from the system dialog ⚠️ | `Ctrl+O` | Select a `.js` file to edit |
| **Open Folder** | Open a project folder | `Ctrl+K Ctrl+O` | Select `Learning Playwright 3x` folder |
| **Close Tab** | Close the current editor tab | `Ctrl+W` | Closes `02_Keyword_Notes.md` |
| **Save** | Save current file | `Ctrl+S` | Saves changes to disk |
| **Save All** | Save all open files ⚠️ | `Ctrl+Alt+S` | Saves every unsaved file |
| **Close Window** | Close the entire VS Code window ⚠️ | `Ctrl+Shift+W` | Exits the project |

---

## 2. VS Code — Editor & Navigation

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Go to Line** | Jump to a specific line number | `Ctrl+G` | Type `25` to jump to line 25 |
| **Go to File** | Quick Open (same as above) | `Ctrl+P` | Type filename and press Enter |
| **Toggle Sidebar** | Show/hide the file explorer sidebar | `Ctrl+B` | Toggle explorer when editing |
| **Toggle Terminal** | Open/close integrated terminal | `Ctrl+\`` | `Ctrl` + backtick key |
| **New Terminal** | Create a new terminal instance | `Ctrl+Shift+\`` | Opens a second terminal tab |
| **Split Editor** | Split editor into two panes | `Ctrl+\` | View two files side by side |
| **Close Editor Group** | Close current split pane | `Ctrl+W` | Closes only the active pane |
| **Zen Mode** | Full-screen focus mode (no UI) | `Ctrl+K Z` | Press Esc twice to exit |
| **Zoom In** | Increase editor font size | `Ctrl+=` | Larger text |
| **Zoom Out** | Decrease editor font size | `Ctrl+-` | Smaller text |

---

## 3. VS Code — Selection & Editing

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Comment Line** | Toggle line comment (`//`) | `Ctrl+/` | Comment out a line of code |
| **Block Comment** | Toggle block comment (`/* */`) ⚠️ | `Shift+Alt+A` | Wrap selected text in `/* */` |
| **Indent Right** | Indent selected lines | `Tab` | Increase indentation level |
| **Indent Left** | Un-indent selected lines | `Shift+Tab` | Decrease indentation level |
| **Move Line Up** | Move line (or selection) up | `Alt+↑` | Rearrange code order |
| **Move Line Down** | Move line (or selection) down | `Alt+↓` | Rearrange code order |
| **Copy Line Up** | Duplicate line above ⚠️ | `Shift+Alt+↑` | Copy line upward |
| **Copy Line Down** | Duplicate line below ⚠️ | `Shift+Alt+↓` | Copy line downward |
| **Multi-Cursor Add** | Add a cursor at each click location | `Alt + Click` | Edit multiple lines at once |
| **Select All Occurrences** | Select all matches of selected text | `Ctrl+Shift+L` | Rename same variable everywhere |
| **Format Document** | Auto-format the entire file ⚠️ | `Shift+Alt+F` | Fix indentation and spacing |
| **Undo** | Undo last action | `Ctrl+Z` | Revert accidental edit |
| **Redo** | Redo previously undone action ⚠️ | `Ctrl+Shift+Z` | Restore undone change |
| **Cut Line** | Cut entire current line | `Ctrl+X` | (with nothing selected) |
| **Copy Line** | Copy entire current line | `Ctrl+C` | (with nothing selected) |
| **Paste** | Paste from clipboard | `Ctrl+V` | Insert copied content |

---

## 4. VS Code — Find & Replace

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Find** | Search within the current file | `Ctrl+F` | Type `let` to find all occurrences |
| **Replace** | Find and replace in current file ⚠️ | `Ctrl+H` | Replace `var` with `let` |
| **Find in Files** | Search across the entire project | `Ctrl+Shift+F` | Search all files for `playwright` |
| **Replace in Files** | Search/replace across all files ⚠️ (same as macOS) | `Ctrl+Shift+H` | Rename an API across the project |
| **Go to Next Match** | Jump to next search result | `Enter` or `F3` | Cycle through findings |
| **Go to Previous Match** | Jump to previous search result | `Shift+F3` | Go back to previous finding |

---

## 5. VS Code — Multi-Cursor & Selection (Advanced)

| Command | Description | Shortcut | Example |
|---------|-------------|----------|---------|
| **Add Cursor Above** | Add cursor one line up ⚠️ | `Ctrl+Alt+↑` | Edit multiple consecutive lines |
| **Add Cursor Below** | Add cursor one line down ⚠️ | `Ctrl+Alt+↓` | Edit multiple consecutive lines |
| **Column Selection** | Select a rectangular block of text ⚠️ | `Shift+Alt + Drag` | Select a column of text |
| **Select Current Line** | Select the entire line ⚠️ | `Ctrl+L` | (press repeatedly to extend selection) |
| **Expand Selection** | Expand selection outward by syntax scope ⚠️ | `Shift+Ctrl+Alt+→` | Select word → string → block |
| **Shrink Selection** | Shrink selection inward ⚠️ | `Shift+Ctrl+Alt+←` | Go back one scope level |

---

## 6. Terminal Commands (Integrated Terminal)

| Command | Description | Shortcut to Open Terminal | Example |
|---------|-------------|--------------------------|---------|
| `code .` | Open current folder in VS Code | — | `code .` opens the project in VS Code |
| `code -r .` | Open folder in the **current** window | — | Reuses existing window |
| `dir` | List files in current directory ⚠️ | `Ctrl+\`` | Lists `.js`, `.md` files |
| `dir /a` | List all files including hidden ones ⚠️ | — | Shows `.git`, `.commandcode/` |
| `cd <folder>` | Change directory | — | `cd chapter_01_Basics` |
| `mkdir <name>` | Create a new directory | — | `mkdir chapter_05` |
| `type nul > <file>` | Create an empty file ⚠️ | — | `type nul > 03_commands_win.md` |
| `type <file>` | Display file contents in terminal ⚠️ | — | `type file.js` |
| `copy <src> <dest>` | Copy a file ⚠️ | — | `copy old.js new.js` |
| `move <src> <dest>` | Move or rename a file ⚠️ | — | `move old.js new.js` |
| `del <file>` | Delete a file ⚠️ | — | `del temp.js` |
| `rmdir /s <dir>` | Delete a folder and all contents ⚠️ | — | `rmdir /s temp` |
| `cls` | Clear the terminal screen ⚠️ | — | Clears scrollback |
| `echo. > <file>` | Create empty file (alternative) ⚠️ | — | `echo. > newfile.js` |
| `↑` / `↓` | Navigate command history | — | Press Up to re-run last command |

---

## 7. Git Commands (in Terminal)

| Command | Description | Example |
|---------|-------------|---------|
| `git status` | Check current branch and changed files | `git status` |
| `git add .` | Stage all changed files | `git add .` |
| `git add <file>` | Stage a specific file | `git add IQ_Notes\02_Keyword_Notes.md` |
| `git commit -m "msg"` | Commit staged changes with a message | `git commit -m "Add keyword notes"` |
| `git log --oneline` | View commit history (compact) | `git log --oneline` |
| `git diff` | View unstaged changes | `git diff` |
| `git branch` | List local branches | `git branch` |
| `git checkout -b <name>` | Create and switch to a new branch | `git checkout -b feature/add-tests` |

---

## 8. Node.js & npm Commands

| Command | Description | Example |
|---------|-------------|---------|
| `node <file>` | Run a JavaScript file with Node.js | `node chapter_01_Basics\index.js` |
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

> ⚠️ **Different from macOS** — these commands/shortcuts differ between platforms.
>
> 💡 The corresponding macOS version (`03_Commands_mac.md`) uses `⌘/⌥/⌃` instead of `Ctrl/Alt`.
