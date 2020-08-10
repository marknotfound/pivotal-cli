# Pivotal Stories CLI
Fetch a quick list of your assigned stories in Pivotal Tracker.

## Install
```
$ git clone git@github.com:marknotfound/pivotal-cli.git
$ cd pivotal-cli
$ npm link
```

## Setup
Add the following variables to your `~/.bash_profile` or shell's equivalent:
```
export PIVOTAL_PROJECT_ID=111111 # your project ID
export PIVOTAL_USER_ID=1111111 # your user ID
export PIVOTAL_TOKEN=sfskd9123874kdj # your token (found here: https://www.pivotaltracker.com/profile)
```
Once you've installed and set everything up, go ahead and run `pivotal-stories` to get a list of your assigned stories.