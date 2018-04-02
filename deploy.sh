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
REMOTEPATH='.'

if [ "$TRAVIS_BRANCH" == "master" ]; then
  echo "  on master branch";
  # lftp -u $FTP_USER,$FTP_PASS $FTP_SITE -e 'mirror --verbose -c -e -R public ~ ; exit'

   lftp -c "set ftps:initial-prot ''; set ftp:ssl-force true; set ftp:ssl-protect-data true; open ftp://$FTP_USER:$FTP_PASS@$FTP_SITE; mirror -eRv $LOCALPATH $REMOTEPATH; quit;"
else
  echo "  no deployment on other branches than master."
fi

echo "end FTP";
exit 0;
