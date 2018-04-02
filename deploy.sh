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

if [ "$TRAVIS_BRANCH" == "master" ]; then
  echo "  on master branch";
  lftp -u $FTP_USER,$FTP_PASS $FTP_SITE \
   -e 'mirror --verbose -c -e -R public ~ ; exit'
else
  echo "no deployment on other branches than master."
fi

echo "end FTP";
exit 0;
