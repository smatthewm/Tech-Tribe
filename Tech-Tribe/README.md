# Tech-Tribe

GIT-Madness-10-2018
Watch the Workshop!
https://exeterlms.zoom.us/recording/play/TJwfGj_JBKUL1BmnD4mXAw62AqgfnKhtM4xgS1sMZxlgJsHCqFzwwh5qve9GYH9g

Command List for the GIT Terminal Beginner
Anything inside [] denotes an argument you have to fill in.

git init - Initialize the current directory as a repo. Can only be used if your current directory is not already a repo.

git clone [url] - Clones a repo into a sub-directory which is named based on the repo name. Make sure you cd into that directory before try to run any commands.

git add . or git add -A - Stages all your current changes for commit.

git add [path] - Stages specific files or folders for commit.

git commit -am "[message]" - Stages any modified files then commits your changes.

git commit -m "[message]" - Commits any staged changes you have.

git checkout -b [name] - Creates a new branch and switches you to it.

git checkout [name] - Switches to the branch specificed. You must have all changes to your code committed before you are allowed to switch.

git fetch [remote] - Fetches the history from the remote specificed.

git merge [branch] - Merges the specificed branch into your current branch.

git pull - Fetches and merges your the history for the current branch from the remote.

git push - Pushes your local history to your remote.

Operating Procedure
Rule #1: Don't push broken code. You can commit broken code but never end a session by pushing something that is not working.

Beyond that, just make sure you are always working on a branch and only merge into master when you are absolutely ready. In groups you may want to designate one person who handles merging into master, just so its easier to track the changes.

Throughout a coding session, also make sure to commit things incrementially. You don't need a giant commit with everything. This also makes rolling back mistakes a little easier.

Lastly make sure you are communicating with your group. Let them know when you made a push. Tell them when you think something is ready to be deployed. Good communication helps more than anything with avoiding problems.