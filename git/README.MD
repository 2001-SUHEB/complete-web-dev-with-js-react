
# 📘 Git Study Material

## ✨ **Table of Contents**
1. [Git Basics and Commands](#git-basics-and-commands)
2. [Types of Git Merges](#types-of-git-merges)
3. [Visual Representations of Merges](#visual-representations-of-merges)
4. [Top Git Interview Questions](#top-git-interview-questions)

---

## 🛠️ **Git Basics and Commands**

### 🌱 **Initialization**
- **Initialize a Git Repository**  
  ```bash
  git init
  ```
  Creates a new Git repository in the current directory.

---

### 📂 **Branching**
- **Create a New Branch**  
  ```bash
  git branch newBranch
  ```
  Creates a new branch named `newBranch`.

- **Switch to a Branch**  
  ```bash
  git checkout newBranch
  ```
  Switches to the branch `newBranch`.

- **Create and Switch to a New Branch**  
  ```bash
  git checkout -b newBranch
  ```
  Creates and switches to `newBranch` in one step.

---

### 🔄 **Staging and Committing**
- **Stage Changes**  
  ```bash
  git add <file>
  ```
  Stages the specified file(s) for the next commit.

- **Commit Changes**  
  ```bash
  git commit -m "Your commit message"
  ```
  Commits the staged changes with a descriptive message.

---

### 🌐 **Remote Repositories**
- **Clone a Repository**  
  ```bash
  git clone <repository_url>
  ```
  Creates a local copy of the remote repository.

- **Push Changes**  
  ```bash
  git push origin <branch>
  ```
  Pushes local changes to the specified remote branch.

- **Pull Changes**  
  ```bash
  git pull
  ```
  Fetches and merges changes from the remote repository.

---

### ♻️ **Merging**
- **Merge a Branch**  
  ```bash
  git merge <branch>
  ```
  Merges the specified branch into the current branch.

- **Abort a Merge**  
  ```bash
  git merge --abort
  ```
  Cancels a merge in progress.

---

### 🚑 **Undo Changes**
- **Discard Staged Changes**  
  ```bash
  git reset HEAD <file>
  ```
  Removes the specified file from the staging area.

- **Revert a Commit**  
  ```bash
  git revert <commit_hash>
  ```
  Creates a new commit that undoes the changes from the specified commit.

---

## 🔀 **Types of Git Merges**

### 1️⃣ **Fast-Forward Merge**
- **Definition**: Moves the branch pointer forward without creating a new merge commit.  
  - **Use Case**: When there are no changes in the target branch.

### 2️⃣ **Three-Way Merge**
- **Definition**: Creates a new merge commit by combining the histories of both branches.  
  - **Use Case**: When the branches have diverged.

### 3️⃣ **Squash Merge**
- **Definition**: Combines all commits from the source branch into a single commit in the target branch.  
  - **Use Case**: For clean history without multiple small commits.

### 4️⃣ **Rebase Merge**
- **Definition**: Moves the commits of the source branch onto the target branch, resulting in a linear history.  
  - **Use Case**: For a clean, linear history.

### 5️⃣ **Conflict Merge**
- **Definition**: Requires manual resolution of conflicts when changes overlap between branches.  
  - **Use Case**: Happens when there are conflicting changes in the same files.

### 6️⃣ **No-Fast-Forward Merge**
- **Definition**: Forces the creation of a merge commit even when a fast-forward is possible.  
  - **Use Case**: To preserve branch history.

---

## 🎨 **Visual Representations of Merges**

### Fast-Forward Merge
```
Before:
main:    A---B
feature:      C---D

After:
main:    A---B---C---D
```

---

### Three-Way Merge
```
Before:
main:    A---B---C
feature:    \---D---E

After:
main:    A---B---C---F
              \---D---E
```
- **F** is the merge commit.

---

### Squash Merge
```
Before:
main:    A---B
feature:      C---D---E

After:
main:    A---B---F
```
- **F** is the combined commit from `feature`.

---

### Rebase Merge
```
Before:
main:    A---B
feature:      C---D---E

After:
main:    A---B---C---D---E
```

---

## 📋 **Top Git Interview Questions**

### 1️⃣ What is Git, and why is it used?
Git is a distributed version control system used to track changes in source code during software development. It enables collaboration, versioning, and rollbacks.

---

### 2️⃣ What are the differences between Git and GitHub?
- **Git**: A version control tool to track code changes.
- **GitHub**: A hosting service for Git repositories with collaboration features.

---

### 3️⃣ What is the difference between `git pull` and `git fetch`?
- **`git fetch`**: Downloads updates but doesn't merge them.
- **`git pull`**: Fetches updates and merges them into the current branch.

---

### 4️⃣ How do you resolve merge conflicts?
1. Identify conflicts using Git's output.
2. Edit the conflicting files to resolve issues.
3. Stage the resolved files and commit the changes:
   ```bash
   git add <file>
   git commit
   ```

---

### 5️⃣ What is the difference between `git reset`, `git revert`, and `git checkout`?
- **`git reset`**: Moves the HEAD pointer backward to undo changes.
- **`git revert`**: Creates a new commit that undoes a previous commit.
- **`git checkout`**: Switches branches or restores files to a previous state.

---

### 6️⃣ How do you stash changes in Git?
Use `git stash` to temporarily save changes without committing:
```bash
git stash
```
To apply stashed changes:
```bash
git stash apply
```

---

### 7️⃣ Explain the concept of HEAD in Git.
HEAD refers to the pointer to the current branch’s latest commit.

---

### 8️⃣ How do you delete a branch in Git?
- Delete a local branch:
  ```bash
  git branch -d <branch>
  ```
- Delete a remote branch:
  ```bash
  git push origin --delete <branch>
  ```

---

Happy Learning! 🚀
