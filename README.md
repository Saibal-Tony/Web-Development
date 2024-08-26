# Setup for GitHub
- Download the [git](https://git-scm.com/downloads) first.
- Then open up your terminal and check if the git is properly installed or not:
  ```bash
  git --version
  ```
  
# Steps to upload your files in git


# To upload large file in GitHub
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
