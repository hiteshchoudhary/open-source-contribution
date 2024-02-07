How to contribute on open-source
1. Fork the Repository:
   
   On the GitHub repository page, click the "Fork" button to create your own copy of the repository on your GitHub account.

3. Clone Your Fork:
   
   git clone <your_fork_url>
   cd <repository_directory>

5. Add the Original Repository as a Remote:

   git remote add upstream <original_repository_url>

7. Create a Branch for Your Changes:

   git checkout -b <branch_name>

9. Make Changes:

   Implement the changes or additions you wish to contribute.

11. Stage and Commit Your Changes:

   git add .
   git commit -m "Your commit message"

13. Fetch and Merge Changes from Upstream (Optional but recommended):
    
   git fetch upstream
   git merge upstream/main

15. Resolve any Merge Conflicts (if there are any).

16. Push Your Changes to Your Fork:
    
   git push origin <branch_name>

18. Create a Pull Request:
    
    - Go to your GitHub repository and switch to the branch you just pushed.
    - Click on the "Pull Request" button.
    - Provide a descriptive title and comment for your pull request.
    - Submit the pull request.

20. Follow Up:
    
    Be responsive to feedback during the code review process. Make any necessary changes as requested.

22. Keep Your Fork Updated (Optional but recommended):
    
    git fetch upstream
    git merge upstream/main
    git push origin main
