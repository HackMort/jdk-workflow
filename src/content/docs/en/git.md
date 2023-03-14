---
title: "GIT"
description: "GIT and Gitflow"
---

## What is GIT?
Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git allows multiple developers to collaborate on a project and keep track of changes to the codebase over time.

## Concepts

### Repository
A Git repository is a collection of files and folders, along with a history of changes made to them. Each repository has a unique URL that identifies it on the internet. You can create a repository either locally on your computer or on a remote server such as GitHub, GitLab or Bitbucket.

### Commit
A commit in Git represents a snapshot of the changes made to the files in the repository at a particular point in time. Each commit has a unique identifier, called a hash, which allows you to reference it later. When you commit changes to a repository, you need to provide a commit message that describes the changes you made.

### Branch
A branch in Git is a parallel version of the repository. It allows you to work on different versions of the same codebase simultaneously without interfering with each other's work. You can create a branch from an existing branch or the main branch (usually called "master" or "main"). When you create a new branch, you can switch to it to start making changes.

### Merge
Merging in Git means combining changes from one branch into another. When you merge two branches, Git will try to automatically merge the changes, but sometimes conflicts may arise that need to be resolved manually.

### Pull Request
A pull request in Git is a way of proposing changes to a repository. When you submit a pull request, you're asking the repository's owner to merge your changes into their codebase. Pull requests are commonly used in open-source projects where contributors want to share their changes with the community.

## Commands
Git Commands
Here are some of the most common Git commands you'll need to know:

#### git clone
Clone a repository from a remote server to your local machine:
  
```bash
  git clone <repository-url>
```
#### git add
Stage changes for the next commit:
```bash
  git add <file-name>
```
#### git commit
Commit staged changes to the repository:
```bash
  git commit -m "<commit-message>"
```
#### git push
Push committed changes to a remote server:
```bash
  git push origin <branch-name>
```
#### git branch
List all branches in the repository:
```bash
  git branch
```
Create a new branch:
```bash
  git branch <branch-name>
```
Switch to a branch:
```bash
  git checkout <branch-name>
```
Create a new branch and switch to it:
```bash
  git checkout -b <branch-name>
```
#### git merge
Merge changes from a different branch into the current branch:
```bash
  git merge <branch-name>
```
#### git status
Show the status of the working directory:
```bash
  git status
```

If you want to learn more about Git, check out the: <a href="https://www.atlassian.com/git/tutorials/what-is-version-control" target="_blank">Git Documentation</a>.

## Gitflow
Gitflow is a branching model for Git that provides a standardized way of managing your codebase. It was first introduced by Vincent Driessen in 2010, and since then it has become a popular workflow model among software development teams.

Gitflow defines a set of branch naming conventions and rules for creating and merging branches. It also provides a clear separation between feature development, release management, and maintenance.

The basic Gitflow workflow involves the following branches:

1. **master/main**: The main branch where the source code of HEAD always reflects a production-ready state.
2. **develop**: The main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release.
3. **feature**: Branches used to develop new features for the upcoming or a distant future release. They are branched off from the develop branch.
4. **release**: Branches used to prepare a new production release. They are branched off from the develop branch.
5. **hotfix**: Branches used to quickly patch production releases. They are branched off from the master branch.

Here are some examples of how Gitflow works:

1. Creating a new feature branch:
```bash
  git checkout develop
  git checkout -b feature/new-feature
```
This creates a new branch called feature/new-feature off of the develop branch. All changes related to the new feature will be made in this branch.

2. Merging a feature branch:
```bash
  git checkout develop
  git merge --no-ff feature/new-feature
```
Once the feature is complete and tested, it can be merged back into the develop branch. The --no-ff flag ensures that a new commit is created for the merge, preserving the history of the feature branch.

3. Creating a release branch:
```bash
  git checkout develop
  git checkout -b release/1.0.0
```
This creates a new branch called release/1.0.0 off of the develop branch. The team can now focus on testing and bug fixing for this release.

4. Merging a release branch:
```bash
  git checkout main
  git merge --no-ff release/1.0.0
  git tag 1.0.0
```
Once the release is ready, the changes are merged into the main branch and tagged with a release number. The --no-ff flag ensures that a new commit is created for the merge, preserving the history of the release branch.

5. Creating a hotfix branch:
```bash
  git checkout main
  git checkout -b hotfix/1.0.1
```
This creates a new branch called hotfix/1.0.1 off of the `main` branch. The team can now focus on fixing the bug in the production release.

6. Merging a hotfix branch:
```bash
  git checkout main
  git merge --no-ff hotfix/1.0.1
  git tag 1.0.1
  git checkout develop
  git merge --no-ff hotfix/1
```

If you want to learn more about Gitflow, check out the: <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow" target="_blank">Gitflow Workflow Documentation</a>.


>***Note:*** _This website is a work in progress. If you find any issues or have any suggestions, please let us know by creating an issue on <a href="https://github.com/HackMort/jdk-workflow/issues" target="_blank">GitHub</a>._

<br /><br />
***
Next: [ESLint](/en/eslint)