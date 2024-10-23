- fork the github repository of someone by clicking on fork 
- git clone https://github.com/example.git
- makes changes or add feature or resolve bugs
- git checkout your-branch-name [if not exists create and switch to it]
- git add .
- git commit -m "any commit"
- git remote -v
- git push origin your-branch-name
```github
git --version
pwd [present working directory (path)]
ls [all files] 
git status [check respository present]


# to setup or update
git config --global user.email "email"
git config --global user.name "name"
git config --list [userid, userEmail...]

git log [to know previous commit history ]
git log --oneline

git config --global core.editor "code --wait" [-m "mssg"]



write -> add -> commit
-----------create repo
git status
git init -> working directory
git add  -> staging area [ready but not working]  git restore fName to discard changes
git commit -m "msg"-> Repo
git push   -> Github


----------------------------Branch
git branch [show all branch and also current]
git branch branchName [create branch name]
git switch branchName

git log 
git switch -c dark-mode [create and switch to dark-mode branch]
git checkout oranges-mode [if exists it will switch to orange-mode and if not exist throw error]

git merge dark-mode [current and dark-mode means files visible]

git branch -m <old-branch-name> <new-branch-name> [rename branch]
git branch -d <branch-name> [delete branch]



----------------Git diff
git diff
git diff --staged [in stagging]
git diff <branch-name-one> <branch-name-two>
git diff branch-name-one..branch-name-two
git diff <commit-hash-one> <commit-hash-two>

-------------------not confidence in stash--------
git stash [to store temporary in local storage(means jab ek branch mai stagging area hai tab switch karna ho commit se aur save bhi rahe)]
git stash save "work in progress on X feature" [naming the stash like stack memory]
git stash apply 
git stash drop
git stash clear
git stash pop [apply and drop]


git tag [show all tag]
git tag <tag-name> [creating tag]
git tag -a <tag-name> -m "Release 1.0" [annotated tag]
git tag <tag-name> <commit-hash> [giving tag in commit hash]


empty folder[here logs] are not track by git and to track them we use .gitkeep in empty folder[here Images] 
touch text.txt to create file




Commit -> tree -> blob
git show -s --pretty=raw <commit-hash> [32ad10d]

commit 32ad10d9dd0316c93263cb666f7256e0432e3209
tree 0fb3b65c62e0e42a6aa4f71ec3f9cc0bb29a2a0c
parent c26ba544f8a87f2e99756d38d528564e4bb43b58
author username <emailid@gmail.com> 1721989676 +0530
committer username <email@gmail.com> 1721989676 +0530


git ls-tree <tree-id> [0fb3b65c62e0e42a6aa4f71ec3f9cc0bb29a2a0c]

100644 blob 6e951df6dbafb2b5cff32ca5a6ec0576c1d85ddd    .gitignore
100644 blob e69de29bb2d1d6434b8b29ae775ad8c2e48c5391    e.txt
100644 blob 952a192e693682a96eb525f782947b03d54a490c    f.txt


git show <blob-id> [100644]

```

