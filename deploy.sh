#!/bin/bash
abort() {
    local message=$1
    echo $message
    exit -1
}
[ -z $FTP_PASS ] && abort "FTP_PASS is undefined"
[ -z $FTP_USER ] && abort "FTP_USER is undefined"
[ -z $FTP_SITE ] && abort "FTP_SITE is undefined"

echo "start FTP";

LOCALPATH='./public'
REMOTEPATH='/'

if [ "$TRAVIS_BRANCH" == "master" ]; then
  echo "  on master branch";
  lftp -f "
  open ftp://signalwerk.ch
  user $FTP_USER $FTP_PASS
  mirror --continue --reverse --delete $LOCALPATH $REMOTEPATH
  exit
  "
  echo "  done master branch";
else
  echo "  no deployment on other branches than master."
fi

echo "end FTP";
exit 0;
