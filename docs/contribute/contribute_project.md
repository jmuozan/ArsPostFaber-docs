## How do I contribute to the Project?

Essential to have [git](https://git-scm.com/downloads) installed in your computer

### Fork the repository

Go to the [main ArsPostFaber repository](https://github.com/jmuozan/ArsPostFaber) and click the "Fork" button in the top-right corner of the page. This creates a copy of the repository under your GitHub account.

### Clone your forked repository

```bash
git clone https://github.com/YOUR_USERNAME/ArsPostFaber.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Move to your directory

```bash
cd your_directory/ArsPostFaber
```

### Add the original repository as upstream

This allows you to keep your fork synchronized with the original repository:

```bash
git remote add upstream https://github.com/jmuozan/ArsPostFaber.git
```

### Create a Branch to Work on Your Changes

```bash
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

Or use the shorthand:

```bash
git checkout -b BRANCH-NAME
```

### Keep your fork updated (recommended before starting work)

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### Work on the project

Make your changes to the codebase. Use any IDE of your choice for development. The project is built with C# for Grasshopper/Rhino, so Visual Studio or Visual Studio Code with C# extensions are recommended.

### Test your changes

Make sure to test your changes thoroughly before submitting:

- Build the project to ensure there are no compilation errors
- Test the functionality in Grasshopper/Rhino
- Verify that existing functionality still works

### Commit and push your changes

```bash
git add .
git commit -m "Clear description of the changes made"
git push origin BRANCH-NAME
```

### Create a Pull Request

1. Navigate to your forked repository on GitHub
2. You'll see a banner suggesting to create a pull request for your recently pushed branch
3. Click "Compare & pull request"
4. Fill out the pull request template with:
   - **Title**: Clear, concise description of what your PR does
   - **Description**: Detailed explanation of the changes, why they were made, and any relevant context
   - **Testing**: Describe how you tested your changes
   - **Screenshots/GIFs**: If applicable, add visual documentation of new features

### Pull Request Guidelines

- Make sure your code follows the project's coding standards
- Include documentation for new features or components
- Update any relevant documentation in this documentation website
- Ensure your changes don't break existing functionality
- Keep pull requests focused on a single feature or fix

### After submitting

- Respond to any feedback from maintainers
- Make requested changes if needed
- Be patient - review and testing take time
- Once approved, your changes will be merged into the main project

Thank you for contributing to Ars Post Faber!