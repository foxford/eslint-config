#!/bin/bash -e
SCRIPT=`realpath $0`
SCRIPTPATH=`dirname $SCRIPT`

if [ -f "$SCRIPTPATH/.makerc" ]; then
  echo "Found makerc file. Source it."
  source $SCRIPTPATH/.makerc
fi

REMOTE_DIR=${REMOTE_DIR:-''}
BUCKET=${BUCKET:-''}

if [[ ! ${SELECTEL_USER} ]]; then
  echo "Please enter your selectel user: "
  read -sr SELECTEL_USER_INPUT
  SELECTEL_USER=${SELECTEL_USER_INPUT}
fi

if [[ ! ${SELECTEL_PASSWORD} ]]; then
  echo "Please enter your selectel password: "
  read -sr SELECTEL_PASSWORD_INPUT
  SELECTEL_PASSWORD=${SELECTEL_PASSWORD_INPUT}
fi

if [[ ! ${LOCAL_DIR} ]]; then echo "ERROR: LOCAL_DIR isn't specified" 1>&2; exit 1; fi
if [[ ! ${BUCKET} ]]; then echo "ERROR: BUCKET isn't specified" 1>&2; exit 1; fi

export OS_AUTH_URL=https://api.selcdn.ru/v3
export OS_USERNAME=${SELECTEL_USER}
export OS_PASSWORD=${SELECTEL_PASSWORD}
export RCLONE_CONFIG_MYREMOTE_TYPE=swift
export RCLONE_CONFIG_MYREMOTE_ENV_AUTH=true

echo 'RUN COMMAND:'
echo "rclone copy ${LOCAL_DIR} myremote:${BUCKET}/${REMOTE_DIR} --progress"
echo ''

rclone copy ${LOCAL_DIR} myremote:${BUCKET}/${REMOTE_DIR} --progress
