git init

git clone <repo-url>

git status

git add <filename> or git add .

git commit -m "<message>"

git log or git log --oneline or git reflog

git command -help or git help --all

/////////////////////////////////

git branch

git branch <branch name>

git checkout <branch name>

git checkout -b <branch name>

git merge <branch name>

git branch -d <branch name>

gti branch -D <branch name>


///////////////////////////////

git remote add origin <repo-url> // git remote add <remote-name> <repo-url> //git remote add origin https://github.com/user/repo.git

git remote -v

git fetch <remote-name> // git fetch origin

git pull <remote-name> <branch name>  // git pull origin main

git push origin <branch name> // git push <remote-name> <branch name> //git push origin main

/////////////////////////////

git diff 

git diff <branch name>

git reset <file name>  or git reset .

git reset --soft <commit>

git reset --hard <commit>

git stash

git stash list

git pop

git stash drop

//////////////////////////////

git tag

git tag <tag name>

git tag -a <tag name> -m "<message>"

git push <remote-name> tag

git tag -d <tag name>


////////////////////////////////////////

git config --global user.name "<name>"

git config --global user.email "<email>"

git config --list

////////////////////////////////////////

