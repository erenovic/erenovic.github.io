# VS Code Workspace Configuration

This directory contains VS Code workspace settings for automatic formatting and import sorting in your Jekyll portfolio website.

## 🚀 Quick Setup

1. **Install recommended extensions**: Open the command palette (`Cmd+Shift+P`) and run:
   ```
   Extensions: Show Recommended Extensions
   ```
   Install all recommended extensions from the list.

2. **Install development dependencies**:
   ```bash
   npm install
   ```

3. **Reload VS Code**: Restart VS Code to apply all settings.

## ⚙️ What's Configured

### Automatic Formatting
- **Format on Save**: Automatically formats files when you save them
- **Format on Paste**: Formats pasted content
- **Import Organization**: Sorts and organizes imports automatically

### File-Specific Settings
- **HTML/CSS/SCSS**: 2-space indentation, Prettier formatting
- **JavaScript/TypeScript**: 2-space indentation, ESLint + Prettier
- **Markdown**: Word wrap enabled, Prettier formatting
- **YAML**: 2-space indentation, proper Jekyll front matter formatting
- **Liquid**: Jekyll template formatting support

### Import Sorting Rules
- Groups imports logically (libraries first, then local files)
- Sorts alphabetically within groups
- Removes unused imports automatically

## 📝 Available Tasks

Access these through `Cmd+Shift+P` → "Tasks: Run Task":

- **Jekyll: Serve** - Start development server with live reload
- **Jekyll: Build** - Build site for production
- **Jekyll: Clean** - Clean build artifacts
- **Format All Files** - Format entire project with Prettier
- **Check Formatting** - Verify all files are formatted correctly

## 🎯 Key Features

### Auto-Save & Cleanup
- Removes trailing whitespace
- Adds final newline to files
- Trims final newlines
- Auto-saves on focus change

### File Exclusions
Automatically excludes Jekyll build files and dependencies from:
- Search results
- File explorer
- Formatting operations

### Language Support
- **Jekyll/Liquid**: Full syntax highlighting and formatting
- **Markdown**: Enhanced editing with ToC generation
- **TypeScript**: Full IntelliSense and error checking
- **YAML**: Front matter validation
- **Git**: Enhanced Git integration with GitLens

## 🔧 Manual Formatting

You can also format files manually:

```bash
# Format all files
npm run format

# Check if files need formatting
npm run format:check

# Lint JavaScript/TypeScript files
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## 📁 Configuration Files

- `.vscode/settings.json` - Workspace settings
- `.vscode/extensions.json` - Recommended extensions
- `.vscode/tasks.json` - Build and utility tasks
- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to exclude from formatting
- `.eslintrc.js` - ESLint configuration for JS/TS files

## 🎨 Customization

To modify formatting rules:

1. **Prettier settings**: Edit `.prettierrc`
2. **ESLint rules**: Edit `.eslintrc.js`
3. **VS Code behavior**: Edit `.vscode/settings.json`

## 🔍 Troubleshooting

### Formatting not working?
1. Ensure Prettier extension is installed and enabled
2. Check if the file type is supported
3. Verify no conflicting formatters are set

### Import sorting not working?
1. Ensure TypeScript extension is enabled
2. Check if the file has valid syntax
3. Try manual organization: `Cmd+Shift+P` → "Organize Imports"

### Extensions not installing?
1. Check internet connection
2. Try installing manually from VS Code marketplace
3. Restart VS Code after installation

## 📚 Useful Shortcuts

- `Cmd+Shift+P` - Command palette
- `Shift+Alt+F` - Format document
- `Cmd+Shift+O` - Organize imports
- `Cmd+K Cmd+F` - Format selection
- `Cmd+.` - Quick fix/code actions

Happy coding! 🎉
