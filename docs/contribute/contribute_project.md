## How do I contribute to the Project?


Essential to have [git](https://git-scm.com/downloads) installed in your computer

### Clone the repository

```bash
git clone https://github.com/jmuozan/ArsPostFaber-docs.git
```

### Move to your directory

```bash
cd your_directory/ArsPostFaber-docs
```

### Create virtual environment

```bash
python -m venv venv
```

### Activate virtual environment

#### MacOS

```bash
source myvenv/bin/activate
```

#### Windows

```bash
# In cmd.exe
venv\Scripts\activate.bat
# In PowerShell
venv\Scripts\Activate.ps1
```

### Install [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

```bash
pip install mkdocs-material
```

### Check changes live while editing

```bash
mkdocs serve
```

### Create a Branch to Work on Your Changes

```bash
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

Work on the project editing the markdown adding your documentation. Use any IDE of your wish for it. The one I use is [Visual Studio Code](https://code.visualstudio.com/)

### Push changes

```bash
git add .
git commit -m "description of the change"
git push
```

### Pull request

With the changes done and pushed, navigate back to this repo. You'll see that your branch is one commit ahead of main. Click Contribute and then Open a pull request.