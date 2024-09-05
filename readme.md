# Git and Github for new Bees

```
— — — — — — — — — — — — — — — — -basics — — — — — — — — — — — — — — — -

git init => initailze git

git add => will add the file u mention to add or . to add all files

git commit -m “message that you want to write”

git status => to check the status of files changes that are tracked and untracked files list

git log => to see all the logs that are made

git log — oneline => to show in one line

git config — global core.editor “code — wait” => to set the code editor visual studio code

git config — global — unset core.editor => to reset the code editor

git config user.name => to see user name of git and same for email

git config — global user.name “ user name”

git config user.name “name” => to set for specific repository

git config — get user.name => to get the user name

git restore <filename> => revert add

git restore — stages <file> => revert commit

ls -lha => to list inhuman readable list, hidden files

— — — — — — — — — — — — — — — — — — — — — intermediate — — — — — — — — — —

git branch => shows all available branches

git branch <name> => create that specific branch

git checkout/ switch <name> => will switch to that branch

git switch -c <name> => will create and mode to branch — ii

git checkout -b <name> => will do the same — ii

while mearging try to be on master

git merge <branch name>

git branch -d <branch name> => to delete branch

— — — — — — — — — -git diff — — — — — — — — — — — — — — — — — — — — — — — — —

git diff => will show thw differenece between the onderversion ( — — -) and newerversion (++++)

you can see after add but before commit || git diff — staged

you can can see in a way || git diff branch1..branch2 || git diff old..new

between commits || git diff 88dh57c7..88dh32h3

— — — — — — — — — — — git stash — — — — — — — — — — — — —

it is used when you are working in a branch and there is a sudden requiremet to change somethhing in other branch then ,can not directly change ,uou need to stash the cuurent modification and then move to other branch

git stash => to stash

git stash pop => to revert what u where working on

the stach can be used in oher branch also\

git stash list => it will list all the curent stashes aavailable

git stash apply stash@{n} => to applay what stash to apply

— — — — — some more commands — — — — — — — — -

if u are intrested in moving back in taim and seeing who it was in past

use this

git checkout <hash eg..82n8ty3> => using this head will point the that specific hash

or

git checkout HEAD~3

to revert back

git checkout master

git reflog

— — — — git rebase — — — — — — — — — — — — — — — — — — — — — -

not to run from master branch

need to run from side branch

git commit -am “message” => directly to add and commit together

— — — — — — — — — — — — — — — — — — — — — — — — — — — — git hub — — — — — -

git remote -v => says if we have any remote get repository

git remote add <name> <url> eg.. git remote add origin https://github.com/decs.git

git remote rename old new // git remote remove

git push <remote> <branch> eg. main

git push -u origin main = > -u stands for — set-upstrem

git pull => get the latest code from the selected repo

git fetch => just to fetch

— — — opensoure contribution — — — — — — — -

select the code base you want to contribute

talk to community and get insides and pain points that wen need to develop

create a folk

get it locally

create a branch with name what you want to do really

then crete pull request for the main branch of original repo with your branch

write in detail discription on what you havedone
```
