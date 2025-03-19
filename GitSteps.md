 --> Workflow of Basic Git
 working directory
        |
     (git add)
        |
    Staging area
        |
    (git commit)
        |
       Repo
        |
     (git push)
        |
      Github

 
 cd /file location 
 dir    --> file details
 mkdir gitone gittwo gitthree
 dir
 git -- version
 git status    --> gives fatal: not a git rep. (because right now it doesn't track anything yet)
 cd gitone/
 dir
 dir /a    -->command that lists all files and directories in the current directory, including hidden ones, along with detailed information like permissions, owner, and timestamps.
 git status   --> make habit to use it
 git init     --> use one time per project
 git status
 cd ..   -->  command used to navigate to the parent directory of the current directory.If you are in C:\Users\Username\Documents and you type cd .., it will take you to C:\Users\Username.
 dir
 cd gitone/
 dir
 dir /a
 cd .git      -->.git hidden folder to keep history of all files & sub folders
 cd ..
 dir

 git status 
 echo. > testone.txt testtwo.txt testthree.txt    --> adding empty files
 dir
 git status
 git add testone   --> we can use . for adding all files to track that file
 git status       --> now we are in staging area
 git commit -m "add file one"     --> we must need to give message along with commit 100% times
 git status
 git add testtwo.txt
 git status
 git commit --> it opens VIM for us by default (for exit do - [esc + : + q])
 git log    --> gives the commit id i.e. SHA in vs code
 git log --oneline   --> gives oneline shorter commit id

How the git know about my name, emailID in 'log' and opens up VS Code directly through command 'git commit' instead of VIM ?
 git config --global user.name "Diwanshu Sharma"
 git config --global user.email "diwanshusharma233@gmail.com"
 git config --global core.editor "code --wait"    --> Command to Set VS Code as Git's Default Editor:
               "git config" --global sets the configuration globally for your user (i.e., for all your Git repositories).
               "core.editor" specifies the default text editor for Git.
               "code --wait" tells Git to use VS Code and wait until you close the editor before continuing the Git process (like commit messages).

 echo. > .gitignore   --> A .gitignore file is used in Git to specify files and directories that should not be tracked or committed to the repository. It helps keep unwanted files (like temporary files, build artifacts, sensitive data, or environment-specific files) out of your version control system. 
 git status
 echo. > testfour.txt
 git status      --> all new files is seen
 --> write the files that we want to ignore in .gitignore
 git status    --> but now ignored files won't be seen
 git add .    --> now add the unignored files 
 git status    
 git commit   --> now it will open in VScode instead of default vim and write the message in VScode file "COMMIT_EDITMSG"
 git log --oneline

 //There may be thousand of files in project and how we can know which file/s to be written in .gitignore
 // for this we need to Google "gitignore generator", choose any site and In that site choose any tools which we working on and just copy & paste it

// we can made changes in the in the .gitconfig file, its just a configuration file
cd \Users\diwan    --> going to root
type .gitconfig    --> all name, email stored in this file

cd C:\Users\diwan\OneDrive\Desktop\Complete Web dev\Git and Github\gitone
git log  --oneline
// here we can see (HEAD -> master), let's explore it
dir 
dir /a     --> here we can find .git which is hidden and let's go there
cd .git/
dir
dir /a 

// press ctrl+, here we find **/.git, click X, to see hidden .git folder and check each files/folders in it

//reach the gittwo folder that we made
cd gittwo/
dir
git status
git init
git status     --> understanding branch master
echo. > index.html
git status
git add index.html     --> Staging area
git status
git commit -m "add index file"
// press ctrl+, here we find **/.git, click X, to see hidden .git folder and check each files/folders in it
git branch    -->*master where * is a pointer pointing to master
git status
// Write something in html file that is created
git status
git add index.html
git commit -m "Update code for index.html"
git branch  
// how do we create more branches?
git branch nav-bar     // now in .git/head/master and nav-bar 
git branch    // but head still points to the master
// how do i move on to the another branch?
git checkout nav-bar
git branch    // now the pointer points to nav-bar
echo. > nav-bar.html
// writing the content in nav-bar.html file
git status
git add nav-bar.html
git commit -m "Add nav-bar to code base"
git checkout master   --> By switching to another branch 'master', we can see the nav-bar branch's content is completely gone.
echo. > hero-section
git add hero-section.html
git commit -m "Add hero-section to code base"
git checkout nav-bar  --> By switching to another branch 'nav-bar', we can see the hero-section branch's content is completely gone.
git checkout master  --> Now we can switching to different branches
git branch
git log --oneline    --> head always points to the updated commit and can also be point to the one back commit. Lets see
git checkout nav-bar

-> We have gone through these commands:
git branch                 --> checking current running branch 
git branch branchname      --> creating a branch   
git switch branchname      --> switching a branch
git log                     --> displays the commit history for a branch or repository
git switch branchname      --> used to switching branches
git branch -d branchname   --> used to delete any branch, but remember the branch we want to delete is not running if it so then switch to another branch and delete.
git switch -c branchname   --> create a branch & move there
git checkout -b branchname   --> create a branch & move there
NOTE: 1. commit before switching to another branch
      2. Go to .git folder & checkout HEAD file

// creating multiple branches and switching between them is not a good thing to do or its not a feasible workflow
// So, we have to merge those created branches
// there are two methods to merge: 1.fast forward merge  2.not fast forward merge
// 1. Not fast forward merge
git branch         --> currently we are in master
git merge nav-bar  --> currently we r in master and want to merge nav-bar
// it will open up COMMIT_EDITMSG --> shows "Merge branch 'nav-bar'" by default --> we can give message to it also like doing commit
git log --oneline    --> Now check where head is pointing to?
// Now go to the gitlens tool and check the dependency diagram which exactly looks alike "Not fast forward merge"
// Now we have both index.html and hero-section.html in a single branch "master"
git branch
// Now what happens if we delete the nav-bar branch?, Gitlens history still have the checkpoint of "nav-bar" branch merged with "master" branch, "nav-bar" branch served its purpose and its no longer needed.
git branch -d nav-bar
git branch
// now lets go through all steps from creating to merging branches:
git checkout -b footer
git branch
echo. > footer.html
git add footer.html
git commit -m "Add footer file to code base"
git checkout master  --> master is not aware about footer.html
git branch
git merge footer  --> No conflict
git branch
// do change in index.html file, and write "footer added" inside body
git status
git add index.html
git commit -m "add footer in index file"
git branch              --> master 
git checkout footer    --> when coming to branch "footer" we can see that the changes we did in index.html is not there because its written in master branch 
// Again write "footer was added successfuly" inside the body of index.html of branch "footer"
git add index.html
git commit -m "Update index file with footer code"

git checkout master      --> doesn't shows combined message. i.e. conflict
git checkout footer      --> doesn't show combined message i.e. conflict
// conflict occurs when two branches have same file name (index.html) with different content and after merging there will a conflict occurs that which file content is written? or both file's content is written in that file (index.html)
git branch
git checkout master
git merge footer
// now go to index.html file, we can see the output is change,  here we can see the many buttons like (accept the current change | Accept the incoming change | Accept both changes | compare changes), we can choose anyone or we can just remove the <<<<<< HEAD , ===== , >>>>> footer to resolve the conflict
// Now we can see the "resolve in merge editor" where we can see the code in master(current) & footer(Incoming) branch , just click "Complete merge"
git add index.html
git commit -m "merged footer branch"

git status
// do changes in index.html
git status 
git add index.html
git status
git diff              --> does nothing
git diff index.html   --> does nothing
git diff --staged     --> see output
// now do changes in footer.html file
git add footer.html
git status
git diff --staged     --> learn from output
git commit -m "change index and footer"
git log --oneline
git diff e267e91 6936be0    --> unique IDs of commit
git diff e267e9..6936be0    --> does same as above command (preferred)
git log --oneline
git diff 6936be0 e267e91
git status
git branch
git switch -c bugfix
git branch
// make changes in footer.html and then do
git status
git branch
git switch footer   --> read the output carefully, it writes we cannot move to another branch without staging. So, here the stash come in picture
git branch         --> we are still on branch bugfix
git stash       --> with the help of this command we can switch to another branch even when the staging is not done
git switch footer   --> now we can switch to another branch, and we can check that the changes we done before is not there in footer.html file.
git switch bugfix
git branch          --> now check the footer.html changes is not done in "footer" branch also because we didn't staged the file yet or we stash it. 
// Stash is like a temporary shelf where we can keep our code, move around, come back here, But we have to bring things back from the shelf here.
git stash pop   --> to do the things bring back from the shelf  
// Now we can see the prev. changes in footer.html file
// do changes again and repeat the process:-
git stash
git branch
git switch master
// I know i have stashed some changes onto the bugfix branch, but can i actually pop those stash onto other branches? 
// Yes we can pop stash changes onto other branches by using below command:
git stash pop    --> it will pop all the stashed changes to master
// we can conclude that, stash is not just limited to our current branch and stash can be moved from current branches to different branches as well.
git stash list
git stash 
git stash list      
git stash apply stash@{0}   --> stash@{0} can be anything like stash@{1},stash@{2},stash@{3}...

=> more commands:
1. git checkout <HashID>  --> (Detach Head) : new branch
2. git switch main      --> (re-attach Head)
3. git checkout HEAD~2  --> (look at 2 commit prior)
4. git restore filename --> (get back to last commit version)

1. Checking for "git checkout <HashID>"
git log --oneline
git stash
git checkout e0f4a48

2. Checking for "git switch main"
git log --oneline
git switch master

3. Checking for "git checkout HEAD~2"
git log --oneline
git checkout HEAD~2
git checkout master

4. Checking for "git restore filename"
git log --oneline

git status
git branch    -->"master"
{NOTE: if we are in the main/master branch then NEVER RUN "rebase" COMMAND}
{"rebase" command is usually meant to be run from the side branch like bugfix, footer, nav-bar, etc.}
// did changes in index.html -->"master"
git status
git commit -am "Updated main website"  -->{this cmd means it will do both add and commit at same time}
git branch

git checkout bugfix
// change the nav-bar.html file by replacing "<li>contact us</li>" by "<li><a href="#">contact us</a></li>" in "bugfix"
git commit -am "Updated nav-bar"

git checkout master   // in this branch nav-bar.html has "<li>contact us</li>" 
// now do change in index.html again -->"master"
git commit -am "Images added"
git checkout bugfix
git branch  

git merge master     --> all the content of master's index.html goes to bugfix's index.html
git branch
// Again change the nav-bar.html file by replacing "<li>about us</li>" by "<li><a href="#">about us</a></li>" in "bugfix"
git commit -am "About us fixed"

git checkout master
// now do change in index.html again -->"master"
git commit -am "Pricing card added"
git log --oneline
git checkout bugfix

git log --oneline
git branch          
git rebase master  --> do this cmd if the branch is not master
{this means i rebasing my branch with the master/main branch and now check the source control graph, there is only one branch combined of master and bugfix and we can see the merged commits are gone}
// Again change the nav-bar.html file by replacing "<li>home</li>" by "<li><a href="#">home</a></li>" in "bugfix"
git commit -am "home tab fixed"

git checkout master
// now do change in index.html again -->"master"
git commit -am "why us section be added"  -->{check the source control graph branching is divided again and we can see the merged commits are gone}
{ main work of rebase is removing unnecessary merge commits ]


{lets do conflict}
git branch
git checkout bugfix
git commit -am "add card to index file"
git branch
git rebase master   --> give conflict error {read this error carefully}
   {Auto-merging index.html}
   {CONFLICT (content): Merge conflict in index.html}
   {error: could not apply ab80bdf... add card to index file}
   {hint: Resolve all conflicts manually, mark them as resolved with}
   {hint: "git add/rm <conflicted_files>", then run "git rebase --continue".}
   {hint: You can instead skip this commit: run "git rebase --skip".}
   {hint: To abort and get back to the state before "git rebase", run "git rebase --abort".}
   {Could not apply ab80bdf... add card to index file}
--> To resolve conflict do:-
{select anyone from (accept the current change | Accept the incoming change | Accept both changes | compare changes) in vs code} then,
git add index.html
git rebase --continue
{NOTE: NEVER REBASE "commits that you have shared with other people" and "pushing to GitHub"} 
----------------------------------------------------------------------------------------

# GITHUB : {Open "Git Bash" instead of windows cmd}
1.Open website:- https://docs.github.com/en/search?query=SSH
2.Go To search bar and write "SSH"
3.Go To "Generating a new SSH key and adding it to the ssh-agent" > copy { ssh-keygen -t ed25519 -C "diwanshusharma233@gmail.com" } and paste it in git bash.
4.This creates a new SSH key, using the provided email as a label.
> Generating public/private ALGORITHM key pair.
5.Enter file in which to save the key {id_ALGORITHM:ed25519}
(/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
6.Adding your SSH key to the ssh-agent
  {use windows powershell}
7. Copy and paste 
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
8. copy and paste:
   ssh-add c:/Users/YOU/.ssh/id_ed25519        
9. Add the SSH public key to your account on GitHub.

dir   --> we are in C:\Users\diwan\OneDrive\Desktop\Complete Web dev\Git and Github\gittwo
cd ..
dir   --> C:\Users\diwan\OneDrive\Desktop\Complete Web dev\Git and Github
cd gitthree
open gitthree folder in Vs code and make an index.html file
git status
git init
git status
// git commit -am "add index file"  --> won't commit because The -a flag automatically stages all modified and deleted files before committing them, except for new untracked files (which are not staged unless explicitly added via git add).
git add index.html
git commit -m "add index file"
git branch      --> master
Now create a new repository in GitHub and it gives some commands but we'll use :-
git branch -M main        --> command to rename the branch i.e. master to main
git remote -v            --> empty
git remote add origin https://github.com/Diwanshu911/learn-git.git  --> git remote add name URL
git remote -v            --> now this gives that there is a origin that we have set up
--> git remote rename oldname newname  --> we can do "git remote rename origin Dev"
--> we can use "git remote remove name"

git push origin main   --> git push <remote> <branch> means push origin from my "main" branch
// Add paragraph into index file
git add index.html
git commit -m "add paragraph to code"
git remote -v
git push     --> without origin main, gives below error, 
       {fatal: The current branch main has no upstream branch.
        To push the current branch and set the remote as upstream, use
                   git push --set-upstream origin main
        To have this happen automatically for branches without a tracking
        upstream, see 'push.autoSetupRemote' in 'git help config'.}

// We have to use below command to eliminate error and now we can use "git push" without origin main again & again
git push -u origin main --> -u setup an upstream that allow us to run future command "git push" and it push the code directly to GitHub and it will streamline the origin with main
git commit -am "add the list"
git push    --> now we don't have to specify origin main due to -u

// Now create a readme.md file in Vs code and write something in it
git add readme.md
git commit -m "add readme file"
git push
cd ..    -->C:\Users\diwan\OneDrive\Desktop\Complete Web dev\Git and Github>
git clone <URL>   

 | WORK | STAGE | LOCAL REPO. |  REMOTE REPO. |
                              <---git fetch--->  get info. but don't put in my work
 <----------git pull-------------------------->  get info. and add it in my work
  
Both git pull and git fetch commands bring the code from the connected remote repository to our codebase, not the git clone, Git clone just brings it one at a time, But if we are actively contributing to the repository and then the things are different, so what we seen right now, Golang it is just bringing the code, but here we are actively contributing in this remote repository, some of the other guys have done that, so both pull and fetch brings the updated code from the remote repository, What's the difference between that?
1. when we run the command git fetch, this actually "gets the info. , but don't put the things in our work" i.e. its just bring everything into our local repo. but hasn't brought int he work into our work area yet
2. when we do the git pull command, it actually "gets all the information from the remote repository and moves it into our working area"
--> yes there are use cases of both of them and there are scenarios where we want to just fetch and we don't want to pull it into our codebase yet, Maybe we want to first verify is it breaking our code or is it not touching our code? is it not overwriting our code. Once we are done with that, then we go ahead and do the git pull

-> git pull is a combination command
    git pull => git fetch + git merge 
git pull origin main   (changes will be merged to main)

Steps should be followed for doing contribution in open source project
1. Talk
2. Open an issue
3. get the issue assigned
4. work and add value
5. Make PR (pull request) and iterate over it
6. having patience
7. Making PR is not a job guarantee

firstly go to that GitHub account where we want to contribute as an open source, e.g.
1. https://github.com/hiteshchoudhary/open-source-contribution
2. Create a new fork by clicking the "fork" - A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.
3. Then click "Create fork" - this brings all the code in our account
4. now click the "<> Code" button and copy the URL and do git clone <URL> in terminal
5. do cd open-source-contribution/ 
6. git status      
7. git branch      --> if its main then change it to another branch because we shouldn't troubling someone's main branch instead creating our own branch is recommended
8. git checkout -b navbar
9. git branch        --> navbar
10. Now create a Git&Github.md(i.e. Contribution code) in the cloned repo. code
11. git add Git&Github.md 
12. git commit -m "Add Git&Github.md feature to code"
13. git remote -v   --> my origin is already been set because we've cloned the repo.
14. git push origin navbar  --> now whatever the code we have done in Git&Github.md is being push to "navbar" branch
15. Then come back to https://github.com/YourGithubID/open-source-contribution tab
16. here we see "Compare and pull request" -> Click it  // Sending the pull request means i have made some changes, I'm sending these changes to the main owner of the repo.
17. In the pull request we have to be very very cautious about the "title" and the "description" and it should be very thoughtfully written 
18. then click "Create pull request"      
--> owner of the code repo. "https://github.com/hiteshchoudhary/open-source-contribution" decide that whether he will get the code or not, by determining whether the code will add value or not










