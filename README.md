# Setup for GitHub
- Download the [git](https://git-scm.com/downloads) first.
- Then open up your terminal and check if the git is properly installed or not:
    ```bash
    git --version
    ```
- If you can't see a version, look for the issue or reinstall the package.
- If you don't have a GitHub account then first create it from here [https://github.com/](https://github.com/).
### If you are on the correct path then just link your GitHub account with git:
  - Open up the terminal and then enter this line with your name in it
      ```bash
      git config --global user.name "your name here"
      ```
  - The next step is to enter your email Id in this line 
      ```bash
      git config --global user.email "your email Id here"
      ```
  - You can also check if your name/email Id is linked or not
      ```bash
      git config --global user.name
      git config --global user.email
      ```
  - If you want to change something
      ```bash
      git config --global --edit
      ```
# Steps to upload your files in git
  To link that folder to the GiHub
    ```bash
    git init
    ```
    
  To check the status of the file in the git
    ```bash
    git status
    ```
  To add a particular file
    ```bash
    git add <file-name>
    ```
  To add all the files
    ```bash
    git add .
    ```
    
  To check the history of the previously added files
    ```bash
    git log
    ```
    
  To commit the files
    ```bash
    git commit -m "initial commit"
    ```

# To upload large files on GitHub
To manage large files in your repository, follow these steps:

### 1. Install Git LFS
Depending on your operating system, use the appropriate method to install Git Large File Storage (LFS):

- **For macOS**: 
  ```bash
  brew install git-lfs
  ```
  
- **For Windos**:
  Download the installer from [git-lfs.github.com](https://git-lfs.com/) and run it.  

- **For Linux**:
  ```bash
  sudo apt-get install git-lfs
  ```

### 2. Initialize Git LFS
After installation, initialize Git LFS in your repository:

  ```bash
  git lfs install
  ```

### 3. Track Large Files
Specify the file types or specific files you want to manage with Git LFS. For example:

- To track all files with a .psd extension:
  ```bash
  git lfs track "*.psd"
  ```
- To track a specific file:
  ```bash
  git lfs track "largefile.zip"
  ```
### 4. Add and Commit Files
Once LFS is tracking the files, add and commit the large files as you normally would:
 ```bash
 git add largefile.zip
 git commit -m "Add large file"
 ```
### 5. Push Files to GitHub
Push your changes to the repository:
 ```bash
 git push origin main
 ```
# Fixing the Issue: (if you face some)
Remove Large Files from Git's History: Since Git has already added those files without LFS, you need to remove them from Git's history:
 ```bash
 git rm --cached
 ```
Then again, try following the previous steps to add the file to the git repository.

These steps should correctly upload the large files using Git LFS. If you still encounter issues, ensure that the files are tracked by LFS by checking .gitattributes in your project, which should contain entries like:
 ```bash
 *.exe filter=lfs diff=lfs merge=lfs -text
 ```
If it's missing or incomplete, run:
 ```bash
 git lfs track "*.exe"
 ```
Then add the changes to Git:
 ```bash
 git add .gitattributes
 git commit -m "Update .gitattributes to track .exe files"
 ```
